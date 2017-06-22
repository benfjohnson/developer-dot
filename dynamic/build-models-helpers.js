/* Helper functions for simplifying/flattening
 * Swagger definition objects, for simple
 * liquid templating
 */

function isBasicType(def) {
    return def.type && def.type !== 'object' && def.type !== 'array';
}

function getDefName(def) {
    // Could be either an array or object response!
    const ref = def.items && def.items.$ref ? def.items.$ref : def.$ref;

    return ref.substring(ref.lastIndexOf('/') + 1);
}

function definitionContainsReference(def) {
    return def.schema && (def.schema.$ref || (def.schema.items && def.schema.items.$ref));
}

function concatenateName(string) {
    return ' > ' + string.charAt(0).toUpperCase() + string.slice(1);
}

function combineAllOf(components, definitions) {
    return components.reduce((accum, c) => {
        const props = c.$ref ?
            definitions[getDefName(c)] :
            c;

        accum.properties = {...accum.properties, ...props.properties};
        return accum;
    }, {properties: {}});
}

function addMethodToDef(schemaRef, methodName, defs) {
    defs[getDefName(schemaRef)]['x-methods-used-in'].add(methodName);
    return defs;
}

function addMethodToAllDefs(endpoint, defs, useTags) {
    let returnDefinitions = {...defs};

    // If this API groups calls under tags (for now just v2), try appending
    // first tag name to method name
    // TODO: Figure out why we have some undefined operationIds (this is a swagger violation smh)
    let methodName = endpoint.operationId ? endpoint.operationId.replace(/\s/g, '') : undefined;

    if (useTags && endpoint.tags && endpoint.tags.length) {
        methodName = `${endpoint.tags[0]}/${methodName}`;
    }

    if (endpoint.parameters) {
        const postBody = endpoint.parameters.find((p) => p.in === 'body');

        if (postBody && definitionContainsReference(postBody)) {
            returnDefinitions = addMethodToDef(postBody.schema, methodName, returnDefinitions);
        }
    }

    if (endpoint.responses) {
        Object.keys(endpoint.responses).forEach((resStatus) => {
            const response = endpoint.responses[resStatus];

            if (response && definitionContainsReference(response)) {
                returnDefinitions = addMethodToDef(response.schema, methodName, returnDefinitions);
            }
        });
    }

    return returnDefinitions;
}

// Create a set of methods each definition gets used in
// Using set due to uniqueness constraint (will convert to JSON-compatible array at the end!)
function setupDefMethodSets(defs) {
    Object.keys(defs).forEach((d) => {
        const def = defs[d];

        def['x-methods-used-in'] = new Set();
    });

    return defs;
}

function defMethodSetsToArrays(defs) {
    Object.keys(defs).forEach((d) => {
        const def = defs[d];

        def['x-methods-used-in'] = Array.from(def['x-methods-used-in']);
    });

    return defs;
}

function addMethodUsageToDefs(defs, paths, useTags) {
    let newDefs = setupDefMethodSets({...defs});

    Object.keys(paths).forEach((p) => {
        const path = paths[p];

        Object.keys(path).forEach((m) => {
            const method = path[m];

            newDefs = addMethodToAllDefs(method, newDefs, useTags);
        });
    });

    return defMethodSetsToArrays(defs);
}

// Given a definition, recurse through for any inlined
// defs and add those at the root of our definitions object
function hashNewDefinitions(definition, name, accum, allDefs) {
    if (definition.allOf) {
        // turn it into a regular object!
        /* eslint-disable no-param-reassign */
        definition = combineAllOf(definition.allOf, allDefs);
        /* eslint-enable no-param-reassign */
    }

    // array-specific logic
    if (definition.items) {
        const arr = definition.items;

        if (arr.$ref || isBasicType(arr)) {
            return arr;
        }

        // array definition needs to be flattened:
        accum[`${name}Item`] = hashNewDefinitions(arr, `${name}Item`, accum, allDefs);
        accum[name] = {type: 'array', items: {$ref: `#/definitions/${name}Item`}};
        return accum;
    }

    // non-array logic
    if (definition.$ref || isBasicType(definition)) {
        // non-inlined object, all good.
        return definition;
    }

    // Need to replace properties, stub out new entity
    accum[name] = Object.assign({}, definition, {properties: {}});

    // Object type that's defined inline, need to build its defs
    Object.keys(definition.properties || {}).forEach((propKey) => {
        const property = definition.properties[propKey];

        if (!isBasicType(property) && !property.$ref && !(property.items && (property.items.$ref || isBasicType(property.items)))) {
            // Going to recurse, build initial object
            accum[name + concatenateName(propKey)] = {};

            if (property.items) {
                accum[name + concatenateName(propKey)] = hashNewDefinitions(property.items, name + concatenateName(propKey), accum, allDefs);
                accum[name].properties[propKey] = {type: 'array', items: {$ref: `#/definitions/${name + concatenateName(propKey)}`}};
            } else {
                accum[name + concatenateName(propKey)] = hashNewDefinitions(property, name + concatenateName(propKey), accum, allDefs);
                accum[name].properties[propKey] = {$ref: `#/definitions/${name + concatenateName(propKey)}`};
            }
        } else {
            // basic property, so just add it to accum
            accum[name].properties[propKey] = property;
        }
    });

    return accum[name];
}

function buildDefinitions(definitions, paths, useTags) {
    // Contains our existing definitions, plus
    // additional ones that were defined in-line
    const returnDefinitions = {...definitions};

    const additionalDefinitions = Object.keys(definitions).reduce((accum, key) => {
        const def = definitions[key];

        hashNewDefinitions(def, key, accum, definitions);

        return accum;
    }, {});

    const allDefs = {...returnDefinitions, ...additionalDefinitions};

    return addMethodUsageToDefs({...allDefs}, {...paths}, useTags);
}

export {
    hashNewDefinitions,
    buildDefinitions,
    combineAllOf,
    concatenateName,
    isBasicType,
    getDefName,
    setupDefMethodSets,
    addMethodToDef,
    addMethodToAllDefs
};

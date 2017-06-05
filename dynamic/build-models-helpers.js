/* Helper functions for simplifying/flattening
 * Swagger definition objects, for simple
 * liquid templating
 */

function isBasicType(def) {
    return def.type && def.type !== 'object' && def.type !== 'array';
}

function concatenateName(string) {
    return ' > ' + string.charAt(0).toUpperCase() + string.slice(1);
}

function combineAllOf(components, definitions) {
    return components.reduce((accum, c) => {
        const props = c.$ref ?
            definitions[c.$ref.substring(c.$ref.lastIndexOf('/') + 1)] :
            c;

        accum.properties = {...accum.properties, ...props.properties};
        return accum;
    }, {properties: {}});
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
        accum[name] = {items: {$ref: `#/definitions/${name}Item`}};
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

function buildDefinitions(definitions) {
    // Contains our existing definitions, plus
    // additional ones that were defined in-line
    const returnDefinitions = {...definitions};

    const additionalDefinitions = Object.keys(definitions).reduce((accum, key) => {
        const def = definitions[key];

        hashNewDefinitions(def, key, accum, definitions);

        return accum;
    }, {});

    return {...returnDefinitions, ...additionalDefinitions};
}

export {
    hashNewDefinitions,
    buildDefinitions,
    combineAllOf,
    concatenateName,
    isBasicType
};

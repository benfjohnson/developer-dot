// Given array of parameters, filters out non-query string params and converts them to consummable shape
const buildSchema = (schemaName, schema, definitions) => {
    if (schema.hasOwnProperty('allOf')) {
        return schema.allOf.map(function(chunk) {
            return buildSchema(null, chunk, definitions);
        }).reduce(function(accum, chunk) {
            return Object.assign({}, accum, chunk);
        }, {});
    }

    if (schema.$ref) {
        const refArray = schema.$ref.split('/');
        const ref = refArray[refArray.length - 1];

        return buildSchema(ref, definitions[ref], definitions);
    }

    if (schema.type && schema.type === 'object') {
        const nestedSchemaProps = Object.keys(schema.properties).map(function(propName) {
            return {[propName]: buildSchema(propName, schema.properties[propName], definitions)};
        });

        return Object.assign({uiState: {visible: false}}, ...nestedSchemaProps);
    }

    if (schema.type && schema.type === 'array') {
        return {uiState: {visible: false}, fieldType: schema.type, items: buildSchema(schemaName, schema.items, definitions), value: []};
    }

    const objToReturn = {fieldType: schema.type, value: ''};

    if (schema.example) {
        objToReturn.example = schema.example;
    }
    if (schema.description) {
        objToReturn.description = schema.description;
    }
    if (schema.enum) {
        objToReturn.enum = schema.enum;
    }
    if (schema.format) {
        objToReturn.format = schema.format;
    }
    if (schema.hasOwnProperty('minimum')) {
        objToReturn.minimum = schema.minimum;
    }
    if (schema.hasOwnProperty('maximum')) {
        objToReturn.maximum = schema.maximum;
    }

    return objToReturn;
};

const buildQueryString = (endpointParams) => {
    return endpointParams.filter((p) => (p.in === 'query')).reduce((queryObj, p) => (
        {
            description: p.description,
            required: p.required,
            value: '',
            example: p.example || ''
        }
    ), {});
};

const buildPostBody = (endpointParams) => {
    const postBodyParams = endpointParams.filter((p) => (p.in === 'body'));

    // Can only be one post body per request, so safe to take first item
    return postBodyParams.length ? buildSchema('postBody', postBodyParams[0].schema, postBodyParams[0].schema.definitions) : null;
};

export default (api, rootPath) => {
    // Build base URL path (e.g. http://localhost:8082/v3)
    // var rootPath = api.scheme + '://' + api.host + api.basePath === '/' ? '' : api.basePath;
    const root = (api.schemes[0] && api.host && api.basePath) ? api.schemes[0] + '://' + api.host + (api.basePath !== '/' ? api.basePath : '') : rootPath;

    const swagData = [];

    api.apisArray.forEach((apiDef) => {
        // For every endpoint (api path + method) build a req
        apiDef.operationsArray.forEach((endpoint) => {
            // If we've already seen this endpoint in a different operationsArray, ignore:
            if (swagData.some((ep) => (ep.name === endpoint.summary))) {
                return;
            }

            const apiMethod = {
                name: endpoint.summary,
                description: endpoint.description,
                path: root + endpoint.path,
                action: endpoint.method
            };

            const endpointParams = endpoint.parameters || [];
            const queryString = buildQueryString(endpointParams);
            const postBody = buildPostBody(endpointParams);

            if (Object.keys(queryString).length) {
                apiMethod.queryString = queryString;
            }
            if (postBody) {
                apiMethod.postBody = postBody;
            }

            swagData.push(apiMethod);
        });
    });

    return swagData;
};

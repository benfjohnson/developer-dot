import {buildQsPath, buildCurl} from './helpers';

// Given array of parameters, filters out non-query string params and converts them to consummable shape
const buildSchema = (schemaName, schema, definitions) => {
    if (schema.hasOwnProperty('x-visibility') && schema['x-visibility'] === 'hidden') {
        return undefined;
    }

    if (schema.hasOwnProperty('allOf')) {
        return schema.allOf.map(function(chunk) {
            return buildSchema(null, chunk, definitions);
        }).reduce(function(accum, chunk) {
            return Object.assign({}, accum, chunk);
        }, {});
    }

    if (schema.type && schema.type === 'object') {
        const nestedSchemaProps = Object.keys(schema.properties).map(function(propName) {
            return {[propName]: buildSchema(propName, schema.properties[propName], definitions)};
        });

        return Object.assign({uiState: {visible: false}}, ...nestedSchemaProps);
    }

    if (schema.type && schema.type === 'array') {
        const arraySchema = buildSchema(schemaName, schema.items, definitions);

        // items holds the schema definition of objects in our array, and value holds the actual objects of said schema...
        return {uiState: {visible: true}, fieldType: schema.type, items: arraySchema, value: [arraySchema]};
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
    {...queryObj, [p.name]: {description: p.description, required: p.required, value: '', example: p.example || p['x-example'] || '', enum: p.enum}}
    ), {});
};

const buildPostBody = (endpointParams) => {
    const postBodyParams = endpointParams.filter((p) => (p.in === 'body'));

    // Can only be one post body per request, so safe to take first item
    return postBodyParams.length ? buildSchema('postBody', postBodyParams[0].schema, postBodyParams[0].schema.definitions) : null;
};

export default (api, rootPath) => {

    console.log('swaggerDoc', api);
    // Build base URL path (e.g. http://localhost:8082/v3)
    const root = (api.schemes[0] && api.host && api.basePath) ? api.schemes[0] + '://' + api.host + (api.basePath !== '/' ? api.basePath : '') : rootPath;

    const swaggerData = [];

    Object.keys(api.paths).forEach((k) => {
        const endpoint = api.paths[k];

        Object.keys(endpoint).forEach((action) => {
            const apiMethod = {
                name: endpoint[action].summary,
                description: endpoint[action].description,
                path: root + k,
                action: action
            };

            const endpointParams = endpoint[action].parameters || [];
            const queryString = buildQueryString(endpointParams);
            const postBody = buildPostBody(endpointParams);

            if (Object.keys(queryString).length) {
                apiMethod.queryString = queryString;
            }
            if (postBody) {
                apiMethod.postBody = postBody;
            }
            apiMethod.qsPath = buildQsPath(queryString);
            apiMethod.curl = buildCurl(apiMethod);


            apiMethod.response = {
                description: endpoint[action].responses[200].description,
                body: {}
            };

            swaggerData.push(apiMethod);
        });
    });

    return swaggerData;
};

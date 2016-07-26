import {buildQsPath, buildCurl, replacePathParams, buildPostmanCollection, buildAuth} from './helpers';

// Given array of parameters, filters out non-query string params and converts them to consummable shape

const buildSchema = (schema, required = [], propName = null) => {
    if (schema.hasOwnProperty('x-visibility') && schema['x-visibility'] === 'hidden') {
        return undefined;
    }

    if ((!schema.type || schema.type === 'object') && !schema.properties && !schema.hasOwnProperty('allOf')) {
        return undefined;
    }

    if (schema.hasOwnProperty('allOf')) {
        return schema.allOf.map((chunk) => (buildSchema(chunk))).reduce((accum, chunk) => {
            return Object.assign({}, accum, chunk);
        }, {});
    }

    if (schema.type && schema.type === 'object' || schema.type === undefined) {
        const nestedSchemaProps = Object.keys(schema.properties).map((nestedPropName) => ({[nestedPropName]: buildSchema(schema.properties[nestedPropName], schema.required, nestedPropName)}));

        return Object.assign({uiState: {visible: false}, required: required.includes(propName)}, ...nestedSchemaProps);
    }

    if (schema.type && schema.type === 'array') {
        const arraySchema = buildSchema(schema.items);

        // items holds the schema definition of objects in our array, and value holds the actual objects of said schema...
        return {uiState: {visible: false}, fieldType: schema.type, required: required.includes(propName), items: arraySchema, value: [arraySchema]};
    }

    const objToReturn = {fieldType: schema.type, required: required.includes(propName), value: ''};

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

// // todo refactor to use buildSchema but return different shape object for request vs response
// const buildResponse = (schema) => {
//     /* Only time a schema doesn't have a type is with objects (sometimes), which
//      * should ALWAYS have a `properties` property. We just return undefined if this isn't the case
//      */
//     if ((!schema.type || schema.type === 'object') && !schema.properties && !schema.hasOwnProperty('allOf')) {
//         return undefined;
//     }
//     // simple case
//     if (schema.type && schema.type !== 'array' && schema.type !== 'object') {
//         const objToReturn = {fieldType: schema.type, example: schema.example || ''};

//         if (schema.description) {
//             objToReturn.description = schema.description;
//         }
//         if (schema.enum) {
//             objToReturn.enum = schema.enum;
//         }
//         if (schema.format) {
//             objToReturn.format = schema.format;
//         }
//         if (schema.hasOwnProperty('minimum')) {
//             objToReturn.minimum = schema.minimum;
//         }
//         if (schema.hasOwnProperty('maximum')) {
//             objToReturn.maximum = schema.maximum;
//         }

//         return objToReturn;
//     }

//     if (schema.hasOwnProperty('allOf')) {
//         return schema.allOf.map((chunk) => (buildResponse(chunk))).reduce((accum, chunk) => (Object.assign({}, accum, chunk)), {});
//     }

//     if (schema.type && schema.type === 'array') {
//         const arraySchema = buildResponse(schema.items);

//         // items holds the schema definition of objects in our array, and value holds the actual objects of said schema...
//         return {fieldType: schema.type, items: arraySchema, example: [arraySchema]};
//     }

//     // object
//     const nestedSchemaProps = Object.keys(schema.properties).map((propName) => ({[propName]: buildResponse(schema.properties[propName])}));

//     return Object.assign({}, ...nestedSchemaProps);
// };

// const buildExample = (body) => {
//     if (body.fieldType && body.fieldType !== 'array' && body.fieldType !== 'object') {
//         if (body.fieldType === 'boolean') {
//             return body.example;
//         }

//         return body.example && body.example.length ? body.example : undefined;
//     }

//     if (body.fieldType && body.fieldType === 'array') {
//         return [buildExample(body.items)];
//     }

//     return Object.keys(body).filter((n) => n !== 'uiState' && n !== 'required' && body[n]).reduce((accum, propName) => {
//         return {...accum, [propName]: buildExample(body[propName])};
//     }, {});
// };

// const buildModel = (body, type) => {
//     /* Working on fixing YAML import */
//     if (body.hasOwnProperty('fieldType') && body.fieldType === undefined) {
//         return body;
//     }

//     if (body.fieldType && body.fieldType !== 'array') {
//         return {
//             description: body.description,
//             required: body.required,
//             type: body.fieldType,
//             format: body.format,
//             values: body.enum,
//             minimum: body.minimum,
//             maximum: body.maximum
//         };
//     }

//     if (body.fieldType && body.fieldType === 'array') {
//         return [buildModel(body.items, type)];
//     }

//     return Object.keys(body).filter((n) => n !== 'uiState' && body[n]).reduce((accum, propName) => {
//         const model = {...accum, [propName]: buildModel(body[propName], type)};

//         if (type === 'request') {
//             model.required = model.hasOwnProperty('required') && model.required ? true : undefined;
//         }

//         return model;
//     }, {});
// };

// Used to generate either query string or path parameters:
// paramType should be either 'query' or 'path'
const buildRequestParams = (params, paramType) => {
    if (paramType !== 'query' && paramType !== 'path') {
        throw new Error('In parseSwaggerUI.buildRequestParams: Invalid `paramType` ' + paramType);
    }
    return params.filter((p) => (p.in === paramType)).reduce((paramObj, p) => (
    {...paramObj, [p.name]: {description: p.description, required: p.required, value: '', example: p.example || p['x-example'] || '', enum: p.enum, fieldType: p.type}}
    ), {});
};

const buildPostBody = (endpointParams) => {
    const postBodyParams = endpointParams.filter((p) => (p.in === 'body'));

    // Can only be one post body per request, so safe to take first item
    return postBodyParams.length ? buildSchema(postBodyParams[0].schema) : null;
};

export default (api, rootPath) => {
    // Build base URL path (e.g. http://localhost:8082/v3)

    const scheme = api.schemes && api.schemes[0] ? api.schemes[0] : 'http';
    const root = (scheme && api.host && api.basePath) ? scheme + '://' + api.host + (api.basePath !== '/' ? api.basePath : '') : rootPath;

    const proxyRoot = api['x-api-proxy'] || null;

    const swaggerData = {
        apiName: api.info.title,
        apiDescription: api.info.description,
        appLoaded: false,
        apiType: api['x-ApiType'] || 'REST'
    };

    swaggerData.auth = buildAuth(api['x-auth-formula']);

    swaggerData.apiInfo = [];

    Object.keys(api.paths).forEach((k) => {
        const endpoint = api.paths[k];

        Object.keys(endpoint).forEach((action) => {
            const apiMethod = {
                name: endpoint[action].summary || endpoint[action].operationId,
                description: endpoint[action].description,
                path: root + k,
                action: action,
                isAuthenticated: Boolean(swaggerData.auth),
                apiConsoleVisible: false
            };

            const endpointParams = endpoint[action].parameters || [];
            const pathParams = buildRequestParams(endpointParams, 'path');
            const queryString = buildRequestParams(endpointParams, 'query');

            const postBody = buildPostBody(endpointParams);

            if (proxyRoot) {
                apiMethod.proxyRoute = proxyRoot + k;
            }

            if (Object.keys(pathParams).length) {
                apiMethod.pathParams = pathParams;
            }
            if (Object.keys(queryString).length) {
                apiMethod.queryString = queryString;
                apiMethod.qsPath = buildQsPath(queryString);
            }
            if (postBody) {
                apiMethod.postBody = postBody;
            }

            apiMethod.curl = buildCurl(swaggerData.auth, apiMethod);

            if (endpoint[action].responses[200].schema) {
                apiMethod.responseSchema = buildSchema(endpoint[action].responses[200].schema);
            }

            apiMethod.requestSchema = buildPostBody(endpointParams);

            swaggerData.apiInfo.push(apiMethod);
        });
    });

    swaggerData.postmanCollection = buildPostmanCollection(swaggerData);

    return swaggerData;
};

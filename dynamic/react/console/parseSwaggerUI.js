import {buildQsPath, buildCurl} from './helpers';

// Given array of parameters, filters out non-query string params and converts them to consummable shape
const buildSchema = (schema) => {
    if (schema.hasOwnProperty('x-visibility') && schema['x-visibility'] === 'hidden') {
        return undefined;
    }

    if (schema.hasOwnProperty('allOf')) {
        return schema.allOf.map((chunk) => (buildSchema(chunk))).reduce((accum, chunk) => {
            return Object.assign({}, accum, chunk);
        }, {});
    }

    if (schema.type && schema.type === 'object') {
        const nestedSchemaProps = Object.keys(schema.properties).map((propName) => ({[propName]: buildSchema(schema.properties[propName])}));

        return Object.assign({uiState: {visible: false}}, ...nestedSchemaProps);
    }

    if (schema.type && schema.type === 'array') {
        const arraySchema = buildSchema(schema.items);

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

// Given array of parameters, filters out non-query string params and converts them to consummable shape
const buildResponse = (schema) => {
    if (schema.hasOwnProperty('allOf')) {
        return schema.allOf.map((chunk) => (buildResponse(chunk))).reduce((accum, chunk) => (Object.assign({}, accum, chunk)), {});
    }

    if (schema.type && schema.type === 'object') {
        const nestedSchemaProps = Object.keys(schema.properties).map((propName) => ({[propName]: buildResponse(schema.properties[propName])}));

        return Object.assign({}, ...nestedSchemaProps);
    }

    if (schema.type && schema.type === 'array') {
        const arraySchema = buildResponse(schema.items);

        // items holds the schema definition of objects in our array, and value holds the actual objects of said schema...
        return {fieldType: schema.type, items: arraySchema, example: [arraySchema]};
    }

    const objToReturn = {fieldType: schema.type, example: schema.example || ''};

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

const buildResponseExample = (body) => {
    if (body.hasOwnProperty('example') && body.fieldType !== 'array') {
        return body.example;
    }

    if (body.fieldType === 'array') {
        const arrayBody = body.example.reduce((accum, prop) => {
            if (prop.hasOwnProperty('example') && prop.example === '') {
                return accum;
            }
            return accum.concat(buildResponseExample(prop));
        }, []);

        return arrayBody.length ? arrayBody : undefined;
    }

    const objBody = Object.keys(body).reduce((accum, propName) => {
        if (body[propName].hasOwnProperty('example') && body[propName].example === '') {
            return accum;
        }

        return {...accum, [propName]: buildResponseExample(body[propName])};
    }, {});

    return Object.keys(objBody).length ? objBody : undefined;
};
const buildResponseModel = (body) => {
    return Object.keys(body).reduce((accumulator, k) => {
        if (!body[k].hasOwnProperty('fieldType')) {
            accumulator[k] = buildResponseModel(body[k]);
        } else {
            accumulator[k] = {
                type: body[k].fieldType
            };

            if (body[k].fieldType === 'array') {
                accumulator[k].description = body[k].items.description;
                accumulator[k].values = body[k].items.enum;
            }
            if (body[k].fieldType === 'string') {
                accumulator[k].description = body[k].description;
                accumulator[k].values = body[k].enum;
            }
        }
        return accumulator;
    }, {});
};

// Used to generate either query string or path parameters for our console app:
// paramType should be either 'query' or 'path'
const buildRequestParams = (params, paramType) => {
    if (paramType !== 'query' && paramType !== 'path') {
        throw new Error('In parseSwaggerUI.buildRequestParams: Invalid `paramType` ' + paramType);
    }
    return params.filter((p) => (p.in === paramType)).reduce((paramObj, p) => (
    {...paramObj, [p.name]: {description: p.description, required: p.required, value: '', example: p.example || p['x-example'] || ''}}
    ), {});
};

const buildPostBody = (endpointParams) => {
    const postBodyParams = endpointParams.filter((p) => (p.in === 'body'));

    // Can only be one post body per request, so safe to take first item
    return postBodyParams.length ? buildSchema(postBodyParams[0].schema) : null;
};

export default (api, rootPath) => {
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
            const queryString = buildRequestParams(endpointParams, 'query');
            const postBody = buildPostBody(endpointParams);
            const pathParams = buildRequestParams(endpointParams, 'path');

            if (Object.keys(queryString).length) {
                apiMethod.queryString = queryString;
                apiMethod.qsPath = buildQsPath(queryString);
            }
            if (postBody) {
                apiMethod.postBody = postBody;
            }
            if (Object.keys(pathParams).length) {
                apiMethod.pathParams = pathParams;
            }

            apiMethod.curl = buildCurl(apiMethod);

            if (endpoint[action].responses[200].schema) {
                const normalizedResponse = buildResponse(endpoint[action].responses[200].schema);

                apiMethod.response = {
                    description: endpoint[action].responses[200].description,
                    model: buildResponseModel(normalizedResponse),
                    example: buildResponseExample(normalizedResponse),
                    currentVisibility: 'example'
                };
            }
            swaggerData.push(apiMethod);
        });
    });

    return swaggerData;
};

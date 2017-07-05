import {buildPostmanCollection, buildAuth} from './react/api-app/helpers';
import {buildQueryString, reduceParamsToKeyValuePair, buildCurl, buildInitialPostBodyData} from './react/shared/helpers';

// Given array of parameters, filters out non-query string params and converts them to consummable shape
const buildSchema = (schema, required = [], excludedProperties = [], propName = null, parentSchema = null) => {
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

    if ((schema.type && schema.type === 'object' || schema.type === undefined) &&
        (schema !== parentSchema)) {
        const nestedSchemaProps = Object.keys(schema.properties).map((nestedPropName) => ({
            [nestedPropName]: buildSchema(schema.properties[nestedPropName], schema.required, schema['x-excludedProperties'], nestedPropName, schema)
        }));

        return Object.assign({required: required.includes(propName), isExcluded: excludedProperties.includes(propName)}, ...nestedSchemaProps);
    }

    if ((schema.type && schema.type === 'array') &&
        (schema.items !== parentSchema)) {
        const arraySchema = buildSchema(schema.items, schema.items.required, schema.items['x-excludedProperties']);

        // items holds the schema definition of objects in our array, and value holds the actual objects of said schema...
        return {fieldType: schema.type, required: required.includes(propName), isExcluded: excludedProperties.includes(propName), items: arraySchema};
    }

    const objToReturn = {fieldType: schema.type, required: required.includes(propName), isExcluded: excludedProperties.includes(propName)};

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

// Used to generate either query string or path parameters:
// paramType should be either 'query' or 'path'
const buildRequestParams = (params, paramType) => {
    if (paramType !== 'query' && paramType !== 'path' && paramType !== 'header') {
        throw new Error('In parseSwaggerUI.buildRequestParams: Invalid `paramType` ' + paramType);
    }
    return params.filter((p) => (p.in === paramType)).reduce((paramObj, p) => ({...paramObj, [p.name]: {description: p.description, required: p.required, value: '', example: p.example || p['x-example'] || '', enum: p.enum, fieldType: p.type}}), {});
};

// Builds a schema of what a request to a particular endpoint should look like, based on its Swagger definition
const buildRequestSchema = (endpointParams, isRef) => {
    let postBodyParams = endpointParams.filter((p) => (p.in === 'body'));

    if (postBodyParams.length === 0) {
        return {requestSchema: null};
    }

    // Can only be one post body per request, so safe to take first item
    postBodyParams = postBodyParams[0];

    // if isRef is true, the swagger doc has not been dereference and therefore
    //   does not need to build the schema
    if (isRef) {
        return {requestSchema: postBodyParams};
    }

    const result = buildSchema(postBodyParams.schema);
    const example = postBodyParams.schema.example;

    return {requestSchemaExample: example, requestSchema: result};
};

// const buildTagEndpointMap = (tags)

export default (api, apiWithRefs, rootPath) => {
    // Build base URL path (e.g. http://localhost:8082/v3)

    const scheme = api.schemes && api.schemes[0] ? api.schemes[0] : 'http';
    const root = (scheme && api.host && api.basePath) ? scheme + '://' + api.host + (api.basePath !== '/' ? api.basePath : '') : rootPath;
    const apiProxy = api['x-api-proxy'] || null;

    const swaggerData = {
        /* `tagMap`TO BE DELETED FROM APP STATE
         * Used to build pages on a per-tag (rather than per-api) basis
         * Only create it and populate it with a mapping if specified by `x-group-by-tags` header in API
         */
        tagMap: api['x-group-by-tags'] ? {} : null,
        apiName: api.info.title,
        version: api['x-avalara-version'],
        apiDescription: api.info.description,
        apiType: api['x-ApiType'] || 'SOAP',
        sampleAuthHeader: api['x-sample-auth-header'] || null,
        sampleContentType: api.consumes || null
    };

    swaggerData.auth = buildAuth(api['x-auth-formula']);

    swaggerData.apiEndpoints = [];

    Object.keys(api.paths).forEach((k) => {
        const endpoint = api.paths[k];
        const endpointWithRefs = apiWithRefs.paths[k];

        // console.log(`!!! ${JSON.stringify(api.paths)}`);

        Object.keys(endpoint).forEach((action) => {
            // console.log(`@@@ ${endpoint[action].operationId}`);
            if (action.indexOf('parameters') < 0) {
                const apiMethod = {
                    operationId: endpoint[action].operationId,
                    name: endpoint[action].summary || endpoint[action].operationId,
                    description: endpoint[action].description,
                    path: root + k,
                    action: action,
                    sampleAuthHeader: swaggerData.sampleAuthHeader,
                    // Determines whether or not we show API console input fields for params in the 'x-excludedProperties' array in Swagger
                    showExcludedPostBodyFields: false,
                    apiConsoleLoading: false
                };

                if (api['x-production-host']) {
                    apiMethod.productionPath = (scheme && api.basePath) ? scheme + '://' + api['x-production-host'] + (api.basePath !== '/' ? api.basePath : '') + k : rootPath + k;
                }

                // Update `tagMap` for this endpoint
                if (swaggerData.tagMap && endpoint[action].tags && endpoint[action].tags.length) {
                    endpoint[action].tags.forEach((tag) => {
                        swaggerData.tagMap[tag] = swaggerData.tagMap[tag] || [];
                        swaggerData.tagMap[tag].push(apiMethod.operationId);
                    });
                }

                const endpointParams = endpoint[action].parameters || [];
                const endpointParamsWithRefs = endpointWithRefs[action].parameters || [];
                const headerParams = buildRequestParams(endpointParams, 'header');
                const pathParams = buildRequestParams(endpointParams, 'path');
                const queryString = buildRequestParams(endpointParams, 'query');

                if (apiProxy) {
                    apiMethod.proxy = apiProxy;
                }

                if (Object.keys(headerParams).length) {
                    apiMethod.headerParams = headerParams;
                }
                if (Object.keys(pathParams).length) {
                    apiMethod.pathParams = pathParams;
                }
                if (Object.keys(queryString).length) {
                    apiMethod.queryString = queryString;
                    apiMethod.qsPath = buildQueryString(reduceParamsToKeyValuePair(queryString));
                }

                const {requestSchemaExample, requestSchema} = buildRequestSchema(endpointParams);
                const requestSchemaWithRefs = buildRequestSchema(endpointParamsWithRefs, true).requestSchema;

                if (requestSchema) {
                    apiMethod.requestSchema = requestSchema;
                    apiMethod.requestSchemaExample = requestSchemaExample;
                    apiMethod.requestSchemaWithRefs = requestSchemaWithRefs;
                    apiMethod.postBody = buildInitialPostBodyData(requestSchema, apiMethod.showExcludedPostBodyFields);
                }

                apiMethod.curl = buildCurl(swaggerData.sampleAuthHeader, apiMethod);

                // console.log(`*** ${JSON.stringify(endpoint[action].responses)}`);

                if (endpoint[action].responses[200] && endpoint[action].responses[200].schema) {
                    apiMethod.responseSchema = buildSchema(endpoint[action].responses[200].schema);
                    apiMethod.responseSchemaWithRefs = endpointWithRefs[action].responses[200];
                } else if (endpoint[action].responses[204] && endpoint[action].responses[204].schema) {
                    apiMethod.responseSchema = buildSchema(endpoint[action].responses[204].schema);
                    apiMethod.responseSchemaWithRefs = endpointWithRefs[action].responses[204];
                }

                apiMethod.produces = endpoint[action].produces || api.produces || [];

                swaggerData.apiEndpoints.push(apiMethod);
            }
        });
    });

    swaggerData.postmanCollection = buildPostmanCollection(swaggerData);

    // Give every endpoint a simple ID
    return {...swaggerData, apiEndpoints: swaggerData.apiEndpoints.map((endp, i) => ({...endp, id: i}))};
};

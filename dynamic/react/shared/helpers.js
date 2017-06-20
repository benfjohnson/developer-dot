/* global AWS:false */

// fetch polyfill
import 'whatwg-fetch';

// Returns a bool if no example data exists at any point in the schema of the Post Body, Query String or Path Param
const hasExampleData = (type, paramObj = {}) => {
    if (type !== 'QUERY_STRING' && type !== 'POST_BODY' && type !== 'PATH_PARAM') {
        throw new Error('helpers.hasExampleData error: Did not recognize `type` ' + type);
    }

    // For a QueryString or PathParam, there's no nested props, so we can determine
    // existence of an example value by just searching through `paramObj`'s keys
    if (type === 'QUERY_STRING' || type === 'PATH_PARAM') {
        return Object.keys(paramObj).some((param) => paramObj[param].example);
    }

    // At this point, object must be a PostBody

    // If `paramObj` is a primitive type -- string, number, etc. -- can immediately return
    if (paramObj.fieldType && paramObj.fieldType !== 'array') {
        return paramObj.hasOwnProperty('example') && paramObj.example !== '';
    }

    // Dealing with an arbitrarily-nested PostBody of type Array or Object now
    // Recurse on either the collection.items or the Object properties

    if (paramObj.fieldType && paramObj.fieldType === 'array') {
        return hasExampleData('POST_BODY', paramObj.items);
    }

    return Object.keys(paramObj).filter((k) => (k !== 'required' && k !== 'isExcluded')).map((itm) => hasExampleData('POST_BODY', paramObj[itm])).some((wasTrue) => wasTrue);
};

// Func to recurse through a postBodySchema and return true if any properties have an isExcluded property of `true`
const hasExcludedProperties = (postBodySchema) => {
    // If an object or array has an isExcluded of `true`, then our work is done. If it's a 'primitive' object (string, number, bool) return its value regardless
    if (postBodySchema.isExcluded || (postBodySchema.fieldType && postBodySchema.fieldType !== 'array')) {
        return postBodySchema.isExcluded;
    }
    // Wasn't primitive or a true isExcluded, so we recurse on either the array's `items` property or the object keys
    if (postBodySchema.fieldType && postBodySchema.fieldType === 'array') {
        return hasExcludedProperties(postBodySchema.items);
    }
    // Don't need to filter out `fieldType` prop since objects don't have it
    return Object.keys(postBodySchema).filter((key) => key !== 'required' && key !== 'isExcluded').some((propertyName) => {
        return hasExcludedProperties(postBodySchema[propertyName]);
    });
};

// Function that converts Map<string, {example, fieldType, required, value}>
// to Map<string, string>. Recipes only store key-value string pairs for their path params and query strings
// so use this when dealing with Get Started or Api Reference apps to reduce to that
const reduceParamsToKeyValuePair = (params = {}) => Object.keys(params).reduce((accum, k) => ({...accum, [k]: params[k].value}), {});

/* (String, HashMap<String, String>) -> String
 * Replaces {}-delimited placeholder values in a string with their equiv values
 * from a key-value reference object
 */
const replaceStringPlaceholders = (path, map) => {
    return Object.keys(map).reduce((accum, key) => {
        return map[key] ? accum.replace(`{${key}}`, map[key]) : accum;
    }, path);
};

/* (HashMap<String, String>) -> String
 * Given a key-value store, builds a URL query string
 * Returns an empty string if invalid map provided
 */
const buildQueryString = (map = {}) => {
    const queryString = Object.keys(map).map((key) => map[key] ? `${key}=${map[key]}` : '').filter((keyValStr) => keyValStr !== '').join('&');

    return queryString ? `?${queryString}` : '';
};

/* ******* FILL SAMPLE DATA AND RESET API CONSOLE DATA HELPERS ******* */
const fillOrRemoveRequestParamSampleData = (params, remove) => {
    if (remove) {
        return Object.keys(params).reduce((accum, pName) => {
            accum[pName] = {...params[pName], value: ''};
            return accum;
        }, {});
    }

    return Object.keys(params).reduce((newParams, paramName) => {
        if (params[paramName].example) {
            newParams[paramName] = {...params[paramName], value: params[paramName].example};
        } else {
            newParams[paramName] = params[paramName];
        }

        return newParams;
    }, {});
};
// Generates fills sample data in postBody given Post Body's schema
const fillPostBodySampleData = (body, showExcludedPostBodyFields) => {
    if (body === undefined || (body.isExcluded && !showExcludedPostBodyFields)) {
        return undefined;
    }
    if (body.fieldType !== 'array' && body.fieldType !== 'object' && body.fieldType) {
        return body.example || undefined;
    }

    if (body.fieldType === 'array') {
        return [fillPostBodySampleData(body.items, showExcludedPostBodyFields)];
    }
    const objBody = Object.keys(body).filter((n) => n !== 'required' && n !== 'isExcluded').reduce((accum, propName) => {
        return {...accum, [propName]: fillPostBodySampleData(body[propName], showExcludedPostBodyFields)};
    }, {});

    return objBody;
};

// This is mainly used to dynamically build a cURL req based on user's API console input!
// staticValues parameter will build curl based on example data, and not latest
// API console inputs for an endpoint. This is used only by our "Example Using CURL" doc sections.
const buildCurl = (sampleAuthHeader, endpoint, staticValues = false) => {
    const endpointPath = replaceStringPlaceholders(endpoint.path, reduceParamsToKeyValuePair(endpoint.pathParams));

    let curl = `curl
    -X ${endpoint.action.toUpperCase()}
    -H 'Accept: application/json'`;

    if (sampleAuthHeader) {
        curl += `
    -H 'Authorization: ${sampleAuthHeader}'`;
    }

    if (endpoint.postBody) {
        const curlData = staticValues ? fillPostBodySampleData(endpoint.requestSchema) : endpoint.postBody;

        curl += `
    -H 'Content-Type: application/json'
    --data '${JSON.stringify(curlData, null, 2)}'`;
    }

    curl += `
    ${endpointPath}${endpoint.qsPath || ''}`;

    return curl;
};

// Generates initial postBody given Post Body's schema
const buildInitialPostBodyData = (body, showExcludedPostBodyFields) => {
    if (body === undefined || (body.isExcluded && !showExcludedPostBodyFields)) {
        return undefined;
    }
    if (body.fieldType !== 'array' && body.fieldType !== 'object' && body.fieldType) {
        return undefined;
    }

    if (body.fieldType && body.fieldType === 'array') {
        return [buildInitialPostBodyData(body.items, showExcludedPostBodyFields)];
    }
    const objBody = Object.keys(body).filter((n) => n !== 'required' && n !== 'isExcluded').reduce((accum, propName) => {
        return {...accum, [propName]: buildInitialPostBodyData(body[propName], showExcludedPostBodyFields)};
    }, {});

    return objBody;
};
const fillOrRemoveSampleData = (endpointState, remove = false) => {
    if (endpointState.queryString) {
        endpointState.queryString = fillOrRemoveRequestParamSampleData(endpointState.queryString, remove);
    }

    if (endpointState.pathParams) {
        endpointState.pathParams = fillOrRemoveRequestParamSampleData(endpointState.pathParams, remove);
    }

    if (endpointState.postBody) {
        if (remove) {
            endpointState.postBody = buildInitialPostBodyData(endpointState.requestSchema, endpointState.showExcludedPostBodyFields);
        } else if (endpointState.requestSchemaExample) {
            endpointState.postBody = endpointState.requestSchemaExample;
        } else {
            endpointState.postBody = fillPostBodySampleData(endpointState.requestSchema, endpointState.showExcludedPostBodyFields);
        }
    }

    return endpointState;
};
/* ******* END FILL SAMPLE DATA AND RESET API CONSOLE DATA HELPERS ******* */

const submitProxiedRequest = (endpoint) => {
    const [bucket, key] = endpoint.proxy.key.location.split('/');
    /* eslint-disable no-undef */
    // AWS node library doesn't work with browserify, hardcoded the script tag into default.html
    const keyBucket = new AWS.S3({params: {Bucket: bucket, Key: key}});

    /* eslint-enable no-undef */
    return keyBucket.makeUnauthenticatedRequest('getObject', {}).promise()
    .then((bucketRes) => {
        return fetch(endpoint.proxy.route, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                apiKey: bucketRes.Body.toString(),
                method: endpoint.action,
                route: endpoint.path,
                queryString: endpoint.queryString || {},
                pathParams: endpoint.pathParams || {},
                postBody: endpoint.postBody
            })
        });
    })
    .then((rawApiRes) => {
        return rawApiRes.json().then((body) => {
            return {
                status: rawApiRes.status.toString(),
                statusMessage: rawApiRes.statusText,
                body: body
            };
        });
    });
};


/* (url: string, action: string, postBody?: {}|[]) -> Promise
 * Given the above inputs, determines if an AWS proxy key is needed to auth the API request
 * The correct key is requested if so, and returns a promise which will yield the API request results
 */
const submitApiRequest = (url, action, postBody = null) => {
    const req = {
        method: action,
        headers: {}
    };

    if (postBody) {
        req.headers['Content-Type'] = 'application/json';
        req.body = JSON.stringify(postBody);
    }
    return fetch(url, req)
    .then((rawApiRes) => {
        return rawApiRes.json().then((body) => {
            return {
                status: rawApiRes.status.toString(),
                statusMessage: rawApiRes.statusText,
                body: body
            };
        });
    });
};

export {hasExampleData, buildCurl, fillOrRemoveSampleData, buildInitialPostBodyData, fillPostBodySampleData, fillOrRemoveRequestParamSampleData, hasExcludedProperties, submitApiRequest, submitProxiedRequest, reduceParamsToKeyValuePair, replaceStringPlaceholders, buildQueryString};

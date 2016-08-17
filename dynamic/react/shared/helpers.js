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

const replacePathParams = (path, pathParams, example = false) => {
    let newPath = path;

    if (example) {
        if (pathParams && Object.keys(pathParams)) {
            Object.keys(pathParams).forEach((key) => {
                newPath = newPath.replace(`{${key}}`, pathParams[key]);
            });
        }
    } else if (pathParams && Object.keys(pathParams).some((k) => pathParams[k].value)) {
        Object.keys(pathParams).forEach((key) => {
            // Replace all path param placeholders with their values, only if it's non-empty/null
            if (pathParams[key].value) {
                newPath = newPath.replace(`{${key}}`, pathParams[key].value);
            }
        });
    }
    return newPath;
};

const buildQsPath = (queryString, example = false) => {
    let qsPath = '';
    let addedQsParamCount = 0;

    if (example) {
        if (queryString && Object.keys(queryString)) {
            qsPath = Object.keys(queryString).reduce((qs, param) => (`${qs}${addedQsParamCount++ > 0 ? '&' : ''}${param}=${queryString[param]}`), '?');
        }
    } else if (queryString && Object.keys(queryString).some((p) => queryString[p] && queryString[p].value)) {
        qsPath = Object.keys(queryString).reduce((qs, param) => (queryString[param].value ? `${qs}${addedQsParamCount++ > 0 ? '&' : ''}${param}=${queryString[param].value}` : qs), '?');
    }

    return qsPath;
};

const buildCurl = (auth, endpoint) => {
    const endpointPath = replacePathParams(endpoint.path, endpoint.pathParams);

    let curl = `curl -X ${endpoint.action.toUpperCase()} "${endpointPath}${endpoint.qsPath || ''}" -H "Accept: application/json"`;

    if (auth) {
        curl += ' -H "Authorization: <YOUR_AUTH_INFO_HERE>"';
    }

    if (endpoint.postBodyData) {
        curl += ` -H "Content-Type: application/json" --data '${JSON.stringify(endpoint.postBodyData)}'`;
    }
    return curl;
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
// Generates fills sample data in postBodyData given Post Body's schema
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
// Generates initial postBodyData given Post Body's schema
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

    if (endpointState.postBodyData) {
        endpointState.postBodyData = remove ? buildInitialPostBodyData(endpointState.postBody, endpointState.showExcludedPostBodyFields) : fillPostBodySampleData(endpointState.postBody, endpointState.showExcludedPostBodyFields);
    }

    return endpointState;
};
/* ******* END FILL SAMPLE DATA AND RESET API CONSOLE DATA HELPERS ******* */

export {hasExampleData, replacePathParams, buildQsPath, buildCurl, fillOrRemoveSampleData, buildInitialPostBodyData, fillPostBodySampleData, fillOrRemoveRequestParamSampleData, hasExcludedProperties};

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

    return Object.keys(paramObj).filter((k) => k !== 'uiState').map((itm) => hasExampleData('POST_BODY', paramObj[itm])).some((wasTrue) => wasTrue);
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
// Generates initial postBodyData given Post Body's schema
const fillPostBodySampleData = (body) => {
    if (body === undefined) {
        return body;
    }
    if (body.fieldType !== 'array' && body.fieldType !== 'object' && body.fieldType) {
        return body.example || undefined;
    }

    if (body.fieldType === 'array') {
        return [fillPostBodySampleData(body.items)];
    }
    const objBody = Object.keys(body).filter((n) => n !== 'uiState' && n !== 'required').reduce((accum, propName) => {
        return {...accum, [propName]: fillPostBodySampleData(body[propName])};
    }, {});

    return objBody;
};
// Generates initial postBodyData given Post Body's schema
const buildInitialPostBodyData = (body) => {
    if (body === undefined) {
        return body;
    }
    if (body.fieldType !== 'array' && body.fieldType !== 'object' && body.fieldType) {
        return '';
    }

    if (body.fieldType === 'array') {
        return [buildInitialPostBodyData(body.items)];
        // const arrayBody = Object.keys(body.items).filter((n) => n !== 'uiState' && n !== 'required').reduce((accum, prop) => {
        //     return accum.concat(buildInitialPostBodyData(body.items[prop]));
        // }, []);

        // return arrayBody;
    }
    const objBody = Object.keys(body).filter((n) => n !== 'uiState' && n !== 'required').reduce((accum, propName) => {
        return {...accum, [propName]: buildInitialPostBodyData(body[propName])};
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
        endpointState.postBodyData = remove ? buildInitialPostBodyData(endpointState.postBody) : fillPostBodySampleData(endpointState.postBody);
    }

    return endpointState;
};
/* ******* END FILL SAMPLE DATA AND RESET API CONSOLE DATA HELPERS ******* */

// Method traverses a `postBody` endpoint property by colon-separated name and returns the
// innermost property described by the propertyPath
const traversePropertyPath = (propertyPath, state) => {
    if (propertyPath === '') {
        return state;
    }
    const pathArray = propertyPath.split(':');

    return pathArray.reduce((accum, paramName) => {
        if (paramName.indexOf('[') !== -1) {
            const index = parseInt(paramName.slice(paramName.indexOf('[') + 1, paramName.indexOf(']')), 10);

            return accum.items[index];
        }
        return accum[paramName];
    }, state);
};

export {hasExampleData, replacePathParams, buildQsPath, buildCurl, fillOrRemoveSampleData, buildInitialPostBodyData, fillPostBodySampleData, fillOrRemoveRequestParamSampleData, traversePropertyPath};

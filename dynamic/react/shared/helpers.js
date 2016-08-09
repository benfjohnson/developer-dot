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

export {hasExampleData, replacePathParams};

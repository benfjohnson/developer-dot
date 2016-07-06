const buildQsPath = (queryString) => {
    let qsPath = '';

    if (queryString && Object.keys(queryString).some((p) => queryString[p] && queryString[p].value)) {
        let addedQsParamCount = 0;

        qsPath = Object.keys(queryString).reduce((qs, param) => {
            if (queryString[param].value) {
                const newQs = `${qs}${addedQsParamCount > 0 ? '&' : ''}${param}=${queryString[param].value}`;

                addedQsParamCount++;
                return newQs;
            }
            return qs;
        }, '?');
    }
    return qsPath;
};

const buildPostBodyData = (body) => {
    if (body.hasOwnProperty('value') && body.fieldType !== 'array') {
        return body.value;
    }

    if (body.fieldType === 'array') {
        const arrayBody = body.value.reduce((accum, prop) => {
            if (prop.hasOwnProperty('value') && prop.value === '') {
                return accum;
            }
            return accum.concat(buildPostBodyData(prop));
        }, []);

        return arrayBody.length ? arrayBody : undefined;
    }

    const objBody = Object.keys(body).filter((n) => n !== 'uiState').reduce((accum, propName) => {
        if (body[propName].hasOwnProperty('value') && body[propName].value === '') {
            return accum;
        }

        return {...accum, [propName]: buildPostBodyData(body[propName])};
    }, {});

    return Object.keys(objBody).length ? objBody : undefined;
};

const buildCurl = (endpoint) => {
    let curl = `curl -X ${endpoint.action.toUpperCase()} "${endpoint.path}${endpoint.qsPath || ''}" -H "Accept: application/json"`;

    if (endpoint.postBodyData) {
        curl += ` -H "Content-Type: application/json" --data '${JSON.stringify(endpoint.postBodyData)}'`;
    }
    return curl;
};

const fillQueryStringSampleData = (queryString) => {
    return Object.keys(queryString).reduce((newQueryString, qParam) => {
        if (queryString[qParam].example) {
            newQueryString[qParam] = {...queryString[qParam], value: queryString[qParam].example};
        }

        return newQueryString;
    }, {});
};

const fillPostBodySampleData = (postBody) => {
    if (postBody.hasOwnProperty('value') && postBody.fieldType !== 'array') {
        return {...postBody, value: postBody.example || ''};
    }

    if (postBody.fieldType === 'array') {
        const arrayBody = postBody.value.reduce((accum, prop) => {
            if (prop.hasOwnProperty('value')) {
                return accum.concat({...prop, value: (prop.example || '')});
            }
            return accum.concat(fillPostBodySampleData(prop));
        }, []);

        return {...postBody, value: arrayBody};
    }

    if (postBody.hasOwnProperty('visible')) {
        return {...postBody, visible: true};
    }

    const objBody = Object.keys(postBody).reduce((accum, propName) => {
        return {...accum, [propName]: fillPostBodySampleData(postBody[propName])};
    }, {});

    return objBody;
};

const fillSampleData = (endpointState) => {
    if (endpointState.queryString) {
        endpointState.queryString = fillQueryStringSampleData(endpointState.queryString);
    }

    if (endpointState.postBody) {
        endpointState.postBody = fillPostBodySampleData(endpointState.postBody);
    }

    return endpointState;
};

export {buildQsPath, buildPostBodyData, buildCurl, fillSampleData};

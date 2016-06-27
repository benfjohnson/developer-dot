const buildQsPath = (queryString) => {
    let qsPath = '';

    if (queryString && Object.keys(queryString).some((p) => queryString[p].value)) {
        qsPath = Object.keys(queryString).reduce((qs, param, i) => {
            if (queryString[param].value.length) {
                return `${qs}${i > 0 ? '&' : ''}${param}=${queryString[param].value}`;
            }
            return qs;
        }, '?');
    }
    return qsPath;
};

const buildPostBodyData = (name, body) => {
    if (body.hasOwnProperty('value')) {
        return body.value;
    }

    return Object.keys(body).reduce((accum, propName) => {
        if (body[propName].hasOwnProperty('value') && body[propName].value === '') {
            return accum;
        }

        // return buildPostBodyData(propName, body[propName]);
        return {...accum, [propName]: buildPostBodyData(propName, body[propName])};
    }, {});
};

const buildCurl = (endpoint) => {
    let curl = `curl -X ${endpoint.action.toUpperCase()} "${endpoint.path}${endpoint.qsPath || ''}" -H "Accept: application/json"`;

    if (endpoint.postBodyData) {
        curl += ` -H "Content-Type: application/json" --data '${JSON.stringify(endpoint.postBodyData)}'`;
    }

    return curl;
};

export {buildQsPath, buildPostBodyData, buildCurl};

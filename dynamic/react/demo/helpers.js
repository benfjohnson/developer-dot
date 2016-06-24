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

const buildPostBodyData = (postBody) => {
//     console.log('received postBody', postBody);
    const postbodyData = {};

    return postbodyData;
};

const buildCurl = (endpoint) => {
    let curl = `curl -X ${endpoint.action.toUpperCase()} "${endpoint.path}${endpoint.qsPath || ''}" -H "Accept: application/json"`;

    if (endpoint.postBodyData) {
        curl += ` -H "Content-Type: application/json" --data '${JSON.stringify(endpoint.postBodyData)}'`;
    }

    return curl;
};

export {buildQsPath, buildPostBodyData, buildCurl};

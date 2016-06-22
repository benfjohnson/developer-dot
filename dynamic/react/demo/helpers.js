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

const buildCurl = (endpoint) => `curl -X ${endpoint.action.toUpperCase()} "${endpoint.path}${endpoint.qsPath || ''}" -H "Accept: application/json"`;

export {buildQsPath, buildCurl};

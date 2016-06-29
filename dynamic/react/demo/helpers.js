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

const buildPostBodyData = (body) => {
    if (body.hasOwnProperty('value') && body.fieldType !== 'array') {
        return body.value;
    }

    if (body.fieldType === 'array') {
        return body.value.reduce((accum, prop) => {
            if (prop.hasOwnProperty('value') && prop.value === '') {
                return accum;
            }
            return accum.concat(buildPostBodyData(prop));
        }, []);
    }

    return Object.keys(body).filter((n) => n !== 'uiState').reduce((accum, propName) => {
        if (body[propName].hasOwnProperty('value') && body[propName].value === '') {
            return accum;
        }

        return {...accum, [propName]: buildPostBodyData(body[propName])};
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

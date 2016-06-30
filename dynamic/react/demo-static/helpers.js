const buildQsPath = (queryString) => {
    let qsPath = '';
    console.log('QUERY STRING', queryString);
    if (queryString && Object.keys(queryString).some((p) => queryString[p].value)) {
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

export {buildQsPath, buildPostBodyData, buildCurl};

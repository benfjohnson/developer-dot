import {replacePathParams} from '../shared/helpers';

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

const getDefaultValue = (fieldType) => {
    switch (fieldType) {
    case 'string':
        return '';
    case 'number':
    case 'float':
        return 0;
    case 'boolean':
        return true;
    default:
        return '';
    }
};

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

const removePostBodyValues = (postBody) => {
    if (postBody === undefined) {
        return postBody;
    }
    if (postBody.hasOwnProperty('value') && postBody.fieldType !== 'array') {
        return {...postBody, value: getDefaultValue(postBody.fieldType)};
    }

    if (postBody.fieldType === 'array') {
        const arrayBody = postBody.value.reduce((accum, prop) => {
            if (prop && prop.hasOwnProperty('value')) {
                return accum.concat({...prop, value: getDefaultValue(prop.fieldType)});
            }
            return accum.concat(removePostBodyValues(prop));
        }, []);

        return {...postBody, value: arrayBody};
    }

    if (postBody.hasOwnProperty('visible')) {
        return {...postBody, visible: true};
    }

    return Object.keys(postBody).reduce((accum, propName) => {
        return {...accum, [propName]: removePostBodyValues(postBody[propName])};
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

const buildAuth = (authFormula) => {
    // Grab all auth variables out of authFormula str (should be in <> brackets)
    let auth;

    if (!authFormula) {
        auth = null;
    } else {
        const authParams = authFormula.match(/<\w+>/g).map((key) => key.substring(1, key.length - 1)).reduce((accum, key) => (
                {...accum, [key]: ''}
        ), {});

        auth = {
            formula: authFormula,
            params: authParams
        };
    }

    return auth;
};

const buildPostmanCollection = (appState) => {
    const postmanCollection = {
        /* eslint-disable camelcase */
        info: {
            name: appState.apiName,
            _postman_id: '1234',
            description: appState.apiDescription,
            schema: 'https://schema.getpostman.com/json/collection/v2.0.0/collection.json'
        }
        /* eslint-enable camelcase */
    };

    // NOTE: For GETS w/ query or path params, no raw data -- need to replace in the URL

    postmanCollection.item = appState.apiEndpoints.map((endpoint) => {
        const baseRequest = {
            name: endpoint.name,
            request: {
                url: endpoint.path,
                method: endpoint.action,
                header: [],
                description: endpoint.description
            },
            response: []
        };

        if (endpoint.postBody) {
            baseRequest.request.header.push({
                key: 'Content-Type',
                value: 'application/json'
            });
            baseRequest.request.body = {
                mode: 'raw',
                raw: JSON.stringify(fillPostBodySampleData(endpoint.postBody))
            };
        } else {
            baseRequest.request.body = {
                mode: 'formdata',
                formdata: []
            };
        }

        if (endpoint.pathParams) {
            baseRequest.request.url = replacePathParams(endpoint.path, fillOrRemoveRequestParamSampleData(endpoint.pathParams));
        }

        if (endpoint.queryString) {
            baseRequest.request.url += buildQsPath(fillOrRemoveRequestParamSampleData(endpoint.queryString));
        }

        return baseRequest;
    });

    return postmanCollection;
};

export {buildQsPath, buildInitialPostBodyData, buildCurl, fillOrRemoveSampleData, buildPostmanCollection, buildAuth};

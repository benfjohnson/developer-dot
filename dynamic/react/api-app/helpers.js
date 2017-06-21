import {
    replaceStringPlaceholders,
    reduceParamsToKeyValuePair,
    buildQueryString,
    fillPostBodySampleData,
    fillOrRemoveRequestParamSampleData
} from '../shared/helpers';

const buildAuth = (authFormula) => {
    // Grab all auth variables out of authFormula str (should be in <> brackets)
    let auth;

    if (!authFormula) {
        auth = null;
    } else {
        const authParams = authFormula.match(/<\w+>/g).map((key) => key.substring(1, key.length - 1)).reduce((accum, key) => ({...accum,
            [key]: ''
        }), {});

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

        const newRaw = JSON.stringify(endpoint.requestSchemaExample || fillPostBodySampleData(endpoint.requestSchema, endpoint.showExcludedPostBodyFields));

        if (endpoint.requestSchema) {
            baseRequest.request.header.push({
                key: 'Content-Type',
                value: 'application/json'
            });
            baseRequest.request.body = {
                mode: 'raw',
                raw: newRaw
            };
        } else {
            baseRequest.request.body = {
                mode: 'formdata',
                formdata: []
            };
        }

        if (endpoint.pathParams) {
            baseRequest.request.url = replaceStringPlaceholders(endpoint.path, reduceParamsToKeyValuePair(fillOrRemoveRequestParamSampleData(endpoint.pathParams)));
        }

        if (endpoint.queryString) {
            baseRequest.request.url += buildQueryString(reduceParamsToKeyValuePair(fillOrRemoveRequestParamSampleData(endpoint.queryString)));
        }

        return baseRequest;
    });

    return postmanCollection;
};

export {
    buildPostmanCollection,
    buildAuth
};

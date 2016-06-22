import React from 'react';
import {render} from 'react-dom';
import request from 'request';
import App from './App';
import {store} from './store';

import {actionTypes} from './reducers/reducer';

store.subscribe(() => {
    const state = store.getState();
    const api = state.apiInfo;
    const error = state.error;

    console.log('NEW STATE', state);
    render(<App api={api} error={error}/>, document.getElementById('api-demo'));
});

const API = window.location.search.split('api=')[1].toLowerCase() || 'invalid';
const API_SWAGGER_URLS = {
    landedcost: {
        base: 'http://localhost:8082',
        api: '/v3/api-definition'
    }
};
const API_SWAGGER_URL = API_SWAGGER_URLS[API].base + API_SWAGGER_URLS[API].api;

const sanitizeSwagger = (api) => {
    const routes = Object.keys(api.paths).map((path) => {
        return Object.keys(api.paths[path]).map((action) => {
            let routePath = API_SWAGGER_URLS[API].base + path;

            if (api.schemes[0] && api.host && api.basePath) {
                routePath = api.schemes[0] + '://' + api.host + (api.basePath !== '/' ? api.basePath : '') + path;
            }

            const params = api.paths[path][action].parameters || [];
            const queryString = params.filter((p) => p.in === 'query').reduce((queryObj, param) => {
                queryObj[param.name] = {
                    name: param.name,
                    description: param.description,
                    required: param.required,
                    value: '',
                    placeholder: param.example || ''
                };
                return queryObj;
            }, {});

            // const postBodyParams = api.paths[path][action].parameters.filter((p) => p.in === 'body');
            const endpointInfo = {
                path: routePath,
                action: action,
                name: api.paths[path][action].summary,
                description: api.paths[path][action].description
            };

            if (Object.keys(queryString).length) {
                endpointInfo.queryString = queryString;
            }
            return endpointInfo;
        });
    });

    return [].concat(...routes);
};

request(API_SWAGGER_URL, (error, response, body) => {
    if (error || response.statusCode !== 200) {
        store.dispatch({
            type: actionTypes.FETCH_API_DATA_DONE,
            apiInfo: [],
            error: error ? error.message : response.statusMessage || ''
        });
        return;
    }
    // todo try/catch around JSON.parse
    const apiInfo = sanitizeSwagger(JSON.parse(body));

    store.dispatch({
        type: actionTypes.FETCH_API_DATA_DONE,
        apiInfo: apiInfo
    });
});

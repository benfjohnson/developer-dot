import React from 'react';
import {render} from 'react-dom';
import SwaggerParser from 'swagger-parser';

import App from './app';
import {store} from './store';
import {actionTypes} from './reducers/reducer';
import parseSwaggerUi from './parseSwaggerUI';

import path from 'path';
let API_SWAGGER_URL = path.join(__dirname, '..', '..', 'dynamic', 'swagger', 'uber.yaml');

if (window.location.search.split('api=').length >= 2) {
    const API = window.location.search.split('api=')[1].toLowerCase() || 'invalid';
    const API_SWAGGER_URLS = {
        landedcost: {
            base: 'http://localhost:8082',
            api: '/v3/api-definition'
        }
    };

    API_SWAGGER_URL = API_SWAGGER_URLS[API].base + API_SWAGGER_URLS[API].api;
}

store.subscribe(() => {
    const state = store.getState();
    const error = state.error;

    /* eslint-disable no-console */
    console.log('NEW STATE', state);
    /* eslint-enable no-console */
    render(<App api={state} error={error}/>, document.getElementById('api-console'));
});

new SwaggerParser().dereference(API_SWAGGER_URL).then(function(swaggerDoc) {
    // stringify the results of parseSwagger so we remove any undefined keys/values
    const apiInfo = JSON.parse(JSON.stringify(parseSwaggerUi(swaggerDoc, API_SWAGGER_URL)));

    store.dispatch({
        type: actionTypes.FETCH_API_DATA_DONE,
        apiInfo: apiInfo
    });
});

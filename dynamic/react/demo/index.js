/* global SwaggerUi */
import React from 'react';
import {render} from 'react-dom';
import SwaggerParser from 'swagger-parser';

import App from './app';
import {store} from './store';
import {actionTypes} from './reducers/reducer';
import parseSwaggerUi from './parseSwaggerUI';

const API = window.location.search.split('api=')[1].toLowerCase() || 'invalid';
const API_SWAGGER_URLS = {
    landedcost: {
        base: 'http://localhost:8082',
        api: '/v3/api-definition'
    }
};
const API_SWAGGER_URL = API_SWAGGER_URLS[API].base + API_SWAGGER_URLS[API].api;

store.subscribe(() => {
    const state = store.getState();
    const api = state.apiInfo;
    const error = state.error;

    /* eslint no-console:1  */
    console.log('NEW STATE', state);
    render(<App api={api} error={error}/>, document.getElementById('api-console'));
});

new SwaggerParser().dereference(API_SWAGGER_URL).then(function(swggerDoc) {
    store.dispatch({
        type: actionTypes.FETCH_API_DATA_DONE,
        apiInfo: parseSwaggerUi(swggerDoc, API_SWAGGER_URL)
    });
});

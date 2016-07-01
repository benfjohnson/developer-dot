/* global SwaggerUi */
import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {store} from './store';

// import * as SwaggerUi from '../../dist/swagger-ui';
import parseSwaggerUi from './parseSwaggerUI';

import {actionTypes} from './reducers/reducer';

store.subscribe(() => {
    const state = store.getState();
    const api = state.apiInfo;
    const error = state.error;

    /* eslint no-console:1  */
    console.log('NEW STATE', state);
    render(<App api={api} error={error}/>, document.getElementById('api-console'));
});

const API = window.location.search.split('api=')[1].toLowerCase() || 'invalid';
const API_SWAGGER_URLS = {
    landedcost: {
        base: 'http://localhost:8082',
        api: '/v3/api-definition'
    }
};

// const API_SWAGGER_URL = './uber.yaml';
const API_SWAGGER_URL = API_SWAGGER_URLS[API].base + API_SWAGGER_URLS[API].api;
// const API_SWAGGER_URL = './cqa-swagger.json';

window.swaggerUi = new SwaggerUi({
    /* eslint camelcase:1  */
    url: API_SWAGGER_URL,
    dom_id: 'swagger-ui-container',
    supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
    onComplete: function(swaggerApi, swaggerUi) {
        /* eslint no-unused-vars:1  */
        const apiInfo = parseSwaggerUi(swaggerApi, API_SWAGGER_URL);

        store.dispatch({
            type: actionTypes.FETCH_API_DATA_DONE,
            apiInfo: apiInfo
        });

        $('#swagger-ui-container').remove();
    },
    onFailure: function(data) {
        /* eslint no-unused-vars:1  */
        /* eslint no-console:1  */

        console.log('Unable to Load SwaggerUI');
    },
    docExpansion: 'none',
    jsonEditor: false,
    defaultModelRendering: 'schema',
    showRequestHeaders: false
});

window.swaggerUi.load();

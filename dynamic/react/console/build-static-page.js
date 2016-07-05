/* global SwaggerUi */
import path from 'path';
import React from 'react';
import SwaggerParser from 'swagger-parser';
import App from './app';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './reducers/reducer';
import parseSwaggerUi from './parseSwaggerUI';
import fs from 'fs';

const store = createStore(reducer);

if (!process.env.API_SWAGGER_URL && !process.env.API_SWAGGER_FILE) {
    throw new Error('process.env.API_SWAGGER_URL or process.env.API_SWAGGER_FILE is required');
}
const swaggerPath = process.env.API_SWAGGER_FILE ? path.join(__dirname, '..', '..', 'swagger/') + process.env.API_SWAGGER_FILE : process.env.API_SWAGGER_URL;

new SwaggerParser().dereference(swaggerPath).then(function(swaggerDoc) {
    const staticState = {};

    try {
        staticState.apiInfo = parseSwaggerUi(swaggerDoc, swaggerPath);
    } catch (e) {
        /* eslint-disable no-console */
        console.log('Error parsing swaggerDoc', e);
        /* eslint-enable no-console */
        throw new Error('Error parsing swaggerDoc', e);
    }

    const buildHtml = (reactHtml, initialState) => (
`---
layout: default
title: "API Console"
api_console: 1
---
<div id="api-console">${reactHtml}</div>
<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
<script src="public/javascript/build/console-static.js"></script>`
    );

    const staticHtml = renderToString(<Provider store={store}><App api={staticState.apiInfo} error={null}/></Provider>);
    const HTML = buildHtml(staticHtml, staticState);

    /* eslint-disable no-console */
    console.log(HTML);
    /* eslint-enable no-console */
});

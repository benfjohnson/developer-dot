/* global SwaggerUi */
import path from 'path';
import React from 'react';
import SwaggerParser from 'swagger-parser';
import App from './app';
import {renderToString} from 'react-dom/server';
import parseSwaggerUi from './parseSwaggerUI';
import mkdirp from 'mkdirp';
import fs from 'fs';

// const store = createStore(reducer);

if ((!process.env.API_SWAGGER_URL && !process.env.API_SWAGGER_FILE) || !process.env.API_NAME) {
    throw new Error('process.env.API_SWAGGER_URL or process.env.API_SWAGGER_FILE is required, as well as a process.env.API_NAME');
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
<script src="../../dynamic/public/javascript/build/console-static.js"></script>`
    );

    const staticHtml = renderToString(<App api={staticState.apiInfo} error={null}/>);

    const HTML = buildHtml(staticHtml, staticState);

    const savePath = path.join(__dirname, '..', '..', '..', process.env.API_NAME, 'console');

    mkdirp(savePath, (err) => {
        if (err) {
            throw err;
        }

        fs.writeFile(`${savePath}/index.html`, HTML, (writeErr) => {
            if (writeErr) {
                throw writeErr;
            }
            /* eslint-disable no-console */
            console.log(`/${process.env.API_NAME}/console/index.html saved successfully!`);
            /* eslint-enable no-console */
        });
    });
});

import path from 'path';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './react/api-app/reducers/reducer';
import SwaggerParser from 'swagger-parser';
import App from './react/api-app/app';
import {renderToString} from 'react-dom/server';
import parseSwaggerUi from './parseSwaggerUI';
import mkdirp from 'mkdirp';
import fs from 'fs';

export default (fileName, apiName, apiPath, product) => {
    if (!fileName || !apiName || !apiPath) {
        throw new Error('`filepath`, `apiName` and `apiPath` required!');
    }

    const swaggerPath = path.join(__dirname, 'swagger', fileName);

    new SwaggerParser().dereference(swaggerPath).then((swaggerDoc) => {
        let staticState;

        try {
            staticState = parseSwaggerUi(swaggerDoc, swaggerPath);
        } catch (e) {
            /* eslint-disable no-console */
            console.log('Error parsing swaggerDoc', e);
            /* eslint-enable no-console */
            throw new Error('Error parsing swaggerDoc');
        }

        const buildHtml = (reactHtml, initialState) => {
            const endpointLinks = initialState.apiEndpoints.reduce((accum, endpt) => `${accum}["#${endpt.operationId.replace(/\s/g, '')}", "${endpt.name}"],\n`, '');

            return (
                `---
layout: default
title: "API Console"
api_console: 1
api_name: ${apiName}
nav: apis
product: ${product}
doctype: api_references
endpoint_links: [
    ${endpointLinks}
]
---
<div id="api-console">${reactHtml}</div>
<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
<script src="/dynamic/public/javascript/build/api-bundle.js"></script>`
            );
        };

        const store = createStore(reducer, staticState);

        const staticHtml = renderToString(
            <Provider store={store}>
                <App />
            </Provider>
        );
        const HTML = buildHtml(staticHtml, staticState);
        const savePath = path.join(__dirname, '..', apiPath);

        mkdirp(savePath, (err) => {
            if (err) {
                throw err;
            }

            fs.writeFile(`${savePath}/index.html`, HTML, (writeErr) => {
                if (writeErr) {
                    throw writeErr;
                }
                /* eslint-disable no-console */
                console.log(`/${apiPath}/index.html saved successfully!`);
                /* eslint-enable no-console */
            });
        });
    }).catch((err) => {
        /* eslint-disable no-console */
        console.log('Error thrown in SwaggerParser', err);
        /* eslint-enable no-console */
        throw new Error(err);
    });
};



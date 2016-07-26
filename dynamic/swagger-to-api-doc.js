import path from 'path';
import React from 'react';
import SwaggerParser from 'swagger-parser';
import App from './react/console/app';
import {renderToString} from 'react-dom/server';
import parseSwaggerUi from './react/console/parseSwaggerUI';
import mkdirp from 'mkdirp';
import fs from 'fs';

export default (fileName, apiName) => {
    if (!fileName || !apiName) {
        throw new Error('`filepath` and `apiName` required!');
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
            const endpointLinks = initialState.apiInfo.map((endpt) => endpt.name).reduce((accum, endpt) => `${accum}["#${endpt.replace(/\s/g, '_')}", "${endpt}"],\n`, '');

            return (
                `---
layout: default
title: "API Console"
api_console: 1
api_name: ${apiName}
endpoint_links: [
    ${endpointLinks}
]
---
<div id="api-console">${reactHtml}</div>
<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
<script src="../../dynamic/public/javascript/build/console-static.js"></script>`
            );
        };
        const staticHtml = renderToString(<App api={staticState} error={null} />);
        const HTML = buildHtml(staticHtml, staticState);
        const savePath = path.join(__dirname, '..', apiName, 'console');

        mkdirp(savePath, (err) => {
            if (err) {
                throw err;
            }

            fs.writeFile(`${savePath}/index.html`, HTML, (writeErr) => {
                if (writeErr) {
                    throw writeErr;
                }
                /* eslint-disable no-console */
                console.log(`/${apiName}/console/index.html saved successfully!`);
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



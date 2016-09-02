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


const saveStaticPage = (tagName, apiPath, buildHtmlFunc, state) => {
    const store = createStore(reducer, state);

    const staticHtml = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const html = buildHtmlFunc(tagName, staticHtml, state);
    const savePath = path.join(__dirname, '..', apiPath);

    mkdirp(savePath, (err) => {
        if (err) {
            throw err;
        }

        fs.writeFile(`${savePath}/index.html`, html, (writeErr) => {
            if (writeErr) {
                throw writeErr;
            }
            /* eslint-disable no-console */
            console.log(`/${apiPath}/index.html saved successfully!`);
            /* eslint-enable no-console */
        });
    });
};

export default (fileName, apiName, apiPath, product) => {
    if (!fileName || !apiName || !apiPath) {
        throw new Error('`filepath`, `apiName` and `apiPath` required!');
    }

    const swaggerPath = path.join(__dirname, 'swagger', fileName);

    fs.access(swaggerPath, (swaggerPathErr) => {
        if (swaggerPathErr) {
            /* eslint-disable no-console */
            console.log('\x1b[31m', swaggerPathErr, '\x1b[0m');
            /* eslint-enable no-console */
        } else {
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

                const buildHtml = (tagName, reactHtml, initialState) => {
                    const endpointLinks = initialState.apiEndpoints.reduce((accum, endpt) => `${accum}["#${endpt.operationId.replace(/\s/g, '')}", "${endpt.name}"],\n`, '');

                    return (
                        `---
layout: default
title: "API Console"
api_console: 1
api_name: ${apiName}
${tagName ? `tag_name: ${tagName}` : ''}
nav: apis
product: ${product}
doctype: api_references
endpoint_links: [
    ${endpointLinks}
]
---
<div id="api-console">${reactHtml}</div>
<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
<script src="/public/js/api-bundle.js"></script>`
                    );
                };

                const tagMap = {...staticState.tagMap};

                if (tagMap && Object.keys(tagMap).length > 0) {
                    // Save off a configuration file detaling tag link name and its endpoints
                    mkdirp(path.join(__dirname, '..', '_data', 'api_tag_pages'), (err) => {
                        if (err) {
                            throw err;
                        }

                        let tagPageConfig = `api_name: ${apiName}\napi_tags:\n`;

                        Object.keys(tagMap).forEach((tag, i) => {
                            tagPageConfig += `  - name: '${tag}'\n`;
                        });

                        fs.writeFile(`${path.join(__dirname, '..', '_data', 'api_tag_pages')}/${apiName}.yml`, tagPageConfig, (writeErr) => {
                            if (writeErr) {
                                throw writeErr;
                            }
                            /* eslint-disable no-console */
                            console.log(`/${apiPath}/index.html saved successfully!`);
                            /* eslint-enable no-console */
                        });
                    });
                    // In this case, actually want to save off pages for each tag's endpoints
                    Object.keys(tagMap).forEach((tag) => {
                        const operationIdsForTag = tagMap[tag];
                        const newApiPath = path.join(path.join(apiPath, tag));

                        saveStaticPage(tag, newApiPath, buildHtml, {...staticState, apiEndpoints: staticState.apiEndpoints.filter((ep) => operationIdsForTag.indexOf(ep.operationId) !== -1)});
                    });
                } else {
                    // Normal case, just save a single API pages
                    saveStaticPage(null, apiPath, buildHtml, staticState);
                }
            }).catch((err) => {
                /* eslint-disable no-console */
                console.log('Error thrown in SwaggerParser', err);
                /* eslint-enable no-console */
                throw new Error(err);
            });
        }
    });
};



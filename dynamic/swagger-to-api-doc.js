import path from 'path';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './react/api-app/reducers/reducer';
import SwaggerParser from 'swagger-parser';
import App from './react/api-app/app';
import {renderToString} from 'react-dom/server';
import parseSwaggerUi from './parseSwaggerUI';
import mkdirp from 'mkdirp';
import fs from 'fs';
import {buildEnumFromMethod} from './build-enums';

// extraExtension just to write index.html for static pages
const saveToFs = (folder, file, html) => {
    mkdirp(folder, (err) => {
        if (err) {
            throw err;
        }
        fs.writeFile(file, html, (writeErr) => {
            if (writeErr) {
                throw writeErr;
            }
            /* eslint-disable no-console */
            console.log(`${file.replace(path.join(__dirname, '..'), '')} saved successfully!`);
            /* eslint-enable no-console */
        });
    });
};

const saveStaticPage = (tagName, apiPath, buildHtmlFunc, state, apiInfo, disqus = true) => {
    const store = createStore(reducer, state);

    const staticHtml = renderToString(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const html = buildHtmlFunc(tagName, staticHtml, state, disqus);
    const savePath = path.join(__dirname, '..', apiPath);
    const saveFolder = savePath.substring(0, savePath.lastIndexOf('/'));

    buildEnumFromMethod({...apiInfo, dir: saveFolder}, state);

    saveToFs(saveFolder, `${savePath}.html`, html);
};

const saveMethodsIndex = (apiName, saveRoot, product, linksArray, methodSubsetName) => {
    function compare(a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        }
        return 0;
    }

    linksArray.sort(compare);

    const linksHtml = linksArray.reduce((accum, l) => {
        return `${accum}
<tr>
    <td><a href="/${encodeURIComponent(l.link)}">${l.name}</a></td>
    <td>{{"${l.summary || ''}"}}</td>
    <td>{{"${(l.description || '').replace(/"/g, "'")}" | markdownify}}</td>
</tr>`;
    }, '');

    const endpointLinks = {home: path.dirname(saveRoot)};

    linksArray.map((l) => {
        endpointLinks[l.name] = `/${l.link}`;
    });

    const table = `---
layout: default
title: "API Console"
api_console: 1
api_name: ${apiName}
nav: apis
product: ${product}
doctype: api_references
endpoint_links: []
${(!methodSubsetName) ? 'homepage: true' : ''}
---
<h1>{{page.api_name}} - ${methodSubsetName || 'Methods'}</h1>
<table class="styled-table">
    <thead>
        <tr>
            <th>Method</th>
            <th>Purpose</th>
            <th>Summary</th>
        </tr>
    </thead>
    <tbody>
        ${linksHtml}
    </tbody>
</table>
<br>
`;

    saveToFs(saveRoot, `${saveRoot}/index.html`, table);
    const dataRoot = path.join(__dirname, '..', '_data/api_tag_pages', product, apiName);

    saveToFs(dataRoot, `${dataRoot}/${methodSubsetName || 'index'}.json`, JSON.stringify(endpointLinks, null, 4));
};

const createEndpointUrl = (apiPath, operationId, tag) => `${apiPath}/methods/${tag ? tag + '/' : ''}${operationId.replace(/\s/g, '')}`;

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
            const options = {$refs: {internal: false}};

            Promise.all([
                new SwaggerParser().dereference(swaggerPath),
                new SwaggerParser().dereference(swaggerPath, options)
            ]).then((swaggerDocs) => {
                let staticState;

                try {
                    staticState = parseSwaggerUi(...swaggerDocs, swaggerPath);
                } catch (e) {
                    /* eslint-disable no-console */
                    console.log('Error parsing swaggerDoc', e);
                    /* eslint-enable no-console */
                    throw new Error('Error parsing swaggerDoc');
                }

                const buildHtml = (tagName, reactHtml, initialState, disqus) => {
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
modelsPath: api-reference/${fileName.substr(0, fileName.lastIndexOf('.'))}/models
endpoint_links: [
    ${endpointLinks}
]
---
<div id="api-console">${reactHtml}</div>
<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>
<script src="/public/js/api-bundle.js"></script>

${(disqus) ? '{% include disqus.html %}' : ''}`
                    );
                };

                // Save our root documentation page, with Postman Collection download link,
                // API name/description, and links to models and methods documentation!
                saveStaticPage(null, apiPath, buildHtml, {...staticState, apiEndpoints: []}, {apiName, product}, false);

                const tagMap = {...staticState.tagMap};

                if (tagMap && Object.keys(tagMap).length > 0) {
                    // Save off a configuration file detaling tag link name and its endpoints
                    mkdirp(path.join(__dirname, '..', '_data', 'api_tag_pages'), (err) => {
                        if (err) {
                            throw err;
                        }

                        let tagPageConfig = `api_name: ${apiName}\napi_tags:\n`;

                        Object.keys(tagMap).forEach((tag) => {
                            tagPageConfig += `  - name: '${tag}'\n`;
                        });

                        fs.writeFile(`${path.join(__dirname, '..', '_data', 'api_tag_pages')}/${apiName}.yml`, tagPageConfig, (writeErr) => {
                            if (writeErr) {
                                throw writeErr;
                            }
                            /* eslint-disable no-console */
                            console.log(`/${apiPath}.html saved successfully!`);
                            /* eslint-enable no-console */
                        });
                    });

                    const tagLinks = Object.keys(tagMap).map((tag) => {
                        return {
                            link: `${apiPath}/methods/${tag}`,
                            name: tag
                            // description: tag.description
                        };
                    });

                    saveMethodsIndex(apiName, `${apiPath}/methods`, product, tagLinks);

                    // Want to save off pages for each tagin the API's endpoints
                    Object.keys(tagMap).forEach((tag) => {
                        const operationIdsForTag = tagMap[tag];

                        const apiEndpointLinks = staticState.apiEndpoints.filter((ep) => operationIdsForTag.indexOf(ep.operationId) !== -1).map((ep) => {
                            return {
                                link: createEndpointUrl(apiPath, ep.operationId, tag),
                                name: ep.operationId,
                                description: ep.description,
                                summary: ep.name
                            };
                        });

                        saveMethodsIndex(apiName, `${apiPath}/methods/${tag}`, product, apiEndpointLinks, tag);

                        staticState.apiEndpoints.filter((ep) => operationIdsForTag.indexOf(ep.operationId) !== -1).forEach((ep) => {
                            const singleEndpointStaticState = {...staticState, apiEndpoints: [ep]};
                            const singleEndpointPath = createEndpointUrl(apiPath, ep.operationId, tag);

                            saveStaticPage(tag, singleEndpointPath, buildHtml, singleEndpointStaticState, {apiName, product});
                        });
                    });
                } else {
                    const apiEndpointLinks = staticState.apiEndpoints.map((ep) => {
                        return {
                            link: createEndpointUrl(apiPath, ep.operationId),
                            name: ep.operationId,
                            summary: ep.name,
                            description: ep.description
                        };
                    });

                    saveMethodsIndex(apiName, `${apiPath}/methods`, product, apiEndpointLinks);

                    staticState.apiEndpoints.forEach((ep) => {
                        const singleEndpointStaticState = {...staticState, apiEndpoints: [ep]};
                        const singleEndpointPath = createEndpointUrl(apiPath, ep.operationId);

                        // Normal case, just save a single API pages
                        saveStaticPage(null, singleEndpointPath, buildHtml, singleEndpointStaticState, {apiName, product});
                    });
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

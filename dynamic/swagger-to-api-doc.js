import path from 'path';
import SwaggerParser from 'swagger-parser';
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

const buildBlogMap = (endpoint) => {
    const blogPath = path.join(__dirname, '..', '_posts');
    const files = fs.readdirSync(blogPath);
    let blogMap = [];

    if (endpoint) {
        const opId = endpoint.operationId;

        for (let j = 0; j < files.length; j++) {
            const data = fs.readFileSync(path.join(blogPath, files[j]));
            const frontMatter = String(data).split('---');
            const dataByLine = frontMatter[1].split('\n');
            const blogObj = {};
            let blogUrl = files[j].slice(0, files[j].length - 3);
            const blogUrlSplit = blogUrl.split('-');

            blogUrl = '/blog/' + blogUrlSplit[0] + '/' + blogUrlSplit[1] + '/' + blogUrlSplit[2];
            blogUrl += '/' + blogUrlSplit[3];
            for (let k = 4; k < blogUrlSplit.length; k++) {
                blogUrl += '-' + blogUrlSplit[k];
            }
            blogObj.url = blogUrl;
            for (let i = 0; i < dataByLine.length; i++) {
                if (dataByLine[i].includes('title')) {
                    const titleLine = dataByLine[i].substring(dataByLine[i].indexOf(':') + 1);

                    blogObj.title = titleLine;
                } else if (dataByLine[i].includes('relevantapiemthods') && dataByLine[i].includes(opId)) {
                    blogMap.push(blogObj);
                    break;
                }
            }
        }
        return blogMap;
    }
    return null;
};

const saveStaticPage = (tagName, apiPath, buildHtmlFunc, state, apiInfo, disqus = true) => {
    const html = buildHtmlFunc(tagName, state, disqus);
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
    if (!methodSubsetName) {
        linksArray.push({
            link: `${path.dirname(saveRoot)}/models`,
            name: 'Models'
        });
    }
    const linksHtml = linksArray.reduce((accum, l) => {
        if (l.name !== 'Models') {
            return `${accum}
<tr>
    <td><a href="/${encodeURIComponent(l.link)}">${l.name}</a></td>
    <td>{{"${l.summary || ''}"}}</td>
    <td class='markdown-description'>{{"${(l.description || '').replace(/"/g, "'")}" | markdownify}}</td>
</tr>`;
        }
        return `${accum}`;
    }, '');

    const endpointLinks = {home: path.dirname(saveRoot)};

    linksArray.map((l) => {
        endpointLinks[l.name] = `/${l.link}`;
    });
    const table = `---
layout: default
title: "${methodSubsetName ? `${methodSubsetName} - ` : ''}${apiName}"
api_console: 1
api_name: ${apiName}
${product === 'avaTax' && (apiName !== 'Avatax REST API v2' || apiName !== 'Avatax SOAP API') ? 'old_api: true' : ''}
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
            <th>${saveRoot === 'api-reference/avatax/rest/v2/methods' ? 'Categories' : 'Method'}</th>
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
                    buildBlogMap(staticState.apiEndpoints);
                } catch (e) {
                    /* eslint-disable no-console */
                    console.log('Error parsing swaggerDoc', e);
                    /* eslint-enable no-console */
                    throw new Error('Error parsing swaggerDoc');
                }

                const buildHtml = (tagName, initialState, disqus) => {
                    const endpoint = initialState.apiEndpoints.length ? initialState.apiEndpoints[0] : null;

                    const blog = buildBlogMap(endpoint);

                    const endpointLinks = endpoint ?
                        `["#${endpoint.operationId.replace(/\s/g, '')}", "${endpoint.name}"],\n` : '';

                    initialState.tagName = tagName;
/* eslint-disable quotes */
                    return (
                        `---
layout: default
${endpoint ?
`
title: "${endpoint.operationId} | ${apiName}"
${endpoint.name ? `ogdescription: "${(endpoint.name).replace(/"/g, "'")}"` : ''}
` :
`title: "${apiName}"`
}
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
<div id="api-console"></div>
<script>
    ${blog && blog.length > 0 ? `window.relevantBlogPosts = ${JSON.stringify(blog)};` : ``}
    window.modelsPath = 'api-reference/${fileName.substr(0, fileName.lastIndexOf('.'))}/models';
    window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
</script>
<script src='/public/js/api-bundle.js'></script>

${(disqus) ? '{% include disqus.html %}' : ''}`
                    );
                };
/* eslint-enable quotes */

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

                        const endpointsForTag = staticState.apiEndpoints.filter((ep) => operationIdsForTag.indexOf(ep.operationId) !== -1);

                        endpointsForTag.forEach((ep) => {
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

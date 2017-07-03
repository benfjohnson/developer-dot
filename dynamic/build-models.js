/* eslint no-console:0 */
import fs from 'fs';
import yaml from 'js-yaml';
import mkdirp from 'mkdirp';
import SWAGGER_CONFIG from './SWAGGER_CONFIG';
import {buildDefinitions} from './build-models-helpers';
import {buildEnumFromModel} from './build-enums';

const dataDir = `${__dirname}/../_data/swagger`;

const loadFile = function(file) {
    if (file.endsWith('yaml')) {
        const parsed = yaml.safeLoad(fs.readFileSync(file, 'utf-8'));

        return parsed;
    } else if (file.endsWith('json')) {
        return require(`${file}`);
    }
    console.log(`File extension not recognized: ${file}`); // eslint-disable-line no-console
    return {};
};

const writeDirectoryIndex = function(dir, defs, product, apiName) {
    let table = `---
layout: default
title: "${apiName}"
api_console: 1
api_name: ${apiName}
${product === 'avaTax' && (apiName !== 'Avatax REST API v2' || apiName !== 'Avatax SOAP API') ? 'old_api: true' : ''}
nav: apis
product: ${product}
doctype: api_references
endpoint_links: []
---

<h1>{{page.api_name}} - Models</h1>

<table class="styled-table">
    <thead>
        <tr>
            <th>Model</th>
            <th>Summary</th>
        </tr>
    </thead>
    <tbody>
`;

    Object.keys(defs).sort().forEach((def) => {
        // skip writing in api model index if its a sub-model
        if (def.indexOf(' > ') !== -1) {
            return;
        }
        const model = def;

        if (!model.includes('FetchResult')) {
            table = `${table}
            <tr>
                <td><a href="${encodeURIComponent(def)}">${def}</a></td>
                <td>{{"${(defs[def].description || '').replace(/"/g, "'")}" | markdownify}}</td>
            </tr>`;
        }
    });

    table = `${table}
    </tbody>
</table>
<br>`;

    fs.writeFile(`${dir}/index.html`, table);
};

const writeHtml = function(dir, defs, product, fields, apiName) {
    // write directory where all models will be written
    mkdirp.sync(dir);

    // write index for entire directory
    writeDirectoryIndex(dir, defs, product, apiName);

    Object.keys(defs).forEach((def) => {
        const html = `---
layout: default
title: "${def} | ${apiName}"
${defs[def].description ? `ogdescription: "${(defs[def].description).replace(/"/g, "'")}"` : ''}
api_console: 1
api_name: ${apiName}
${product === 'avaTax' && (apiName !== 'Avatax REST API v2' || apiName !== 'Avatax SOAP API') ? 'old_api: true' : ''}
nav: apis
product: ${product}
doctype: api_references
---

<div id='react-root'></div>
<script>
    window.PAGE_MODEL = ${JSON.stringify(defs[def])};
    window.MODEL_NAME = '${def}';
</script>
<script src='/public/js/render-model-bundle.js'></script>

{% include disqus.html %}`;

        buildEnumFromModel({dir, apiName, product, def}, defs[def]);

        fs.writeFile(`${dir}/${def}.html`, html, function(err) {
            if (err) {
                console.log(err);
            }
        });
    });
};

const buildHtml = function(fileName, apiDefinitions, apiName, product) {
    const defs = apiDefinitions || {};
    const relativeFilePath = fileName.substr(`${dataDir}/`.length);

    /* used for bracket notation of dynamic length
     * some key values cannot be accessed by dot notation
     * i.e. trustfile["api.trustfile"]
     */
    const pathWithoutExt = relativeFilePath.substr(0, relativeFilePath.lastIndexOf('.'));
    let fields = pathWithoutExt.split('/');

    fields = `["${fields.join('"]["')}"]`;

    const siteDir = `${__dirname}/../api-reference/${pathWithoutExt}`;

    writeHtml(siteDir, defs, product, fields, apiName);
};

const stripFileExt = (file) => file.substring(0, file.lastIndexOf('.'));

const swagPath = `${__dirname}/../dynamic/swagger`;
const dataPath = `${__dirname}/../_data/swagger`;

fs.symlink(swagPath, dataPath, function() {
    Object.keys(SWAGGER_CONFIG).forEach((key) => {
        try {
            const filename = swagPath + '/' + key;
            const data = loadFile(filename);
            const allDefinitions = buildDefinitions(data.definitions, data.paths, data['x-group-by-tags']);

            const {name, product} = SWAGGER_CONFIG[key];

            const saveFolder = `${dataPath}/${stripFileExt(key)}`;
            const newFilename = `${saveFolder}/models.json`;

            if (!fs.existsSync(saveFolder)) {
                fs.mkdirSync(saveFolder);
            }

            console.log('writing definition file ' + newFilename + '!');
            fs.writeFileSync(newFilename, JSON.stringify(allDefinitions, null, 2));

            buildHtml(newFilename, allDefinitions, name, product);
        } catch (e) {
            console.log(`\x1b[31mFailed to write ${key} models: ${e} \x1b[0m`);
            // Some Swagger_Config files don't exist, or are missing definitions to parse
            // Skip these!
        }
    });
});

/* eslint no-console:0 */
import fs from 'fs';
import yaml from 'js-yaml';
import mkdirp from 'mkdirp';
import SWAGGER_CONFIG from './SWAGGER_CONFIG';

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
title: "API Console"
api_console: 1
api_name: ${apiName}
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

    Object.keys(defs).forEach((def) => {
        table = `${table}
        <tr>
            <td><a href="${encodeURIComponent(def)}">${def}</a></td>
            <td>${defs[def].description || ''}</td>
        </tr>`;
    });

    table = `${table}
    </tbody>
</table>
<br>`;

    fs.writeFile(`${dir}/index.html`, table);
};

const writeHtml = function(dir, defs, product, fields, apiName) {
    // write directory where all models will be written
    mkdirp(dir, (error) => {
        if (error) {
            console.log(`Error writing directory: ${error}`);
            return;
        }

        // write index for entire directory
        writeDirectoryIndex(dir, defs, product, apiName);

        Object.keys(defs).forEach((def) => {
            let prettyJson = JSON.stringify(defs[def].example, null, 4);

            prettyJson = (prettyJson) ? prettyJson.replace("'", '') : prettyJson;

            const html = `---
layout: default
title: "API Console"
api_console: 1
api_name: ${apiName}
nav: apis
product: ${product}
doctype: api_references
endpoint_links: []
---

{% assign name = "${def}" %}
{% assign model_ = site.data.swagger${fields}.definitions[name] %}
{% assign ep = '${prettyJson}' %}

{% include models.html name=name ${(prettyJson) ? 'examplePretty=ep' : ''} model=model_ %}
`;

            fs.writeFile(`${dir}/${def}.html`, html, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        });
    });
};

const buildHtml = function(fileName, api) {
    const defs = api.definitions || {};
    const relativeFilePath = fileName.substr(`${dataDir}/`.length);

    /* used in combination with `fields` to access swagger
     * data linked in _data folder
     */
    let apiName;
    let product;

    try {
        product = SWAGGER_CONFIG[relativeFilePath].product;
        apiName = SWAGGER_CONFIG[relativeFilePath].name;
    } catch (e) {
        // TODO(DX-347): no config for avataxbr index.json and default-api.json
        console.log(`Couldn\'t find ${relativeFilePath} in SWAGGER_CONFIG file: ${e}`);
        return;
    }

    /* used for bracket notation of dynamic length
     * some key values cannot be accessed by dot notation
     * i.e. trustfile["api.trustfile"]
     */
    const pathWithoutExt = relativeFilePath.substr(0, relativeFilePath.lastIndexOf('.'));
    let fields = pathWithoutExt.split('/');

    fields = `["${fields.join('"]["')}"]`;

    const siteDir = `${__dirname}/../${pathWithoutExt}/models`;

    writeHtml(siteDir, defs, product, fields, apiName);
};

const fsReadRecursive = function(fileOrDir) {
    fs.stat(fileOrDir, (error, stats) => {
        if (error) {
            console.log(error);
            return null;
        } else if (stats.isDirectory()) {
            return fs.readdir(fileOrDir, (err, files) => {
                if (err) {
                    console.log(`Could not read directory ${fileOrDir}`);
                    return;
                }
                files.forEach((file) => {
                    fsReadRecursive(`${fileOrDir}/${file}`);
                });
            });
        }
        return buildHtml(fileOrDir, loadFile(fileOrDir));
    });
};

fs.symlink(`${__dirname}/../dynamic/swagger`, dataDir, function() {
    fsReadRecursive(dataDir);
});

/* eslint no-console:0 */

import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';

function writeHtml(dir, fileName, html) {
    mkdirp(dir, (err) => {
        if (err) {
            throw err;
        }
        fs.writeFile(path.join(dir, `${fileName}.html`),
            html,
            (e) => {
                if (e) {
                    console.log(`\x1b[31mFailed to write enum ${fileName}: ${e} \x1b[0m`);
                }
            });
    });
}

function tableBody(attr) {
    const values = {};

    attr['x-enum-value-comments'] = attr['x-enum-value-comments'] || {};
    attr.enum.forEach((a) => {
        values[a] = attr['x-enum-value-comments'][a] || '';
    });

    return Object.keys(values).reduce((html, k) => {
        return `${html}
        <tr>
            <td>${k}</td>
            <td>${values[k]}</td>
        </tr>`;
    }, '');
}

function titleLinks(parent, name) {
    const sections = parent.split(' > ');
    const first = sections.shift();
    let html = `<a href="../../${first}">${first}</a> > `;

    sections.reduce(function(str, section) {
        const l = `${str}${section}`;

        html += `<a href="../../${l}">${section}</a> > `;
        return l;
    }, `${first} > `);

    return `<h1>${html}${name}</h1>`;
}

function appendEnum(info, attr) {
    const html = `---
layout: default
title: "API Console"
api_console: 1
api_name: ${info.apiName}
nav: apis
product: ${info.product}
doctype: api_references
endpoint_links: []
---

${titleLinks(info.def, info.name)}

<div class="enum-summary">
    <h2>${info.enumType}</h2>

    ${(attr.description) ? `
    <h2 id="description">Description</h2>
    {{"${attr.description.replace(/"/g, "'")}" | markdownify}}` : ''
    }

    <table class="styled-table">
        <thead>
            <tr>
                <th>Value</th>
                <th>Description</th>
            </tr>
        </thead>
        <body>
            ${tableBody(attr)}
        </body>
    </table>
    <br>
</div>

{% include disqus.html %}`;

    writeHtml(path.join(info.dir, 'enums'), `${info.def} > ${info.name}`, html);
}

function buildEnumFromModel(info, model) {
    let props = {};

    if (model.type === 'object' || model.properties) {
        props = model.properties;
    } else if (model.type === 'string' || model.enum) {
        props[info.def] = model;
    }

    Object.keys(props).forEach((prop) => {
        if (props[prop].enum) {
            info.name = prop;
            info.enumType = 'Request Parameter Enum';
            appendEnum(info, props[prop]);
        }
    });
}

function buildEnumFromMethod(info, method) {
    if (!method.apiEndpoints) {
        return;
    }

    method.apiEndpoints.forEach((endpoint) => {
        let params;
        const doit = (param) => {
            if (params[param].enum) {
                info.def = endpoint.operationId.replace(/\s/g, '');
                info.name = param;
                appendEnum(info, params[param]);
            }
        };

        params = endpoint.pathParams || {};
        info.enumType = 'Path Parameter Enum';
        Object.keys(params).forEach(doit);
        params = endpoint.queryString || {};
        info.enumType = 'Query String Enum';
        Object.keys(params).forEach(doit);
    });
}

export {
    buildEnumFromModel,
    buildEnumFromMethod
};

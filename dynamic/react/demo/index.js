import React from 'react';
import {render} from 'react-dom';
import request from 'request';
import App from './App';
import {store} from './store';

import {actionTypes} from './reducers/reducer';

store.subscribe(() => {
    const state = store.getState();
    const api = state.apiInfo;
    const error = state.error;

    /* eslint no-console:1  */
    console.log('NEW STATE', state);
    render(<App api={api} error={error}/>, document.getElementById('api-demo'));
});

const API = window.location.search.split('api=')[1].toLowerCase() || 'invalid';
const API_SWAGGER_URLS = {
    landedcost: {
        base: 'http://localhost:8082',
        api: '/v3/api-definition'
    }
};
const API_SWAGGER_URL = API_SWAGGER_URLS[API].base + API_SWAGGER_URLS[API].api;

const createPostBody = (endpoint, definitions) => {
    const buildSchema = (schemaName, schema) => {
        if (schema.hasOwnProperty('allOf')) {
            return schema.allOf.map((allofItem) => {
                return buildSchema(null, allofItem);
            }).reduce((accum, obj) => ({...accum, ...obj}), {});
        }

        if (schema.$ref) {
            const refArray = schema.$ref.split('/');
            const ref = refArray[refArray.length - 1];

            return buildSchema(ref, definitions[ref]);
        }

        if (schema.type && schema.type === 'object') {
            return Object.assign({}, ...Object.keys(schema.properties).map((name) => {
                return {[name]: buildSchema(name, schema.properties[name])};
            }));
        }

        if (schema.type && schema.type === 'array') {
            return {type: schema.type, items: buildSchema(schemaName, schema.items)};
        }

        const objToReturn = {type: schema.type, value: ''};

        if (schema.example) {
            objToReturn.example = schema.example;
        }
        if (schema.description) {
            objToReturn.description = schema.description;
        }
        if (schema.enum) {
            objToReturn.enum = schema.enum;
        }
        if (schema.format) {
            objToReturn.format = schema.format;
        }
        if (schema.hasOwnProperty('minimum')) {
            objToReturn.minimum = schema.minimum;
        }
        if (schema.hasOwnProperty('maximum')) {
            objToReturn.maximum = schema.maximum;
        }

        return objToReturn;
    };

    const params = endpoint.parameters || [];
    let postBody = params.filter((p) => p.in === 'body');

    if (postBody.length) {
        postBody = postBody[0];
        postBody = buildSchema('postBody', postBody.schema);
    }

    return postBody;
};


const sanitizeSwagger = (api) => {
    const routes = Object.keys(api.paths).map((path) => {
        return Object.keys(api.paths[path]).map((action) => {
            let routePath = API_SWAGGER_URLS[API].base + path;

            if (api.schemes[0] && api.host && api.basePath) {
                routePath = api.schemes[0] + '://' + api.host + (api.basePath !== '/' ? api.basePath : '') + path;
            }

            const params = api.paths[path][action].parameters || [];
            const queryString = params.filter((p) => p.in === 'query').reduce((queryObj, param) => {
                queryObj[param.name] = {
                    name: param.name,
                    description: param.description,
                    required: param.required,
                    value: '',
                    example: param.example || ''
                };
                return queryObj;
            }, {});

            const postBody = createPostBody(api.paths[path][action], api.definitions);

            const endpointInfo = {
                path: routePath,
                action: action,
                name: api.paths[path][action].summary,
                description: api.paths[path][action].description
            };

            if (Object.keys(queryString).length) {
                endpointInfo.queryString = queryString;
            }

            if (Object.keys(postBody).length) {
                endpointInfo.postBody = postBody;
            }

            return endpointInfo;
        });
    });

    return [].concat(...routes);
};

request(API_SWAGGER_URL, (error, response, body) => {
    if (error || response.statusCode !== 200) {
        store.dispatch({
            type: actionTypes.FETCH_API_DATA_DONE,
            apiInfo: [],
            error: error ? error.message : response.statusMessage || ''
        });
        return;
    }
    // todo try/catch around JSON.parse
    const apiInfo = sanitizeSwagger(JSON.parse(body));

    store.dispatch({
        type: actionTypes.FETCH_API_DATA_DONE,
        apiInfo: apiInfo
    });
});

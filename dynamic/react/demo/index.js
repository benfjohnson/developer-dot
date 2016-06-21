import React from 'react';
import {render} from 'react-dom';

import App from './components/App';
import {createStore} from 'redux';

const actionTypes = {
    FETCH_API_DATA: 'FETCH_API_DATA',
    FETCH_API_DATA_DONE: 'FETCH_API_DATA_DONE'
};

const initialState = {
    api: [],
    error: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_API_DATA:
            return state;
        case actionTypes.FETCH_API_DATA_DONE:
            return {
                apiInfo: action.apiInfo,
                error: action.error
            };
        default:
            return state;
    }
};

let store = createStore(reducer);

// const API = window.location.hash.match(/[^/]*$/)[0];
const API = window.location.search.split('api=')[1].toLowerCase() || 'invalid';

const API_SWAGGER_URLS = {
    landedcost: 'http://localhost:8082/v3/api-definition'
};

const sanitizeSwagger = (api) => {
    const routes = Object.keys(api.paths).map((path) => {
        return Object.keys(api.paths[path]).map((action) => {
            return {
                path: path,
                action: action,
                name: api.paths[path][action].summary,
                description: api.paths[path][action].description,
                parameters: api.paths[path][action].parameters || []
            };
        });
    });

    return [].concat(...routes);
};

const checkFetchStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response.json();
    }
    const error = new Error(response.statusText);

    error.response = response;
    throw error;
};

store.subscribe(() => {
    const state = store.getState();

    const api = state.apiInfo;
    const error = state.error;
    console.log('NEW STATE', state);
    render(<App api={api} error={error} />, document.getElementById('api-demo'));
});

fetch(API_SWAGGER_URLS[API]).then(checkFetchStatus).then(sanitizeSwagger).then((apiInfo) => {
    store.dispatch({
        type: actionTypes.FETCH_API_DATA_DONE,
        apiInfo: apiInfo,
        error: { status: false }
    });
}).catch((err) => {
    store.dispatch({
        type: actionTypes.FETCH_API_DATA_DONE,
        apiInfo: [],
        error: {
            status: true,
            error: err.response ? err.response.statusText : ''
        }
    });
});

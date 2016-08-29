import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';
import App from './containers/app';
// fetch polyfill
import 'whatwg-fetch';

/* Each recipe page should set a window variable to corresponding recipe config it wants to render */
/* eslint-disable no-underscore-dangle */
const recipeName = window.__RECIPE_FILE_NAME__;
/* eslint-enable no-underscore-dangle */

fetch(`/dynamic/react/api-recipes/recipes/${recipeName}`)
.then((response) => {
    if (response.status !== 200) {
        throw new Error('Something went wrong loading our Api recipe configuration');
    }
    return response.json();
})
.then((recipeConfig) => {
    const logger = createLogger();
    const store = process.env.NODE_ENV !== 'production' ? createStore(reducer, recipeConfig, applyMiddleware(logger)) : createStore(reducer, recipeConfig);

    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('react-root')
    );
});

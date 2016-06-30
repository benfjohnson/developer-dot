/* global SwaggerUi */
import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {reducer} from './reducers/reducer';

const store = createStore(reducer, window.__INITIAL_STATE__);

setTimeout(() => {
    store.subscribe(() => {
        const state = store.getState();
        const api = state.apiInfo;
        const error = state.error;

        /* eslint no-console:1  */
        console.log('NEW STATE', state);
        render(<App api={api} error={error}/>, document.getElementById('api-demo'));
    });
}, 2000);
// store.subscribe(() => {
//     const state = store.getState();
//     const api = state.apiInfo;
//     const error = state.error;

//     /* eslint no-console:1  */
//     console.log('NEW STATE', state);
//     render(<App api={api} error={error}/>, document.getElementById('api-demo'));
// });

console.log('static demo kicked off!');
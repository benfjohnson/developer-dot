import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import {Provider} from 'react-redux';

import {reducer} from './reducers/reducer';

import App from './app';
import {actionTypes} from './reducers/reducer';

const logger = createLogger();

/* eslint-disable no-underscore-dangle */
const initialState = typeof window !== 'undefined' ? window.__INITIAL_STATE__ : {};
/* eslint-enable no-underscore-dangle */

const store = createStore(reducer, initialState, applyMiddleware(logger));

/*
 * Initially render our app on the client to sync it with our server-render.
 * Once rendered, emit an APP_LOADED action so we can do browser-specific behavior.
 * This lets us create a 'Download POSTMAN' button using browser APIs without our client/server
 * isomorphic React getting out of sync (no way to access URL or Blob APIs on the server)!
 */
render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('api-console'),
     () => store.dispatch({type: actionTypes.APP_LOADED})
);

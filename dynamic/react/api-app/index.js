import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import {Provider} from 'react-redux';
import userManager from './user-manager';

import Oidc from 'oidc-client';

import reducer from './reducers/reducer';
import App from './app';

const logger = createLogger();

/* eslint-disable no-underscore-dangle */
const initialState = typeof window !== 'undefined' ? window.__INITIAL_STATE__ : {};
/* eslint-enable no-underscore-dangle */

const store = process.env.NODE_ENV !== 'production' ? createStore(reducer, initialState, applyMiddleware(logger)) : createStore(reducer, initialState);

Oidc.Log.logger = console;

render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('api-console'),
    () => {
        userManager.getUser().then((user) => {
            store.dispatch({type: 'USER_PROFILE_FETCHED', user});
        });
    }
);

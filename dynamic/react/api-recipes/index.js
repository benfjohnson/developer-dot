import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';
import App from './containers/app';
import recipeConfig from './avatax-recipes';

const logger = createLogger();

const store = process.env.NODE_ENV !== 'production' ? createStore(reducer, recipeConfig, applyMiddleware(logger)) : createStore(reducer, recipeConfig);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-root')
);

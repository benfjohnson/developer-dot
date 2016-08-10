import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import {Provider} from 'react-redux';

import reducer from './reducers/reducer';

import App from './containers/app';
import actionTypes from '../shared/actionTypes';

import swaggerToGetStartedState from './swaggerToGetStartedState';

const logger = createLogger();

swaggerToGetStartedState('avatax-subset.yaml', (appState) => {
    const store = createStore(reducer, appState, applyMiddleware(logger));

    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('react-root'),
        () => store.dispatch({type: actionTypes.APP_LOADED})
    );
});

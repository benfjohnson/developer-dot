import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {store} from './store';
import {actionTypes} from './reducers/reducer';

render(<App api={store.getState()} error={null}/>, document.getElementById('api-console'));

store.subscribe(() => {
    const state = store.getState();
    const error = state.error;

    /* eslint-disable no-console */
    console.log('NEW STATE', state);
    /* eslint-enable no-console */
    render(<App api={state} error={error}/>, document.getElementById('api-console'));
});

/*
 * After a pause, emit an APP_LOADED action so we can do browser-specific behavior.
 * This lets us create a 'Download POSTMAN' button using browser APIs without our client/server
 * isomorphic React getting out of sync!
 */

setTimeout(() => store.dispatch({type: actionTypes.APP_LOADED}), 200);

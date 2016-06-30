import {createStore} from 'redux';
import {reducer} from './reducers/reducer';

let initialState;

// In the browser, we want to create our store based on the initial state we send
// otherwise we just set it w/ empty object
if (typeof window === 'undefined') {
    initialState = {};
} else {
    initialState = window.__INITIAL_STATE__;
}

const store = createStore(reducer, initialState);

export {store};

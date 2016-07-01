import {createStore} from 'redux';
import {reducer} from './reducers/reducer';

// In the browser, we want to create our store based on the initial state we send
// otherwise we just set it w/ empty object

/* eslint-disable no-underscore-dangle */
const initialState = typeof window !== 'undefined' ? window.__INITIAL_STATE__ : {};
/* eslint-enable no-underscore-dangle */

const store = createStore(reducer, initialState);

export {store};

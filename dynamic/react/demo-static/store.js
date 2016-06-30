import {createStore} from 'redux';
import {reducer} from './reducers/reducer';

const initialState = window.__INITIAL_STATE__ || null;

const store = createStore(reducer, initialState);

export {store};

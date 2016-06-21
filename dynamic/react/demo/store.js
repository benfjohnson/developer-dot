import {createStore} from 'redux';

const actionTypes = {
    FETCH_API_DATA: 'FETCH_API_DATA',
    FETCH_API_DATA_DONE: 'FETCH_API_DATA_DONE',
    SUBMIT_DONE: 'SUBMIT_DONE'
};

const reducer = (state, action) => {
    const updatedState = Object.assign({}, state);

    switch (action.type) {
    case actionTypes.FETCH_API_DATA:
        break;
    case actionTypes.FETCH_API_DATA_DONE:
        updatedState.apiInfo = action.apiInfo;
        if (action.error) {
            updatedState.error = action.error;
        }
        break;
    case actionTypes.SUBMIT_DONE:
        const newApiInfo = [].concat(state.apiInfo);

        newApiInfo[action.apiId].apiResponse = action.apiResponse;

        updatedState.apiInfo = newApiInfo;
        if (action.error) {
            updatedState.error = action.error;
        }
        break;
    default:
        break;
    }
    return updatedState;
};

const store = createStore(reducer);

export {store, actionTypes};

import {createStore} from 'redux';

const actionTypes = {
    FETCH_API_DATA_DONE: 'FETCH_API_DATA_DONE',
    SUBMIT_DONE: 'SUBMIT_DONE',
    INPUT_CHANGE: 'INPUT_CHANGE'
};

const buildCurlFromProps = (endpoint) => {
    return Object.assign({}, endpoint, {curl: `curl -X ${endpoint.action.toUpperCase()} "${endpoint.path}" -H "Accept: application/json"`});
};

const reducer = (state, action) => {
    const updatedState = Object.assign({}, state);

    switch (action.type) {
    case actionTypes.FETCH_API_DATA:
        break;
    case actionTypes.FETCH_API_DATA_DONE:
        updatedState.apiInfo = action.apiInfo.map(buildCurlFromProps);
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
    case actionTypes.INPUT_CHANGE:
        // const newApiInfo = [].concat(state.apiInfo);
        updatedState.apiInfo[action.apiId].parameters.queryString[action.queryParamName].value = action.inputVal;

        break;
    default:
        break;
    }
    return updatedState;
};

const store = createStore(reducer);

export {store, actionTypes};

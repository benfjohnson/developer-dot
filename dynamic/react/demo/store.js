import {createStore} from 'redux';

const actionTypes = {
    FETCH_API_DATA_DONE: 'FETCH_API_DATA_DONE',
    SUBMIT_DONE: 'SUBMIT_DONE',
    INPUT_CHANGE: 'INPUT_CHANGE'
};

const buildQueryString = (endpoint) => {
    let qsPath = '';

    if (endpoint.parameters && endpoint.parameters.queryString && Object.keys(endpoint.parameters.queryString).some((p) => endpoint.parameters.queryString[p].value)) {
        qsPath = Object.keys(endpoint.parameters.queryString).reduce((qs, param, i) => {
            if (endpoint.parameters.queryString[param].value.length) {
                return `${qs}${i > 0 ? '&' : ''}${param}=${endpoint.parameters.queryString[param].value}`;
            }
            return qs;
        }, '?');
    }
    return {...endpoint, qsPath};
};

const buildCurlFromProps = (endpoint) => (
{...endpoint, curl: `curl -X ${endpoint.action.toUpperCase()} "${endpoint.path}${endpoint.qsPath}" -H "Accept: application/json"`}
);

const reducer = (state, action) => {
    const updatedState = Object.assign({}, state);

    switch (action.type) {
    case actionTypes.FETCH_API_DATA:
        break;
    case actionTypes.FETCH_API_DATA_DONE:
        updatedState.apiInfo = action.apiInfo.map(buildQueryString);
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
        updatedState.apiInfo[action.apiId].parameters.queryString[action.queryParamName].value = action.inputVal;
        updatedState.apiInfo[action.apiId] = buildQueryString(updatedState.apiInfo[action.apiId]);
        updatedState.apiInfo[action.apiId] = buildCurlFromProps(updatedState.apiInfo[action.apiId]);

        break;
    default:
        break;
    }
    return updatedState;
};

const store = createStore(reducer);

export {store, actionTypes};

import endpointReducer from './endpointReducer';
import {buildQsPath, buildCurl} from '../helpers';

const actionTypes = {
    FETCH_API_DATA_DONE: 'FETCH_API_DATA_DONE',
    SUBMIT_DONE: 'SUBMIT_DONE',
    QUERY_STRING_CHANGED: 'QUERY_STRING_CHANGED',
    POST_BODY_CHANGED: 'POST_BODY_CHANGED'
};

const reducer = (state, action) => {
    const newState = {...state};

    switch (action.type) {

    case actionTypes.FETCH_API_DATA_DONE:
        newState.apiInfo = action.apiInfo.map((ep) => ({...ep, qsPath: buildQsPath(ep.queryString)}));
        newState.apiInfo = action.apiInfo.map((ep) => ({...ep, curl: buildCurl(ep)}));
        if (action.error) {
            newState.error = action.error;
        }
        break;

    case actionTypes.SUBMIT_DONE:
    case actionTypes.POST_BODY_CHANGED:
    case actionTypes.QUERY_STRING_CHANGED:
        const endpoint = state.apiInfo[action.apiId];

        newState.apiInfo[action.apiId] = endpointReducer(endpoint, action);
        break;

    default:
        break;
    }

    return newState;
};

export {actionTypes, reducer};

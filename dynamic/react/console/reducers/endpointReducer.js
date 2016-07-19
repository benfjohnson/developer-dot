import R from 'ramda';
import queryStringReducer from './queryStringReducer';
import postBodyReducer from './postBodyReducer';
import {actionTypes} from './reducer';
import {buildQsPath, buildPostBodyData, buildCurl, fillSampleData} from '../helpers';

export default (state, action) => {
    let newState = R.clone(state);

    switch (action.type) {
    case actionTypes.SUBMIT_DONE:
        newState.apiResponse = action.apiResponse;
        if (action.error) {
            newState.error = action.error;
        }
        break;
    case actionTypes.FILL_REQUEST_SAMPLE_DATA:
        newState = fillSampleData(newState);
        if (newState.postBody) {
            newState.postBodyData = buildPostBodyData(newState.postBody);
        }
        newState.qsPath = buildQsPath(newState.queryString);
        newState.curl = buildCurl(newState.isAuthenticated, newState);
        break;
    case actionTypes.QUERY_PARAM_CHANGED:
        newState = {...newState, queryString: queryStringReducer(newState.queryString, action)};
        newState.qsPath = buildQsPath(newState.queryString);
        newState.curl = buildCurl(newState.isAuthenticated, newState);
        break;
    case actionTypes.PATH_PARAM_CHANGED:
        newState.pathParams[action.paramName].value = action.inputVal;
        newState.curl = buildCurl(newState.isAuthenticated, newState);
        break;
    case actionTypes.POST_BODY_CHANGED:
    case actionTypes.TOGGLE_POST_BODY_ITEM_VISIBILITY:
    case actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION:
    case actionTypes.REMOVE_ITEM_FROM_POST_BODY_COLLECTION:
        newState = {...newState, postBody: postBodyReducer(newState.postBody, action)};
        newState.postBodyData = buildPostBodyData(newState.postBody);
        newState.curl = buildCurl(newState.isAuthenticated, newState);
        break;
    case actionTypes.TOGGLE_RESPONSE_MODEL_EXAMPLE:
        newState.response.currentVisibility = newState.response.currentVisibility === 'example' ? 'model' : 'example';
        break;
    case actionTypes.TOGGLE_REQUEST_MODEL_EXAMPLE:
        newState.request.currentVisibility = newState.request.currentVisibility === 'example' ? 'model' : 'example';
        break;
    default:
        break;
    }

    return newState;
};

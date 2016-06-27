import queryStringReducer from './queryStringReducer';
import postBodyReducer from './postBodyReducer';
import {actionTypes} from './reducer';
import {buildQsPath, buildPostBodyData, buildCurl} from '../helpers';

export default (state, action) => {
    let newState = {...state};

    switch (action.type) {
    case actionTypes.SUBMIT_DONE:
        newState.apiResponse = action.apiResponse;
        if (action.error) {
            newState.error = action.error;
        }
        break;
    case actionTypes.QUERY_STRING_CHANGED:
        newState = {...newState, queryString: queryStringReducer(newState.queryString, action)};
        newState.qsPath = buildQsPath(newState.queryString);
        newState.curl = buildCurl(newState);
        break;
    case actionTypes.POST_BODY_CHANGED:
    case actionTypes.TOGGLE_POST_BODY_ITEM_VISIBILITY:
        newState = {...newState, postBody: postBodyReducer(newState.postBody, action)};
        newState.postBodyData = buildPostBodyData('postBodyData', newState.postBody);
        newState.curl = buildCurl(newState);
        break;
    default:
        break;
    }

    return newState;
};

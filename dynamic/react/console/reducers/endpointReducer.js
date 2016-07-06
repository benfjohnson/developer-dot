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
        // newState.postBodyData = buildPostBodyData(newState.postBody);
        newState.qsPath = buildQsPath(newState.queryString);
        newState.curl = buildCurl(newState);
        break;
    case actionTypes.QUERY_STRING_CHANGED:
        newState = {...newState, queryString: queryStringReducer(newState.queryString, action)};
        newState.qsPath = buildQsPath(newState.queryString);
        newState.curl = buildCurl(newState);
        break;
    case actionTypes.POST_BODY_CHANGED:
    case actionTypes.TOGGLE_POST_BODY_ITEM_VISIBILITY:
    case actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION:
        newState = {...newState, postBody: postBodyReducer(newState.postBody, action)};
        newState.postBodyData = buildPostBodyData(newState.postBody);
        newState.curl = buildCurl(newState);
        break;
    default:
        break;
    }

    return newState;
};

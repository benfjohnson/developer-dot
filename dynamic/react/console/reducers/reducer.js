import R from 'ramda';
import endpointReducer from './endpointReducer';

const actionTypes = {
    FETCH_API_DATA_DONE: 'FETCH_API_DATA_DONE',
    SUBMIT_DONE: 'SUBMIT_DONE',
    QUERY_STRING_CHANGED: 'QUERY_STRING_CHANGED',
    POST_BODY_CHANGED: 'POST_BODY_CHANGED',
    TOGGLE_POST_BODY_ITEM_VISIBILITY: 'TOGGLE_POST_BODY_ITEM_VISIBILITY',
    ADD_ITEM_TO_POST_BODY_COLLECTION: 'ADD_ITEM_TO_POST_BODY_COLLECTION'
};

const reducer = (state = {}, action) => {
    const newState = R.clone(state);

    switch (action.type) {

    case actionTypes.FETCH_API_DATA_DONE:
        newState.apiInfo = action.apiInfo;
        if (action.error) {
            newState.error = action.error;
        }
        break;

    case actionTypes.SUBMIT_DONE:
    case actionTypes.POST_BODY_CHANGED:
    case actionTypes.QUERY_STRING_CHANGED:
    case actionTypes.TOGGLE_POST_BODY_ITEM_VISIBILITY:
    case actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION:
        const endpoint = state.apiInfo[action.endpointId];

        newState.apiInfo[action.endpointId] = endpointReducer(endpoint, action);
        break;

    default:
        break;
    }

    return newState;
};

export {actionTypes, reducer};

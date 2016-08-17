import apiConsoleReducer from '../../shared/reducers/apiConsoleReducer';
import actionTypes from '../../shared/actionTypes';

export default (state, action) => {
    const newState = {...state};

    switch (action.type) {
    case actionTypes.RESET_CONSOLE:
    case actionTypes.SUBMIT_DONE:
    case actionTypes.FILL_REQUEST_SAMPLE_DATA:
    case actionTypes.QUERY_STRING_CHANGED:
    case actionTypes.PATH_PARAM_CHANGED:
    case actionTypes.POST_BODY_CHANGED:
    case actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION:
    case actionTypes.REMOVE_ITEM_FROM_POST_BODY_COLLECTION:
    case actionTypes.TOGGLE_SHOW_EXCLUDED_POST_BODY_PROPS:
        return apiConsoleReducer(newState, action);
    default:
        break;
    }

    return newState;
};

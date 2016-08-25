import apiConsoleReducer from '../../shared/reducers/apiConsoleReducer';
import actionTypes from '../../shared/actionTypes';

// Simply accesses an endpoint based on its id and forwards reducing to shared apiConsoleReducer
export default (state, action) => {
    switch (action.type) {
    case actionTypes.APP_LOADED:
    case actionTypes.SUBMIT_DONE:
    case actionTypes.QUERY_STRING_CHANGED:
    case actionTypes.PATH_PARAM_CHANGED:
    case actionTypes.POST_BODY_CHANGED:
    case actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION:
    case actionTypes.REMOVE_ITEM_FROM_POST_BODY_COLLECTION:
    case actionTypes.FILL_REQUEST_SAMPLE_DATA:
    case actionTypes.AUTH_KEY_CHANGED:
    case actionTypes.RESET_CONSOLE:
    case actionTypes.TOGGLE_SHOW_EXCLUDED_POST_BODY_PROPS:
        const newEndpointState = apiConsoleReducer(state[action.endpointId], action);

        return state.map((ep, i) => {
            return i === action.endpointId ? newEndpointState : ep;
        });
    default:
        return state;
    }
};

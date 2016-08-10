import apiConsoleReducer from '../../shared/reducers/apiConsoleReducer';
import actionTypes from '../../shared/actionTypes';
import {traversePropertyPath} from '../../shared/helpers';

const DOC_TYPES = {
    REQUEST: 'REQUEST',
    RESPONSE: 'RESPONSE'
};

export default (state, action) => {
    const newState = {...state};

    switch (action.type) {
    case actionTypes.CONSOLE_VISIBILITY_TOGGLED:
        return {...newState, apiConsoleVisible: (!state.apiConsoleVisible)};
    case actionTypes.JUMP_TO_CONSOLE:
        return {...newState, apiConsoleVisible: true};
    case actionTypes.TOGGLE_DOCUMENTATION_ITEM_VISIBILITY:
        const stateToChange = action.documentationFor === DOC_TYPES.REQUEST ? newState.requestSchema : newState.responseSchema;
        const propToToggle = traversePropertyPath(action.postBodyParamName, stateToChange);

        propToToggle.uiState.visible = !propToToggle.uiState.visible;
        break;
    case actionTypes.RESET_CONSOLE:
    case actionTypes.SUBMIT_DONE:
    case actionTypes.FILL_REQUEST_SAMPLE_DATA:
    case actionTypes.QUERY_STRING_CHANGED:
    case actionTypes.PATH_PARAM_CHANGED:
    case actionTypes.POST_BODY_CHANGED:
    case actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION:
    case actionTypes.REMOVE_ITEM_FROM_POST_BODY_COLLECTION:
        return apiConsoleReducer(newState, action);
    default:
        break;
    }

    return newState;
};

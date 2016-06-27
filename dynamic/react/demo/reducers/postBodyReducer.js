import {actionTypes} from './reducer';

export default (state, action) => {
    const newState = {...state};

    switch (action.type) {
    case actionTypes.POST_BODY_CHANGED:
        if (action.postBodyParamName.indexOf('null') !== -1) {
            newState[action.postBodyParamName.split(';')[1]].value = action.inputVal;
        } else {
            action.postBodyParamName.split(';').reduce((accum, paramName) => accum[paramName], newState).value = action.inputVal;
        }

        return newState;
    case actionTypes.TOGGLE_POST_BODY_ITEM_VISIBILITY:
        if (action.postBodyParamName.indexOf('null') !== -1) {
            newState[action.postBodyParamName.split(';')[1]].uiState.visible = !newState[action.postBodyParamName.split(';')[1]].uiState.visible;
        } else {
            action.postBodyParamName.split(';').reduce((accum, paramName) => accum[paramName], newState).visible = !(action.postBodyParamName.split(';').reduce((accum, paramName) => accum[paramName], newState).visible);
        }
        return newState;
    default:
        return newState;
    }
};

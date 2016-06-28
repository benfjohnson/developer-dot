import {actionTypes} from './reducer';

export default (state, action) => {
    const newState = {...state};

    switch (action.type) {
    case actionTypes.POST_BODY_CHANGED:
        console.log('POST BODY CHANGED', action);
        if (action.postBodyParamName.indexOf('null') !== -1) {
            newState[action.postBodyParamName.split(';')[1]].value = action.inputVal;
        } else {
            action.postBodyParamName.split(';').reduce((accum, paramName) => accum[paramName], newState).value = action.inputVal;
        }

        return newState;
    case actionTypes.TOGGLE_POST_BODY_ITEM_VISIBILITY:
        //console.log('TOGGLE VISIBILITY ACTION', action);
        if (action.postBodyParamName.indexOf('null') !== -1) {
            newState[action.postBodyParamName.split(';')[1]].uiState.visible = !newState[action.postBodyParamName.split(';')[1]].uiState.visible;
        } else {
            action.postBodyParamName.split(';').reduce((accum, paramName) => accum[paramName], newState).visible = !(action.postBodyParamName.split(';').reduce((accum, paramName) => accum[paramName], newState).visible);
        }
        return newState;
    case actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION:
        //console.log('ADD TO COLLECTION ACTION', action);
        // Want to unhide section if hidden to emphasize we've added an item:
        newState[action.postBodyParamName.split(';')[1]].uiState.visible = true;
        newState[action.postBodyParamName.split(';')[1]].value.push(action.itemSchema);
        return newState;
    default:
        return newState;
    }
};

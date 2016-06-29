import {actionTypes} from './reducer';

const traversePropertyPath = (propertyPath, state) => {
    const pathArray = propertyPath.split(';');

    return pathArray.reduce((accum, paramName) => {
        if (paramName.indexOf('[') !== -1) {
            const index = parseInt(paramName.slice(paramName.indexOf('[') + 1, paramName.indexOf(']')), 10);
            return accum.value[index];
        }
        return accum[paramName];
    }, state);
};

export default (state, action) => {
    const newState = {...state};
    let propertyPath;

    switch (action.type) {
    case actionTypes.POST_BODY_CHANGED:
        // console.log('POST BODY CHANGED', action);
        if (action.postBodyParamName.indexOf('null') !== -1) {
            newState[action.postBodyParamName.split(';')[1]].value = action.inputVal;
        } else {
            action.postBodyParamName.split(';').reduce((accum, paramName) => accum[paramName], newState).value = action.inputVal;
        }

        return newState;
    case actionTypes.TOGGLE_POST_BODY_ITEM_VISIBILITY:
        // console.log('TOGGLE VISIBILITY ACTION', action);

        if (action.postBodyParamName === '') {
            // root property
            newState.uiState.visible = !newState.uiState.visible;
            return newState;
        }

        traversePropertyPath(action.postBodyParamName, newState).uiState.visible = !traversePropertyPath(action.postBodyParamName, newState).uiState.visible;
        return newState;

    case actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION:
        // console.log('ADD TO COLLECTION ACTION', action);

        if (action.postBodyParamName === '') {
            // root property
            newState.uiState.visible = true;
            newState.value.push(action.itemSchema);
            return newState;
        }

        traversePropertyPath(action.postBodyParamName, newState).uiState.visible = true;
        traversePropertyPath(action.postBodyParamName, newState).value = traversePropertyPath(action.postBodyParamName, newState).value.concat(action.itemSchema);
        return newState;
    default:
        return newState;
    }
};

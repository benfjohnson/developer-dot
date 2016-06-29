import {actionTypes} from './reducer';
import R from 'ramda';

const traversePropertyPath = (propertyPath, state) => {
    if (propertyPath === '') {
        return state;
    }

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
    const newState = R.clone(state);
    const newStateProperty = traversePropertyPath(action.postBodyParamName, newState);

    switch (action.type) {
    case actionTypes.POST_BODY_CHANGED:
//         console.log('POST BODY CHANGED', action);

        switch(newStateProperty.fieldType) {
        case 'number':
            newStateProperty.value = parseFloat(action.inputVal);
            break;
        case 'boolean':
            newStateProperty.value = action.inputVal === 'true';
            break;
        default:
            newStateProperty.value = action.inputVal;
        }


        return newState;
    case actionTypes.TOGGLE_POST_BODY_ITEM_VISIBILITY:
//         console.log('TOGGLE VISIBILITY ACTION', action);

        newStateProperty.uiState.visible = !newStateProperty.uiState.visible;

        return newState;
    case actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION:
//         console.log('ADD TO COLLECTION ACTION', action);

        newStateProperty.uiState.visible = true;
        newStateProperty.value = newStateProperty.value.concat(action.itemSchema);
        // Should only set visibility on the array item if it's an object/array, not simple property:
        if (newStateProperty.value[newStateProperty.value.length - 1].uiState) {
            newStateProperty.value[newStateProperty.value.length - 1].uiState.visible = true;
        }
        return newState;
    default:
        return newState;
    }
};

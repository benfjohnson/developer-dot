import {actionTypes} from './reducer';

const traversePropertyPath = (propertyPath, state) => {
    if (propertyPath === '') {
        return state;
    }

    const pathArray = propertyPath.split(':');

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
    let newStateProperty = traversePropertyPath(action.postBodyParamName, newState);

    switch (action.type) {
    case actionTypes.POST_BODY_CHANGED:
        switch (newStateProperty.fieldType) {
        case 'number':
            newStateProperty = {...newStateProperty, value: isNaN(parseFloat(action.newValue)) ? action.newValue : parseFloat(action.newValue)};
            break;
        case 'boolean':
            newStateProperty = {...newStateProperty, value: action.newValue === 'true'};
            break;
        default:
            newStateProperty = {...newStateProperty, value: action.newValue};
        }
        return newState;
    case actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION:
        newStateProperty.uiState.visible = true;
        newStateProperty.value = newStateProperty.value.concat(action.itemSchema);

        // Should only set visibility on the array item if it's an object/array, not simple property:
        if (newStateProperty.value[newStateProperty.value.length - 1].uiState) {
            newStateProperty.value[newStateProperty.value.length - 1].uiState.visible = true;
        }
        return newState;
    case actionTypes.REMOVE_ITEM_FROM_POST_BODY_COLLECTION:
        const itemToRemove = action.postBodyParamName.substr(0, action.postBodyParamName.lastIndexOf(':'));
        const indexToRemove = parseInt(action.postBodyParamName.substr(action.postBodyParamName.lastIndexOf(':')).replace(/\D/g, ''), 10);
        const newStatePropertyToRemove = traversePropertyPath(itemToRemove, newState);

        newStatePropertyToRemove.value.splice(indexToRemove, 1);

        return newState;
    default:
        return newState;
    }
};

import {actionTypes} from '../actions';


// Simply accesses an endpoint based on its id and forwards reducing to shared apiConsoleReducer
export default (state, action) => {
    const recipe = state.find((r) => r.id === action.recipeId);

    switch (action.type) {
    case actionTypes.INPUT_CHANGED:
        const input = recipe.inputs.find((i) => i.name === action.inputName);

        input.value = action.newValue;
        const newRequest = {...recipe.request, postBody: updateDataByPropertyPath(input.field, action.newValue, recipe.request.postBody)};

        return state.map((r) => {
            if (r.id === action.recipeId) {
                return {...r, request: newRequest};
            }
            return r;
        });
    case actionTypes.SUBMIT_REQUEST:
        return state.map((r) => {
            if (r.id === action.recipeId) {
                return {...r, response: action.apiResponse};
            }
            return r;
        });
    default:
        return state;
    }
};

/* Abstracts accessing a property by either name or array index
 * (works for both array and object properties)
 */
function getPropertyName(name) {
    if (name.indexOf('[') !== -1) {
        // accessing an array element
        const index = parseInt(name.substring(1, name.length - 1), 10);

        if (isNaN(index)) {
            throw new Error(`Bad call to accessPropertyByName in recipeForm.js\nExpected: [<int>]\nReceived: ${name}`);
        }
        return index;
    }

    return name;
}
/* Returns new data, with the potentially deeply nested propertyPath
 * updated with the passed value. The `propertyPath` is a string with colons
 * delimiting property names, and can handle both object props and array indices
 */
function updateDataByPropertyPath(propertyPath, newValue, data) {
    const propNameArray = propertyPath.split(':');
    const newData = {...data};

    let currDataSlice = newData;

    propNameArray.forEach((propName, i) => {
        /* Have to check if accessor is the last */
        if (i === propNameArray.length - 1) {
            currDataSlice[getPropertyName(propName)] = newValue;
        } else {
            currDataSlice = currDataSlice[getPropertyName(propName)];
        }
    });

    return newData;
}

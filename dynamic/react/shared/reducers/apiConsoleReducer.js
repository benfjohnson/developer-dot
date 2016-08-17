import queryStringReducer from './queryStringReducer';
import actionTypes from '../../shared/actionTypes';
import {buildQsPath, buildCurl, fillOrRemoveSampleData, buildInitialPostBodyData} from '../helpers';

// Method traverses a `postBody` endpoint property by colon-separated name and returns the
// innermost property described by the propertyPath
const traversePropertyPath = (propertyPath, state) => {
    if (propertyPath === '') {
        return state;
    }
    const pathArray = propertyPath.split(':');

    return pathArray.reduce((accum, paramName) => {
        if (paramName.indexOf('[') !== -1) {
            const index = parseInt(paramName.slice(paramName.indexOf('[') + 1, paramName.indexOf(']')), 10);

            return accum.items[index];
        }
        return accum[paramName];
    }, state);
};

const traversePostBodyData = (propertyPath, state) => {
    if (propertyPath === '') {
        return state;
    }
    const pathArray = propertyPath.split(':');

    return pathArray.reduce((accum, paramName) => {
        if (paramName.indexOf('[') !== -1) {
            const index = parseInt(paramName.slice(paramName.indexOf('[') + 1, paramName.indexOf(']')), 10);

            return accum[index];
        }
        return accum[paramName];
    }, state);
};

const updateDataAtProperty = (propertyPath, newVal, postBodyData) => {
    if (propertyPath === '') {
        return;
    }
    const pathArray = propertyPath.split(':');

    let nestedObj = postBodyData;

    pathArray.forEach((nestedParam, i) => {
        if (i === pathArray.length - 1) {
            if (nestedParam.indexOf('[') !== -1) {
                const index = parseInt(nestedParam.slice(nestedParam.indexOf('[') + 1, nestedParam.indexOf(']')), 10);

                nestedObj[index] = newVal;
                return;
            }
            nestedObj[nestedParam] = newVal;
            return;
        }

        if (nestedParam.indexOf('[') !== -1) {
            const index = parseInt(nestedParam.slice(nestedParam.indexOf('[') + 1, nestedParam.indexOf(']')), 10);

            nestedObj = nestedObj[index];
        } else {
            nestedObj = nestedObj[nestedParam];
        }
    });

    nestedObj = newVal;
};

export default (state, action) => {
    let newState = {...state};

    switch (action.type) {
    case actionTypes.RESET_CONSOLE:
        newState = fillOrRemoveSampleData(newState, true);
        newState.qsPath = buildQsPath(newState.queryString);
        newState.curl = buildCurl(newState.isAuthenticated, newState);
        return {...newState, apiResponse: undefined};
    case actionTypes.SUBMIT_DONE:
        newState.apiResponse = action.apiResponse;
        if (action.error) {
            newState.error = action.error;
        }
        break;
    case actionTypes.FILL_REQUEST_SAMPLE_DATA:
        newState = fillOrRemoveSampleData(newState);
        newState.qsPath = buildQsPath(newState.queryString);
        newState.curl = buildCurl(newState.isAuthenticated, newState);
        break;
    case actionTypes.QUERY_STRING_CHANGED:
        newState = {...newState, queryString: queryStringReducer(newState.queryString, action)};
        newState.qsPath = buildQsPath(newState.queryString);
        newState.curl = buildCurl(newState.isAuthenticated, newState);
        break;
    case actionTypes.PATH_PARAM_CHANGED:
        newState.pathParams[action.paramName].value = action.newValue;
        newState.curl = buildCurl(newState.isAuthenticated, newState);
        break;
    case actionTypes.POST_BODY_CHANGED:
        // If any changed postBodySchema form input was an array item, need to access its `items`
        // schema to determine its fieldType. With that in hand, we can directly update it at its index in our postBodyData
        const accessorName = action.postBodyParamName.replace(/\[\d+\]/g, 'items');
        const newStateProperty = traversePropertyPath(accessorName, newState.postBody);
        let castedValue;

        switch (newStateProperty.fieldType) {
        case 'number':
            castedValue = isNaN(parseFloat(action.newValue)) ? action.newValue : parseFloat(action.newValue);
            break;
        default:
            castedValue = action.newValue;
        }
        updateDataAtProperty(action.postBodyParamName, castedValue, newState.postBodyData);
        break;
    case actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION:
        const newArrObj = buildInitialPostBodyData(action.itemSchema, newState.showExcludedPostBodyFields);

        traversePostBodyData(action.postBodyParamName, newState.postBodyData).push(newArrObj);
        break;
    case actionTypes.REMOVE_ITEM_FROM_POST_BODY_COLLECTION:
        const itemToRemove = action.postBodyParamName.substr(0, action.postBodyParamName.lastIndexOf(':'));
        const indexToRemove = parseInt(action.postBodyParamName.substr(action.postBodyParamName.lastIndexOf(':')).replace(/\D/g, ''), 10);
        const newStatePropertyToRemove = traversePostBodyData(itemToRemove, newState.postBodyData);

        newStatePropertyToRemove.splice(indexToRemove, 1);
        newState.curl = buildCurl(newState.isAuthenticated, newState);

        return newState;
    case actionTypes.TOGGLE_SHOW_EXCLUDED_POST_BODY_PROPS:
        newState.showExcludedPostBodyFields = !newState.showExcludedPostBodyFields;
        newState.postBodyData = buildInitialPostBodyData(newState.postBody, newState.showExcludedPostBodyFields);
        return newState;
    default:
        return state;
    }

    return newState;
};

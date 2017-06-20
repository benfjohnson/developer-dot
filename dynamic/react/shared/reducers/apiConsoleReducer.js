import queryStringReducer from './queryStringReducer';
import actionTypes from '../../shared/actionTypes';
import {buildQueryString, reduceParamsToKeyValuePair, buildCurl, fillOrRemoveSampleData, buildInitialPostBodyData} from '../helpers';

// Method traverses a `requestSchema` endpoint property by colon-separated name and returns the
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
    let parent;
    let param;

    const val = pathArray.reduce((accum, paramName) => {
        if (paramName.indexOf('[') !== -1) {
            const index = parseInt(paramName.slice(paramName.indexOf('[') + 1, paramName.indexOf(']')), 10);

            if (accum === undefined) {
                /* eslint-disable no-param-reassign */
                accum = parent[param] = [];
                /* eslint-enable no-param-reassign */
            }
            parent = accum;
            param = index;
            return accum[index];
        }

        if (accum === undefined) {
            /* eslint-disable no-param-reassign */
            accum = parent[param] = {};
            /* eslint-enable no-param-reassign */
        }
        parent = accum;
        param = paramName;
        return accum[paramName];
    }, state);

    return (val) ? {val} : {val: parent, param, failed: true};
};

// Stricter parse float, also doesn't match if a value ends with .0+ (otherwise parseFloat will strip the zero which we want to keep)
const parseFloatStrict = (value) => {
    if (/^\-?[0-9]+(\.[0-9]*[^0]+)?$/.test(value)) {
        return parseFloat(value);
    }
    return NaN;
};

const updateDataAtProperty = (propertyPath, newVal, postBody) => {
    if (propertyPath === '') {
        return;
    }
    const pathArray = propertyPath.split(':');

    let nestedObj = postBody;

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

            if (nestedObj[index] === undefined) {
                nestedObj[index] = [];
            }
            nestedObj = nestedObj[index];
        } else {
            if (nestedObj[nestedParam] === undefined) {
                nestedObj[nestedParam] = {};
            }
            nestedObj = nestedObj[nestedParam];
        }
    });

    nestedObj = newVal;
};

export {
    traversePropertyPath,
    traversePostBodyData,
    parseFloatStrict,
    updateDataAtProperty
};

export default (state, action) => {
    let newState = {...state};

    switch (action.type) {
    case actionTypes.RESET_CONSOLE:
        newState = fillOrRemoveSampleData(newState, true);
        newState.qsPath = buildQueryString(reduceParamsToKeyValuePair(newState.queryString));
        newState.curl = buildCurl(newState.sampleAuthHeader, newState);
        newState.apiResponse = undefined;
        break;
    case actionTypes.SUBMIT_DONE:
        newState.apiResponse = action.apiResponse;
        if (action.error) {
            newState.error = action.error;
        }
        break;
    case actionTypes.FILL_REQUEST_SAMPLE_DATA:
        newState = fillOrRemoveSampleData(newState);
        newState.qsPath = buildQueryString(reduceParamsToKeyValuePair(newState.queryString));
        newState.curl = buildCurl(newState.sampleAuthHeader, newState);
        break;
    case actionTypes.QUERY_STRING_CHANGED:
        newState = {...newState, queryString: queryStringReducer(newState.queryString, action)};
        newState.qsPath = buildQueryString(reduceParamsToKeyValuePair(newState.queryString));
        newState.curl = buildCurl(newState.sampleAuthHeader, newState);
        break;
    case actionTypes.PATH_PARAM_CHANGED:
        newState.pathParams[action.paramName].value = action.newValue;
        newState.curl = buildCurl(newState.sampleAuthHeader, newState);
        break;
    case actionTypes.POST_BODY_CHANGED:
        // If any changed PostBodyForm input was an array item, need to access its `items`
        // schema to determine its fieldType. With that in hand, we can directly update it at its index in our postBody
        const accessorName = action.postBodyParamName.replace(/\[\d+\]/g, 'items');

        const newStateProperty = traversePropertyPath(accessorName, newState.requestSchema);
        let castedValue;

        if (action.newValue === '') {
            castedValue = undefined;
        } else {
            castedValue = newStateProperty.fieldType === 'number' ? (parseFloatStrict(action.newValue) || action.newValue) : action.newValue;
        }

        updateDataAtProperty(action.postBodyParamName, castedValue, newState.postBody);
        break;
    case actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION:
        const newArrObj = buildInitialPostBodyData(action.itemSchema, newState.showExcludedPostBodyFields);
        const {val, param, failed} = traversePostBodyData(action.postBodyParamName, newState.postBody);

        if (failed) {
            val[param] = [];
            val[param].push(newArrObj);
        } else {
            val.push(newArrObj);
        }
        break;
    case actionTypes.REMOVE_ITEM_FROM_POST_BODY_COLLECTION:
        const itemToRemove = action.postBodyParamName.substr(0, action.postBodyParamName.lastIndexOf(':'));
        const indexToRemove = parseInt(action.postBodyParamName.substr(action.postBodyParamName.lastIndexOf(':')).replace(/\D/g, ''), 10);
        const newStatePropertyToRemove = traversePostBodyData(itemToRemove, newState.postBody).val;

        newStatePropertyToRemove.splice(indexToRemove, 1);
        newState.curl = buildCurl(newState.sampleAuthHeader, newState);

        break;
    case actionTypes.TOGGLE_SHOW_EXCLUDED_POST_BODY_PROPS:
        newState.showExcludedPostBodyFields = !newState.showExcludedPostBodyFields;
        newState.postBody = buildInitialPostBodyData(newState.requestSchema, newState.showExcludedPostBodyFields);
        break;
    default:
    }

    return newState;
};

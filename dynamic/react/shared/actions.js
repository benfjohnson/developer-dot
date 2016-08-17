import actionTypes from './actionTypes';

export default {
    submitConsoleRequest: (endpointId, responseBody, response, error) => {
        return {
            type: actionTypes.SUBMIT_DONE,
            endpointId: endpointId,
            apiResponse: {
                body: responseBody,
                status: response ? response.statusCode.toString() : '',
                statusMessage: error ? error.message : response.statusMessage || ''
            }
        };
    },
    queryParamChanged: (newValue, paramName, endpointId) => {
        return {
            type: actionTypes.QUERY_STRING_CHANGED,
            newValue: newValue,
            paramName: paramName,
            endpointId: endpointId
        };
    },
    pathParamChanged: (newValue, paramName, endpointId) => {
        return {
            type: actionTypes.PATH_PARAM_CHANGED,
            newValue: newValue,
            paramName: paramName,
            endpointId: endpointId
        };
    },
    postBodyInputChanged: (endpointId, paramName, newValue) => {
        return {
            type: actionTypes.POST_BODY_CHANGED,
            newValue: newValue,
            postBodyParamName: paramName,
            endpointId: endpointId
        };
    },
    addItemToPostbodyCollection: (paramName, endpointId, itemSchema) => {
        return {
            type: actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION,
            postBodyParamName: paramName,
            endpointId: endpointId,
            itemSchema: itemSchema
        };
    },
    removePostbodyCollectionItem: (paramName, endpointId) => {
        return {
            type: actionTypes.REMOVE_ITEM_FROM_POST_BODY_COLLECTION,
            postBodyParamName: paramName,
            endpointId: endpointId
        };
    },
    fillConsoleSampleData: (endpointId) => {
        return {
            type: actionTypes.FILL_REQUEST_SAMPLE_DATA,
            endpointId: endpointId
        };
    },
    updateAuthKey: (keyName, e) => {
        return {
            type: actionTypes.AUTH_KEY_CHANGED,
            inputVal: e.target.value,
            keyName: keyName
        };
    },
    resetConsole: (endpointId) => {
        return {
            type: actionTypes.RESET_CONSOLE,
            endpointId: endpointId
        };
    },
    toggleShowExcludedPostBodyProps: (endpointId) => {
        return {
            type: actionTypes.TOGGLE_SHOW_EXCLUDED_POST_BODY_PROPS,
            endpointId: endpointId
        };
    }
};

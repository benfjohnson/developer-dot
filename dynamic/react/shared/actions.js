import actionTypes from './actionTypes';

export default {
    accessTokenExpiration: () => {
        return {
            type: actionTypes.ACCESS_TOKEN_EXPIRATION
        };
    },
    submitConsoleRequest: (endpointId, responseBody, status, statusMessage) => {
        return {
            type: actionTypes.SUBMIT_DONE,
            endpointId: endpointId,
            apiResponse: {
                body: responseBody,
                status: status,
                statusMessage: statusMessage
            }
        };
    },
    consoleLoadingAnimation: (endpointId) => {
        return {
            type: actionTypes.SUBMIT_STARTED,
            endpointId: endpointId
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
    requestChanged: (endpointId, newValue) => {
        return {
            type: actionTypes.REQUEST_CHANGED,
            endpointId: endpointId,
            newValue: newValue
        };
    },
    consoleToggledReadOnly: (endpointId) => {
        return {
            type: actionTypes.CONSOLE_TOGGLED_READ_ONLY,
            endpointId: endpointId
        };
    },
    consoleToggledFreeEdit: (endpointId) => {
        return {
            type: actionTypes.CONSOLE_TOGGLED_FREE_EDIT,
            endpointId: endpointId
        };
    },
    consoleError: (endpointId) => {
        return {
            type: actionTypes.CONSOLE_ERROR,
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
    toggleAiForRequest: () => {
        return {
            type: actionTypes.TOGGLE_AI_CREDS_FOR_CONSOLE_REQUEST
        };
    },
    toggleShowExcludedPostBodyProps: (endpointId) => {
        return {
            type: actionTypes.TOGGLE_SHOW_EXCLUDED_POST_BODY_PROPS,
            endpointId: endpointId
        };
    }
};

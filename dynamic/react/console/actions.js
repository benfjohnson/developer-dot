export default {
    SUBMIT_DONE: 'SUBMIT_DONE',
    submitConsoleRequest: (endpointId, responseBody, response, error) => {
        return {
            type: 'SUBMIT_DONE',
            endpointId: endpointId,
            apiResponse: {
                body: responseBody,
                status: response ? response.statusCode.toString() : '',
                statusMessage: error ? error.message : response.statusMessage || ''
            }
        };
    },
    QUERY_PARAM_CHANGED: 'QUERY_STRING_CHANGED',
    queryParamChanged: (newValue, paramName, endpointId) => {
        return {
            type: 'QUERY_STRING_CHANGED',
            newValue: newValue,
            paramName: paramName,
            endpointId: endpointId
        };
    },
    PATH_PARAM_CHANGED: 'PATH_PARAM_CHANGED',
    pathParamChanged: (newValue, paramName, endpointId) => {
        return {
            type: 'PATH_PARAM_CHANGED',
            newValue: newValue,
            paramName: paramName,
            endpointId: endpointId
        };
    },
    POST_BODY_CHANGED: 'POST_BODY_CHANGED',
    postBodyInputChanged: (endpointId, paramName, newValue) => {
        return {
            type: 'POST_BODY_CHANGED',
            newValue: newValue,
            postBodyParamName: paramName,
            endpointId: endpointId
        };
    },
    ADD_ITEM_TO_POST_BODY_COLLECTION: 'ADD_ITEM_TO_POST_BODY_COLLECTION',
    addItemToPostbodyCollection: (paramName, endpointId, itemSchema) => {
        return {
            type: 'ADD_ITEM_TO_POST_BODY_COLLECTION',
            postBodyParamName: paramName,
            endpointId: endpointId,
            itemSchema: itemSchema
        };
    },
    REMOVE_ITEM_FROM_POST_BODY_COLLECTION: 'REMOVE_ITEM_FROM_POST_BODY_COLLECTION',
    removePostbodyCollectionItem: (paramName, endpointId) => {
        return {
            type: 'REMOVE_ITEM_FROM_POST_BODY_COLLECTION',
            postBodyParamName: paramName,
            endpointId: endpointId
        };
    },
    FILL_REQUEST_SAMPLE_DATA: 'FILL_REQUEST_SAMPLE_DATA',
    fillConsoleSampleData: (endpointId) => {
        return {
            type: 'FILL_REQUEST_SAMPLE_DATA',
            endpointId: endpointId
        };
    },
    APP_LOADED: 'APP_LOADED',
    updateAuthKey: (keyName, e) => {
        return {
            type: 'AUTH_KEY_CHANGED',
            inputVal: e.target.value,
            keyName: keyName
        };
    },
    AUTH_KEY_CHANGED: 'AUTH_KEY_CHANGED',
    TOGGLE_DOCUMENTATION_ITEM_VISIBILITY: 'TOGGLE_DOCUMENTATION_ITEM_VISIBILITY',
    toggleDocumentationSectionVisibility: (documentationFor, propertyName, endpointId) => {
        return {
            type: 'TOGGLE_DOCUMENTATION_ITEM_VISIBILITY',
            documentationFor: documentationFor,
            postBodyParamName: propertyName,
            endpointId: endpointId
        };
    },
    CONSOLE_VISIBILITY_TOGGLED: 'CONSOLE_VISIBILITY_TOGGLED',
    toggleApiConsoleVisibility: (endpointId) => {
        return {
            type: 'CONSOLE_VISIBILITY_TOGGLED',
            endpointId: endpointId
        };
    },
    JUMP_TO_CONSOLE: 'JUMP_TO_CONSOLE',
    jumpToConsole: (endpointId) => {
        return {
            type: 'JUMP_TO_CONSOLE',
            endpointId: endpointId
        };
    },
    RESET_CONSOLE: 'RESET_CONSOLE',
    resetConsole: (endpointId) => {
        return {
            type: 'RESET_CONSOLE',
            endpointId: endpointId
        };
    }
};

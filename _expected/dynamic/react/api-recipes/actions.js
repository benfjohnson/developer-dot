export const actionTypes = {
    INPUT_CHANGED: 'INPUT_CHANGED',
    SUBMIT_REQUEST: 'SUBMIT_REQUEST'
};

export const actions = {
    inputChange: (recipeId, inputName, requestBody, newValue) => {
        return {
            type: actionTypes.INPUT_CHANGED,
            recipeId: recipeId,
            inputName: inputName,
            requestBody: requestBody,
            newValue: newValue
        };
    },
    submitRequest: (recipeId, responseBody, status, statusMessage) => {
        return {
            type: actionTypes.SUBMIT_REQUEST,
            recipeId: recipeId,
            apiResponse: {
                body: responseBody,
                status: status,
                statusMessage: statusMessage
            }
        };
    }
};

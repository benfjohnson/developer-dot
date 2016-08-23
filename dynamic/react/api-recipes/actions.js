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
    submitRequest: (recipeId, responseBody, response, error) => {
        return {
            type: actionTypes.SUBMIT_REQUEST,
            recipeId: recipeId,
            apiResponse: {
                body: responseBody,
                status: response ? response.statusCode.toString() : '',
                statusMessage: error ? error.message : response.statusMessage || ''
            }
        };
    }
};

import R from 'ramda';
import endpointReducer from './endpointReducer';

const actionTypes = {
    FETCH_API_DATA_DONE: 'FETCH_API_DATA_DONE',
    SUBMIT_DONE: 'SUBMIT_DONE',
    QUERY_PARAM_CHANGED: 'QUERY_STRING_CHANGED',
    PATH_PARAM_CHANGED: 'PATH_PARAM_CHANGED',
    POST_BODY_CHANGED: 'POST_BODY_CHANGED',
    TOGGLE_POST_BODY_ITEM_VISIBILITY: 'TOGGLE_POST_BODY_ITEM_VISIBILITY',
    ADD_ITEM_TO_POST_BODY_COLLECTION: 'ADD_ITEM_TO_POST_BODY_COLLECTION',
    REMOVE_ITEM_FROM_POST_BODY_COLLECTION: 'REMOVE_ITEM_FROM_POST_BODY_COLLECTION',
    FILL_REQUEST_SAMPLE_DATA: 'FILL_REQUEST_SAMPLE_DATA',
    TOGGLE_RESPONSE_MODEL_EXAMPLE: 'TOGGLE_RESPONSE_MODEL_EXAMPLE',
    TOGGLE_REQUEST_MODEL_EXAMPLE: 'TOGGLE_REQUEST_MODEL_EXAMPLE',
    APP_LOADED: 'APP_LOADED',
    AUTH_KEY_CHANGED: 'AUTH_KEY_CHANGED'
};

const reducer = (state = {}, action) => {
    const newState = R.clone(state);

    switch (action.type) {
    case actionTypes.APP_LOADED:
        return {...newState, appLoaded: true};
    case actionTypes.AUTH_KEY_CHANGED:
        // Update auth header for each request in pmCollection:
        newState.postmanCollection.auth.params[action.keyName] = action.inputVal;

        const authHeaderWithoutPlaceholders = Object.keys(newState.postmanCollection.auth.params).reduce((newFormula, param) => newFormula.replace(`<${param}>`, newState.postmanCollection.auth.params[param]), newState.postmanCollection.auth.formula);
        /* eslint-disable no-eval */
        const authHeader = eval(authHeaderWithoutPlaceholders);
        /* eslint-enable no-eval */

        newState.postmanCollection.collection.item = newState.postmanCollection.collection.item.map((req) => {
            return {
                ...req,
                request: {...(req.request), header: req.request.header.filter((h) => h.key !== 'Authorization').concat({
                    key: 'Authorization',
                    value: authHeader
                })}
            };
        });

        return newState;
    case actionTypes.FETCH_API_DATA_DONE:
        newState.apiInfo = action.apiInfo;
        if (action.error) {
            newState.error = action.error;
        }
        break;
    case actionTypes.SUBMIT_DONE:
    case actionTypes.POST_BODY_CHANGED:
    case actionTypes.QUERY_PARAM_CHANGED:
    case actionTypes.PATH_PARAM_CHANGED:
    case actionTypes.TOGGLE_POST_BODY_ITEM_VISIBILITY:
    case actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION:
    case actionTypes.REMOVE_ITEM_FROM_POST_BODY_COLLECTION:
    case actionTypes.FILL_REQUEST_SAMPLE_DATA:
    case actionTypes.TOGGLE_RESPONSE_MODEL_EXAMPLE:
    case actionTypes.TOGGLE_REQUEST_MODEL_EXAMPLE:
        const endpoint = state.apiInfo[action.endpointId];

        newState.apiInfo[action.endpointId] = endpointReducer(endpoint, action);
        break;

    default:
        break;
    }

    return newState;
};

export {actionTypes, reducer};

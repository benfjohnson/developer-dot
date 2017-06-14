import apiConsoleReducer from '../../shared/reducers/apiConsoleReducer';
import actionTypes from '../../shared/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
    case actionTypes.APP_LOADED:
        return {...state, appLoaded: true};
    case actionTypes.AUTH_KEY_CHANGED:
        // Update auth header for each request in pmCollection:
        const params = {...state.auth.params, [action.keyName]: action.inputVal};
        const auth = {...state.auth, params: params};

        const authHeaderWithoutPlaceholders = Object.keys(params).reduce((newFormula, param) => newFormula.replace(`<${param}>`, params[param]), state.auth.formula);
        let authHeader = 'test';

        if (process.env.NODE_ENV !== 'test') {
            /* eslint-disable no-eval */
            authHeader = eval(authHeaderWithoutPlaceholders);
            /* eslint-enable no-eval */
        }

        state.postmanCollection.item = state.postmanCollection.item.map((req) => {
            return {
                ...req,
                request: {
                    ...(req.request), header: req.request.header.filter((h) => h.key !== 'Authorization').concat({
                        key: 'Authorization',
                        value: authHeader
                    })
                }
            };
        });
        return {...state, auth: auth};
    case actionTypes.RESET_CONSOLE:
    case actionTypes.SUBMIT_DONE:
    case actionTypes.FILL_REQUEST_SAMPLE_DATA:
    case actionTypes.QUERY_STRING_CHANGED:
    case actionTypes.PATH_PARAM_CHANGED:
    case actionTypes.POST_BODY_CHANGED:
    case actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION:
    case actionTypes.REMOVE_ITEM_FROM_POST_BODY_COLLECTION:
    case actionTypes.TOGGLE_SHOW_EXCLUDED_POST_BODY_PROPS:
        const newApiEndpoint = apiConsoleReducer(state.apiEndpoint, action);

        return {...state, apiEndpoint: newApiEndpoint};
    default:
        return state;
    }
};

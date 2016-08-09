import endpointReducer from './endpointReducer';
import actionTypes from '../../shared/actionTypes';

const reducer = (state = {}, action) => {
    switch (action.type) {
    case actionTypes.APP_LOADED:
        return {...state, appLoaded: true};
    case actionTypes.AUTH_KEY_CHANGED:
        // Update auth header for each request in pmCollection:
        const params = {...state.auth.params, [action.keyName]: action.inputVal};
        const auth = {...state.auth, params: params};

        const authHeaderWithoutPlaceholders = Object.keys(params).reduce((newFormula, param) => newFormula.replace(`<${param}>`, params[param]), state.auth.formula);
        /* eslint-disable no-eval */
        const authHeader = eval(authHeaderWithoutPlaceholders);
        /* eslint-enable no-eval */

        state.postmanCollection.item = state.postmanCollection.item.map((req) => {
            return {
                ...req,
                request: {...(req.request), header: req.request.header.filter((h) => h.key !== 'Authorization').concat({
                    key: 'Authorization',
                    value: authHeader
                })}
            };
        });

        return {...state, auth: auth};
    case actionTypes.SUBMIT_DONE:
    case actionTypes.POST_BODY_CHANGED:
    case actionTypes.QUERY_STRING_CHANGED:
    case actionTypes.PATH_PARAM_CHANGED:
    case actionTypes.ADD_ITEM_TO_POST_BODY_COLLECTION:
    case actionTypes.REMOVE_ITEM_FROM_POST_BODY_COLLECTION:
    case actionTypes.FILL_REQUEST_SAMPLE_DATA:
    case actionTypes.TOGGLE_DOCUMENTATION_ITEM_VISIBILITY:
    case actionTypes.CONSOLE_VISIBILITY_TOGGLED:
    case actionTypes.JUMP_TO_CONSOLE:
    case actionTypes.RESET_CONSOLE:
        return {...state, apiEndpoints: state.apiEndpoints.map((endpoint, i) => {
            if (i === action.endpointId) {
                return endpointReducer(endpoint, action);
            }
            return endpoint;
        })};
    default:
        return state;
    }
};

export {reducer};

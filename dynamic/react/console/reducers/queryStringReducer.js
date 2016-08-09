import {actionTypes} from './reducer';

export default (state, action) => {
    switch (action.type) {
    case actionTypes.QUERY_PARAM_CHANGED:
        const queryParam = {...(state[action.paramName])};
        const updatedQueryParam = {...queryParam, value: action.newValue};

        return {...state, [action.paramName]: updatedQueryParam};
    default:
        return state;
    }
};

import {actionTypes} from './reducer';

export default (state, action) => {
    switch (action.type) {
    case actionTypes.QUERY_STRING_CHANGED:
        const queryParam = {...(state[action.queryParamName])};
        const updatedQueryParam = {...queryParam, value: action.inputVal};

        return {...state, [action.queryParamName]: updatedQueryParam};
    default:
        return state;
    }
};

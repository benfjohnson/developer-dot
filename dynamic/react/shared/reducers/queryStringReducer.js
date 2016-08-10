import actionTypes from '../../shared/actionTypes';

export default (state, action) => {
    switch (action.type) {
    case actionTypes.QUERY_STRING_CHANGED:
        const queryParam = {...(state[action.paramName])};
        const updatedQueryParam = {...queryParam, value: action.newValue};

        return {...state, [action.paramName]: updatedQueryParam};
    default:
        return state;
    }
};

import {actionTypes} from './reducer';

export default (state, action) => {
    switch (action.type) {
    case actionTypes.POST_BODY_CHANGED:
        action.postBodyParamName.split(';').reduce((accum, paramName) => accum[paramName], state).value = action.inputVal;

        return state;
    default:
        return state;
    }
};

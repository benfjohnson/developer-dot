import {actionTypes} from './reducer';

export default (state, action) => {
    switch (action.type) {
    case actionTypes.POST_BODY_CHANGED:
        const postBodyParam = {...(state[action.postBodyParamName])};
        const updatedPostBodyParam = {...postBodyParam, value: action.inputVal};

        return {...state, [action.postBodyParamName]: updatedPostBodyParam};
    default:
        return state;
    }
};

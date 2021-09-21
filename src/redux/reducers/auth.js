import ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    isAuthenticated: false,
    user: {},
    error: {}
}

export default (state = INITIAL_STATE, action) => {
    console.log(action.payload, '00000000000');
    switch (action.type) {
        case ActionTypes.signin:
            return ({
                ...state,
                user: action.payload,
                isAuthenticated: true,
            });
        case ActionTypes.logout:
            return({
                ...state,
                isAuthenticated: false
        })
        case ActionTypes.signup:
            return ({
                ...state,
                user: action.payload.user
            });
        case ActionTypes.recoverpass:
            return ({
                ...state,
                user: action.payload.user
            });
        default:
            return state;
    }

}
import ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    miniActive: false,
    users: [],
    projects: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.miniActive:
            return ({
                ...state,
                miniActive: action.payload
            });
        default:
            return state;
    }

}
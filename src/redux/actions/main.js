import ActionTypes from './actionTypes';

export function MiniActive(active) {
    return dispatch => dispatch({type: ActionTypes.miniActive, payload: active})
  }

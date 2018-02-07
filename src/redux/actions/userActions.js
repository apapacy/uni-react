/* eslint-disable no-unused-vars */
import {
LOGIN_REQUEST,
LOGIN_FAIL,
LOGIN_SUCCESS,
LOGOUT_SUCCESS
} from '../constants/userConstants';


export function login(payload) {
  return {
    promised: () => new Promise(function(resolve, reject){
      setTimeout(() => resolve({name:'John'}), 8000);
    }),
    types: [ LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL ]
  }
}


export function login0(payload) {
  return  (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST
    });
    setTimeout(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          name: payload.name,
          isAuthenticated: true
        }
      });
    }, 2000);
  };
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS
  };
}
/* eslint-enable no-unused-vars */

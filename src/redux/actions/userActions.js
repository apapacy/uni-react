import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from '../constants/userConstants';

function promise({ name, userAgent, }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({ name, userAgent, }), 500);
    setTimeout(() => reject({ name: 'Luka', }), 1000);
  });
}

export function login({ name, userAgent, }) {
  return (dispatch) => {
    dispatch({ type: LOGIN_REQUEST, });
    return promise({ name, userAgent, }).then(
      payload =>  dispatch({
        type: LOGIN_SUCCESS,
        payload,
      }),
      error => dispatch({
        type: LOGIN_FAIL,
        error,
      })
    );
  };
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

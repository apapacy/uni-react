/* eslint-disable no-unused-vars */
import {
LOGIN_REQUEST,
LOGIN_FAIL,
LOGIN_SUCCESS,
LOGOUT_SUCCESS
} from '../constants/userConstants';

function promise({name, userAgent}) {
  return new Promise(function(resolve, reject){
    setTimeout(() => resolve({name, userAgent}), 500);
    setTimeout(() => reject({name:'Luka'}), 1000);
  });
}

export const login = ({name, userAgent}) => (dispatch) => {
  dispatch({type: LOGIN_REQUEST});
  return promise({name, userAgent}).then(
    payload =>  dispatch({
      type: LOGIN_SUCCESS,
      payload
    }),
    error => dispatch({
      type: LOGIN_FAIL,
      error
    })
  );
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS
  };
}
/* eslint-enable no-unused-vars */

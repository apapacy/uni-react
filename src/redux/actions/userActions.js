/* eslint-disable no-unused-vars */
import {
LOGIN_REQUEST,
LOGIN_FAIL,
LOGIN_SUCCESS,
LOGOUT_SUCCESS
} from '../constants/userConstants';


export function login({name, userAgent}) {
  return {
    promised: () => new Promise(function(resolve, reject){
      setTimeout(() => resolve({name, userAgent}), 500);
      setTimeout(() => reject({name:'Luka'}), 1000);
    }),
    types: [ LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL ]
  }
}

export function logout() {
  return {
    type: LOGOUT_SUCCESS
  };
}
/* eslint-enable no-unused-vars */

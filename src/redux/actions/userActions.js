import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_FAILURE,
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
} from '../constants/userConstants';


export function users() {
  return dispatch => {
    dispatch({ type: USERS_REQUEST});
    return axios({
      method: 'get',
      baseURL: 'http://localhost:3000/api/',
      url: 'users',
      withCredentials: true,
    }).then(
      data => dispatch({ type: USERS_SUCCESS, payload: data.data }),
      error => dispacth({ type: USERS_FAILURE, error: error })
    );
  }
}

export function user({ id }) {
  return dispatch => {
    dispatch({ type: USER_REQUEST});
    return axios({
      method: 'get',
      baseURL: 'http://localhost:3000/api/',
      url: `users/${id}`,
      withCredentials: true,
    }).then(
      data => dispatch({ type: USER_SUCCESS, payload: data.data }),
      error => dispacth({ type: USER_FAILURE, error: error })
    );
  }
}


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

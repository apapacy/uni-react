import axios from 'axios';
import {
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_FAILURE,
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILURE,
} from '../constants/userConstants';


export function users() {
  return dispatch => {
    dispatch({ type: USERS_REQUEST, });
    return axios({
      method: 'get',
      baseURL: 'http://localhost:3000/api/',
      url: 'users',
      withCredentials: true,
    }).then(
      data => dispatch({ type: USERS_SUCCESS, payload: data.data, }),
      error => dispatch({ type: USERS_FAILURE, error, })
    );
  };
}

export function user({ id, }) {
  return dispatch => {
    dispatch({ type: USER_REQUEST, });
    return axios({
      method: 'get',
      baseURL: 'http://localhost:3000/api/',
      url: `users/${id}`,
      withCredentials: true,
    }).then(
      data => dispatch({ type: USER_SUCCESS, payload: data.data, }),
      error => dispatch({ type: USER_FAILURE, error, })
    );
  };
}

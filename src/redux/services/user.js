import {request} from '../agent';

const LOGIN_REQUEST = Symbol('LOGIN_REQUEST');
const LOGIN_SUCCESS = Symbol('LOGIN_SUCCESS');
const LOGIN_FAILURE = Symbol('LOGIN_FAILURE');

const initialState = void 0;

export function userReduser(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    default:
      return state;
  }
}

export function login({ req, email, password}) {
  console.log('agent', request)
  return dispatch => {
    dispatch({ type: LOGIN_REQUEST, });
    return request(req, {
      method: 'post',
      url: '/users/login',
      data: {user: {email, password}},
      withCredentials: true,
    }).then(
      data => dispatch({ type: LOGIN_SUCCESS, payload: data.data, }),
      error => dispatch({ type: LOGIN_FAILURE, error, })
    );
  };
}

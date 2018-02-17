import {request, setJWT} from '../agent';

const LOGIN_REQUEST = Symbol('LOGIN_REQUEST');
const LOGIN_SUCCESS = Symbol('LOGIN_SUCCESS');
const LOGIN_FAILURE = Symbol('LOGIN_FAILURE');
const USER_REQUEST = Symbol('USER_REQUEST');
const USER_SUCCESS = Symbol('USER_SUCCESS');
const USER_FAILURE = Symbol('USER_FAILURE');



const initialState = {};

export default function userReduser(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...action.payload.user };
    case LOGIN_FAILURE:
      return { error: action.error, failure: true };
    case USER_SUCCESS:
      return { ...action.payload.user };
    case USER_FAILURE:
        return { error: action.error, failure: true };
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
      data => {
        setJWT(data.data.user.token);
        return dispatch({ type: LOGIN_SUCCESS, payload: data.data, })
      },
      error => {
        setJWT(void 0);
        return dispatch({ type: LOGIN_FAILURE, error: error.response.data, })
      }
    );
  };
}

export function me() {
  return dispatch => {
    dispatch({ type: USER_REQUEST, });
    return request(void 0, {
      method: 'get',
      url: '/user',
      withCredentials: true,
    }).then(
      data => {
        return dispatch({ type: USER_SUCCESS, payload: data.data, })
      },
      error => {
        return dispatch({ type: USER_FAILURE, error: error.response.data, })
      }
    );
  };
}

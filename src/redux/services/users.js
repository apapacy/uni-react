import axios from 'axios';

const USERS_REQUEST = Symbol('USERS_REQUEST');
const USERS_SUCCESS = Symbol('USERS_SUCCESS');
const USERS_FAILURE = Symbol('USERS_FAILURE');
const USER_REQUEST = Symbol('USER_REQUEST');
const USER_SUCCESS = Symbol('USER_SUCCESS');
const USER_FAILURE = Symbol('USER_FAILURE');

const initialState = { count: 0 };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USERS_REQUEST:
      return state;
    case USERS_SUCCESS:
      return { ...state, users: action.payload };
    case USERS_FAILURE:
      return { ...state, users: undefined };
    case USER_REQUEST:
      return state;
    case USER_SUCCESS:
      return { ...state, user: action.payload };
    case USER_FAILURE:
      return { ...state, user: undefined };
    default:
      return state;
  }
}

export function usersAction() {
  return (dispatch) => {
    dispatch({ type: USERS_REQUEST });
    return axios({
      method: 'get',
      baseURL: 'http://localhost:3000/api/',
      url: 'users',
      withCredentials: true,
    }).then(
      data => dispatch({ type: USERS_SUCCESS, payload: data.data }),
      error => dispatch({ type: USERS_FAILURE, error }),
    );
  };
}

export function userAction({ id }) {
  return (dispatch) => {
    dispatch({ type: USER_REQUEST });
    return axios({
      method: 'get',
      baseURL: 'http://localhost:3000/api/',
      url: `users/${id}`,
      withCredentials: true,
    }).then(
      data => dispatch({ type: USER_SUCCESS, payload: data.data }),
      error => dispatch({ type: USER_FAILURE, error }),
    );
  };
}

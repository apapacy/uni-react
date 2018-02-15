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

const initialState = {
  count: 0,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        userAgent: action.payload.userAgent,
        isAuthenticated: true,
        count: state.count + 1,
      };
    case LOGIN_FAIL:
      return { ...initialState, };
    case LOGOUT_SUCCESS:
      return { ...initialState, };
    case USERS_REQUEST:
      return state;
    case USERS_SUCCESS:
      return { ...state, users: action.payload };
    case USERS_FAILURE:
      return { ...state, users: void(0) };
    case USER_REQUEST:
      return state;
    case USER_SUCCESS:
      return { ...state, user: action.payload };
    case USER_FAILURE:
      return { ...state, user: void(0) };
    default:
      return state;
  }
}

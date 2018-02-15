import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_FAILURE,
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
      return { ...state, users: action.payload, test: '**********************', rest: '===================', best: '777777777777777' };
    case USERS_FAILURE:
      return { ...state, users: void(0) };
    default:
      return state;
  }
}

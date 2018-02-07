import {
 LOGIN_REQUEST,
 LOGIN_FAIL,
 LOGIN_SUCCESS,
 LOGOUT_SUCCESS
} from '../constants/userConstants';

const initialState = {};

export default function userReducer(state = initialState, action) {
  console.log('****************', action.type)
  switch (action.type) {
    case LOGIN_REQUEST:
      return {};
    case LOGIN_SUCCESS:
      return {
        ...state, name: action.payload.name, isAuthenticated: true
      };
    case LOGIN_FAIL:
      return {};
    case LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
}

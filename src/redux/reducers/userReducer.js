import {
 LOGIN_REQUEST,
 LOGIN_FAIL,
 LOGIN_SUCCESS,
 LOGOUT_SUCCESS
} from '../constants/userConstants';

const initialState = {
  count: 0
};

export default function userReducer(state = initialState, action) {
  console.log('*** state  ***', state)
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        userAgent: action.payload.userAgent,
        isAuthenticated: true,
        count: state.count + 1
      };
    case LOGIN_FAIL:
      return {...initialState};
    case LOGOUT_SUCCESS:
      return {...initialState};
    default:
      return state;
  }
}

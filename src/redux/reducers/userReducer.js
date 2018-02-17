import {
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
    case USERS_REQUEST:
      return state;
    case USERS_SUCCESS:
      return { ...state, users: action.payload, };
    case USERS_FAILURE:
      return { ...state, users: void 0, };
    case USER_REQUEST:
      return state;
    case USER_SUCCESS:
      return { ...state, ...action.payload.user, };
    case USER_FAILURE:
      return { ...state, user: void 0, };
    default:
      return state;
  }
}

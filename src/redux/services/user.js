export {request} from '../agent';
const LOGIN_REQUEST = new Symbol('LOGIN_REQUEST');
const LOGIN_SUCCESS = new Symbol('LOGIN_SUCCESS');
const LOGIN_FAILURE = new Symbol('LOGIN_FAILURE');

const initialState = void 0;

export function userReduser(stats = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return ()
  }
}

export function login({ req, email, password}) {
  return dispatch => {
    dispatch({ type: LOGIN_REQUEST, });
    return req({
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

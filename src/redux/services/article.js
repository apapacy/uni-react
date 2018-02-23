import { request } from '../agent';
import { parseError } from '../utils';

const ARTICLE_REQUEST = Symbol('ARTICLE_REQUEST');
const ARTICLE_SUCCESS = Symbol('ARTICLE_SUCCESS');
const ARTICLE_FAILURE = Symbol('ARTICLE_FAILURE');
const CLEAR_ERRORS = Symbol('ARTICLE_CLEAR_ERRORS');
const ARTICLE_COMMENTS_REQUEST = Symbol('ARTICLE_COMMENTS_REQUEST');
const ARTICLE_COMMENTS_SUCCESS = Symbol('ARTICLE_COMMENTS_SUCCESS');
const ARTICLE_COMMENTS_FAILURE = Symbol('ARTICLE_COMMENTS_FAIULURE');


const initialState = {
  author: {},
  comments: [],
};

export default function userReduser(state = initialState, action) {
  switch (action.type) {
    case ARTICLE_REQUEST:
      return { ...initialState };
    case ARTICLE_SUCCESS:
      return {
        ...action.payload.article,
      };
    case ARTICLE_FAILURE:
      return { ...initialState, error: action.error };
    case CLEAR_ERRORS: // eslint-disable-line no-case-declarations
      const { error, ...nextState } = state;
      // eslint-disable-line no-case-declarations, no-unused-vars
      return nextState; // eslint-disable-line no-case-declarations
    default:
      return state;
  }
}

export function article({ req, slug }) {
  return (dispatch) => {
    dispatch({ type: ARTICLE_REQUEST });
    return request(req, {
      method: 'get',
      url: `/articles/${slug}`,
    }).then(
      response => dispatch({
        type: ARTICLE_SUCCESS,
        payload: response.data,
      }),
      error => dispatch({ type: ARTICLES_FAILURE, error: parseError(error) }),
    );
  };
}

export function clearErrors() {
  return { type: CLEAR_ERRORS };
}

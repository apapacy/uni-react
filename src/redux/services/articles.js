import { request, } from '../agent';
import { parseError, } from '../utils';

const ARTICLES_REQUEST = Symbol('ARTICLES_REQUEST');
const ARTICLES_SUCCESS = Symbol('ARTICLES_SUCCESS');
const ARTICLES_FAILURE = Symbol('ARTICLES_FAILURE');
const CLEAR_ERRORS = Symbol('ARTICLES_CLEAR_ERRORS');

const GLOBAL_FEED_COUNT = 10;
const PERSONAL_FEED_COUNT = 5;

const initialState = {
  articles: [],
  articlesCount: 0,
};

export default function userReduser(state = initialState, action) {
  switch (action.type) {
    case ARTICLES_REQUEST:
      return { transition: true, };
    case ARTICLES_SUCCESS:
      return { ...action.payload, transition: false, };
    case ARTICLES_FAILURE:
      return { error: action.error, transition: false, };
    case CLEAR_ERRORS: // eslint-disable-line no-case-declarations
      const { error, ...nextState } = state; // eslint-disable-line no-case-declarations, no-unused-vars

      return nextState; // eslint-disable-line no-case-declarations
    default:
      return state;
  }
}

export function feed({ req, filter, author, page, }) {
  let limit;
  let offset;

  if (!filter || filter === 'feed') {
    limit = GLOBAL_FEED_COUNT;
  } else {
    limit = PERSONAL_FEED_COUNT;
  }
  if (!page) {
    offset = 0;
  } else {
    offset = (page - 1) * limit;
  }
  const params = { limit, offset, };

  if (author) {
    params.author = author;
  }
  return dispatch => {
    dispatch({ type: ARTICLES_REQUEST, });
    return request(req, {
      method: 'get',
      url: filter === 'feed' ? '/articles/feed' : '/articles',
      params,
      withCredentials: true,
    }).then(
      data => {
        return dispatch({ type: ARTICLES_SUCCESS, payload: data.data, });
      },
      error => {
        return dispatch({ type: ARTICLES_FAILURE, error: parseError(error), });
      }
    );
  };
}

export function clearErrors() {
  return { type: CLEAR_ERRORS, };
}

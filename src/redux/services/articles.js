import { request } from '../agent';
import { parseError } from '../utils';

const ARTICLES_REQUEST = Symbol('ARTICLES_REQUEST');
const ARTICLES_SUCCESS = Symbol('ARTICLES_SUCCESS');
const ARTICLES_FAILURE = Symbol('ARTICLES_FAILURE');
const CLEAR_ERRORS = Symbol('ARTICLES_CLEAR_ERRORS');
const ARTICLE_FAVORITE_REQUEST = Symbol('ARTICLE_FAVORITE_REQUEST');
const ARTICLE_FAVORITE_SUCCESS = Symbol('ARTICLE_FAVORITE_SUCCESS');
const ARTICLE_FAVORITE_FAILURE = Symbol('ARTICLE_FAVORITE_FAIULURE');

const GLOBAL_FEED_COUNT = 10;
const PERSONAL_FEED_COUNT = 5;

const initialState = {
  articles: [],
  articlesCount: 0,
  page: 1,
  pageLength: 0,
  filter: '',
};

export default function userReduser(state = initialState, action) {
  switch (action.type) {
    case ARTICLES_REQUEST:
      return { ...initialState };
    case ARTICLES_SUCCESS:
      return {
        ...action.payload,
        pageLength: action.pageLength,
        page: action.page,
        filter: action.filter,
      };
    case ARTICLES_FAILURE:
      return { ...initialState, error: action.error };
    case ARTICLE_FAVORITE_SUCCESS:
      return {
        ...state,
        articles: state.articles.map(article => (
          article.slug === action.payload.article.slug
            ? action.payload.article
            : article
        )),
      };
    case CLEAR_ERRORS: // eslint-disable-line no-case-declarations
      const { error, ...nextState } = state;
      // eslint-disable-line no-case-declarations, no-unused-vars
      return nextState; // eslint-disable-line no-case-declarations
    default:
      return state;
  }
}

export function feed({ req, filter, author, page }) {
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
  const params = { limit, offset };
  if (filter === 'author' || filter === 'favorited') {
    params[filter] = decodeURIComponent(author);
  }
  return (dispatch) => {
    dispatch({ type: ARTICLES_REQUEST });
    return request(req, {
      method: 'get',
      url: filter === 'feed' ? '/articles/feed' : '/articles',
      params,
    }).then(
      response => dispatch({
        type: ARTICLES_SUCCESS,
        payload: response.data,
        pageLength: limit,
        page: page || 1,
        filter,
      }),
      error => dispatch({ type: ARTICLES_FAILURE, error: parseError(error) }),
    );
  };
}

export function favorite({ slug, method }) {
  if (method !== 'post' && method !== 'delete') {
    return { type: ARTICLE_FAVORITE_FAILURE, error: { message: 'Only post or delete methos alowed' } };
  }
  return (dispatch) => {
    dispatch({ type: ARTICLE_FAVORITE_REQUEST });
    return request(undefined, {
      method,
      url: `/articles/${slug}/favorite`,
    }).then(
      response => dispatch({ type: ARTICLE_FAVORITE_SUCCESS, payload: response.data }),
      error => dispatch({ type: ARTICLE_FAVORITE_FAILURE, error: parseError(error) }),
    );
  };
}

export function clearErrors() {
  return { type: CLEAR_ERRORS };
}

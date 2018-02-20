import { combineReducers } from 'redux';
import user from '../services/user';
import articles from '../services/articles';

export default combineReducers({
  user,
  articles,
});

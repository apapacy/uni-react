import { combineReducers } from 'redux';
import user from '../services/user';
import articles from '../services/articles';
import profile from '../services/profile';

export default combineReducers({
  user,
  articles,
  profile,
});

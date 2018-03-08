import { combineReducers } from 'redux';
import user from '../services/users';
import hydrated from '../services/hydrated';


export default combineReducers({
  user,
  hydrated,
});

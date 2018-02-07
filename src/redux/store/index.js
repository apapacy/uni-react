import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promisedMiddleware from './promisedMiddleware';
import rootReducer from '../reducers';

export default function configureStore() {
  const store = compose(
     applyMiddleware(promisedMiddleware()),
     applyMiddleware(thunk),
     applyMiddleware(createLogger({})),
    )(createStore)(rootReducer);

  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('../reducers');

      store.replaceReducer(nextRootReducer);
    });
  }
  store.dispatchAsync = function dispatchAsync(action, ...rest) {
    console.log(action)
    if (!action.promised) {
      throw new Error('Use dispatchAsync for promised action only!');
    }
    store.dispatch(action);
    if (!action.promise) {
      throw new Error('Use dispatchAsync for promised action only!');
    }
    return action.promise;
  }
  return store;
}

import { createStore, applyMiddleware, compose, } from 'redux';
import thunk from 'redux-thunk';
import { createLogger, } from 'redux-logger';
import rootReducer from '../reducers';

export default function prepareStore(initialState) {
  const store = compose(
    applyMiddleware(thunk),
    applyMiddleware(createLogger({})),
  )(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = rootReducer;

      store.replaceReducer(nextRootReducer);
    });
  }

  store.dispatchAsync = function dispatchAsync(action) {
    if (!action.promised) {
      throw new Error('Use dispatchAsync for promised action only!');
    }
    store.dispatch(action);
    return action;
  };
  return store;
}

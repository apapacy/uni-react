import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore() {
  const store = compose(
     applyMiddleware(thunk),
     applyMiddleware(createLogger()),
    )(createStore)(rootReducer);

  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('../reducers');

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

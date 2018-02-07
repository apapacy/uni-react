import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './react/router';
import browserHistory from './clientHistory';
import { Router, Route, Switch, matchPath} from 'react-router-dom';
import { Provider } from 'react-redux'
import routes from './react/routes';
import { hydrate } from 'react-dom'
import createStore from './redux/store';
console.log(document.getElementById('app'))

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__
const store = createStore(preloadedState)
console.log('store', store)

hydrate(
  <Provider store={store}>
    <Router history={browserHistory}>
      <AppRouter />
    </Router>
  </Provider>,
  document.getElementById('app')
)

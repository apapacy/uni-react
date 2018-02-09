import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './react/clientRouter';
// import browserHistory from './clientHistory';
import { Router, Route, Switch, matchPath} from 'react-router-dom';
import { Provider } from 'react-redux'
import routes from './react/routes';
import { hydrate } from 'react-dom'
import createStore from './redux/store';
import { createBrowserHistory } from 'history';
export default createBrowserHistory();


const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__
const store = createStore(preloadedState)

hydrate(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <AppRouter />
    </Router>
  </Provider>,
  document.getElementById('app')
)

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './react/clientRouter';
// import browserHistory from './clientHistory';
import {BrowserRouter,  Route, Router, Switch, matchPath, applyRouterMiddleware} from 'react-router-dom';
//import {useTransitions, withTransition} from 'react-router-transitions';
import { Provider } from 'react-redux'
import routes from './react/routes';
import { hydrate, render } from 'react-dom'
import createStore from './redux/store';
import { createBrowserHistory } from 'history';
//import Router from './react/components/asyncRouter';


import Layout from './react/components/layout';
//import { AppContainer } from 'react-hot-loader'

console.log('********************', applyRouterMiddleware);

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__
const store = createStore(preloadedState)

const component = hydrate(
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
    <Layout>
        <AppRouter />
        </Layout>
    </Router>
  </Provider>,
  document.getElementById('app')
)

if (module.hot) {
  // module.hot.accept();
  module.hot.accept('./react/clientRouter', ()=> component.forceUpdate());
}

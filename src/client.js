'use strict'
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import Layout from './react/components/layout';
import AppRouter from './react/clientRouter';
import routes from './react/routes';
import createStore from './redux/store';
import {hydrated} from './redux/services/hydrated';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStore(preloadedState);

const component = hydrate(
  <Provider store={store}>
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);

setTimeout(() => store.dispatch(hydrated()), 1);

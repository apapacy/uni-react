import React from 'react';
import {
  Router,
  Route,
} from 'react-router';
import browserHistory from './clientHistory';

import Home from './react/home';

export default () => (
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
  </Router>
);

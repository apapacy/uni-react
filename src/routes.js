import React from 'react';
import {
  Router,
  Route,
} from 'react-router';

import Home from './react/home';

export default () => (
    <Route path='/' component={Home} />
);

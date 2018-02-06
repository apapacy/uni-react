import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router';
import browserHistory from './clientHistory';
import { Router, Route, Switch, matchPath} from 'react-router-dom';
import routes from './routes';

ReactDOM.render(
  <Router history={browserHistory}>
    <AppRouter />
  </Router>,
  document.getElementById("app")
);

import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes';
import browserHistory from './clientHistory';

ReactDOM.render(
  <Router history={browserHistory}>
    <AppRouter />
  <Router>,
  document.getElementById("app")
);

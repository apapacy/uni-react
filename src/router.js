import React from 'react';
import { Router, Route, Switch} from 'react-router';
import routes from './routes';

export default () => (
  <Switch>
    { routes.map(props => <Route key={ props.path } { ...props }/>) }
  </Switch>
);

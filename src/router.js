import React from 'react';
import { Router, Route, Switch} from 'react-router';
import routes from './routes';

export default (data) => (
  <Switch>
    { routes.map(props => {
      return <Route key={ props.path } {...props}/>
    }) }
  </Switch>
);

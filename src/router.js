import React from 'react';
import { Router, Route, Switch} from 'react-router';
import routes from './routes';

export default (data) => (
  <Switch>
    { routes.map(props => {
      console.log('data==', data)
      return <Route key={ props.path } {...props} staticContext={data}/>
    }) }
  </Switch>
);

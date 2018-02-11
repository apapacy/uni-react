import React from 'react';
import { Router, Route, Switch} from 'react-router';
import routes from './routes';
import Loadable from 'react-loadable';

export default (data) => (
  <Switch>
    {
      routes.map(props => {
        props.component = Loadable({
          loader: () => import('./' + props.componentName),
          loading: Loading,
        });
        return <Route key={ props.path } {...props}/>
      })
    }
  </Switch>
);

function Loading() {
  return <div>Loading...</div>;
}

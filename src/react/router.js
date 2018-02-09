import React from 'react';
import { Router, Route, Switch} from 'react-router';
import routes from './routes';

export default (data) => (
  <Switch>
    { routes.map(props => {
      props.render = function() {
        let Component = require('./' + props.componentName);
        if (Component.default) {
          Component = Component.default;
        }
        return <Component/>;
      };
      return <Route key={ props.path } {...props}/>
    }) }
  </Switch>
);

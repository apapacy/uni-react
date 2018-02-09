import React from 'react';
import { Router, Route, Switch} from 'react-router';
import routes from './routes';

export default (data) => (
  <Switch>
    {
      routes.map(props => {
        props.component = require('./' + props.componentName);
        if (props.component.default) {
          props.component = props.component.default;
        }
        return <Route key={ props.path } {...props}/>
      })
    }
  </Switch>
);

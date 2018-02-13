import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './routes';
import Layout from './components/layout'

export default (data) => (
  <Layout>
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
  </Layout>

);

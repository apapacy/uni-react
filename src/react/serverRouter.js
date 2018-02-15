import React from 'react';
import { Switch, Route, } from 'react-router';
import routes from './routes';
import Layout from './components/layout';

export default () => (
  <Layout>
    <Switch>
      {
        routes.map(props => {
          props.component = require(`./${props.componentName}`); // eslint-disable-line no-param-reassign, react/prop-types
          if (props.component.default) { // eslint-disable-line no-param-reassign, react/prop-types
            props.component = props.component.default; // eslint-disable-line no-param-reassign, react/prop-types
          }
          return <Route key={props.path} {...props}/>; // eslint-disable-line no-param-reassign, react/prop-types
        })
      }
    </Switch>
  </Layout>
);

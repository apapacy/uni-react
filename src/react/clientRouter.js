import React from 'react';
import { Router, Route, Switch} from 'react-router';
import routes from './routes';
import Loadable from 'react-loadable';
import Layout from './components/layout';
import NotFound from './components/notFound';
export default (data) => (
  <Layout>
    <Switch>
      {
        routes.map(props => {
          props.component = Loadable({
            loader: () => import('./' + props.componentName),
            loading: () => null,
            delay: () => 0,
            timeout: 10000,
          });
          return <Route key={ props.path } {...props}/>;
        })
      }
    </Switch>
  </Layout>
);

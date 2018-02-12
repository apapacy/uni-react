import React from 'react';
import { Router, Route, Switch} from 'react-router';
import routes from './routes';
import Loadable from 'react-loadable';
import universal from 'react-universal-component'

export default (data) => (
  <Switch>
    {
      routes.map(props => {
        /*const Component = Loadable({
          loader: () => import('./' + props.componentName),
          loading: Loading,
          //delay: 0,
          timeout: 10000,
        });*/
        const componentName = props.componentName;
        props.component = universal(
          () => import('./' + props.componentName),
          {
            loadingTransition: false,
            loading: () => null,
            //minDelay: 500,
          }
        );
        return <Route key={ props.path } {...props}/>
      })
    }
  </Switch>
);

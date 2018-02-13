import React from 'react';
import { Router, Route, Switch} from 'react-router';
import routes from './routes';
import Loadable from 'react-loadable';
import universal from 'react-universal-component'
import Transition from 'react-transition-group/Transition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Async from 'react-promise'
//import Router from './components/asyncRouter';
//import { Link, Route, Preload } from './asyncRouter';

const currentKey = location.pathname.split('/')[1] || '/'
const timeout = { enter: 1000, exit: 1000 }


const UniversalComponent = universal(props => import(`./${props.componentName}`), {
    loadingTransition: false,
    loading: () => null,
    delay: 0,
  }
);


export default (data) => (
  <Switch>
    {
      routes.map(props => {
        const Component = Loadable({
          loader: () => import('./' + props.componentName),
          loading: () => null,
          delay: 0,
          timeout: 10000,
        });
        //const componentName = props.componentName;
        props.component = Component;/* = universal(() => import(`./${props.componentName}`), {
            loadingTransition: false,
            loading: () => null,
            minDelay: 0,
          }
        );;*/
        //= () => <UniversalComponent componentName={componentName} />;

        /*universal(
          () => import('./' + props.componentName),
          {
            loadingTransition: false,
            loading: () => null,
            //minDelay: 500,
          }
        );*/
        return <Route key={ props.path } {...props}/>;
      })
    }
  </Switch>
);

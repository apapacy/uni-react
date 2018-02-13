import React from 'react';
import { Router, Route, Switch} from 'react-router';
import routes from './routes';
import Loadable from 'react-loadable';
//import universal from 'react-universal-component'
import loadable from 'loadable-components'

//import Transition from 'react-transition-group/Transition';
//import TransitionGroup from 'react-transition-group/TransitionGroup';
//import Async from 'react-promise'
//import Router from './components/asyncRouter';
//import { Link, Route, Preload } from './asyncRouter';



export default (data) => (
  <Switch>
    {
      routes.map(props => {
        const Component = Loadable({
          loader: () => import('./' + props.componentName),
          loading: () => <span>&nbsp;</span>,
          delay: () => 0,
          timeout: 10000,
        });
        //const componentName = props.componentName;
        /*props.component = universal(()=>import(`./${props.componentName}`), {
            loadingTransition: false,
            loading: () => null,
            minDelay: 0,
          }
        );;*/
        props.component = Component; // loadable(() => import(`./${props.componentName}`), {
        //    LoadingComponent: () => null,
        //})
        //= () => <UniversalComponent componentName={componentName} />;

        /*universal(
          () => import('./' + props.componentName),
          {
            loadingTransition: false,
            loading: () => null,
            //minDelay: 500,
          }
        );*/
        Component.pre = () => Component.preload();
        return <Route key={ props.path } {...props}/>;
      })
    }
  </Switch>
);

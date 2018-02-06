import React from 'react';
import { Router, Route, Switch} from 'react-router';
import routes from './routes';

export default (data) => (
  <Switch>
    { routes.map(props => {
      props.staticContext = data
      console.log('data==', props)
      const Component = props.Component;
      props.render = () => (<Component {...data}/>);
      return <Route key={ props.path } {...props}/>
    }) }
  </Switch>
);

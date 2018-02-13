import React from "react";
import PropTypes from "prop-types";
import invariant from "invariant";
import { createLocation } from "history";
import { Link, matchPath } from 'react-router-dom';
import routes from '../routes';
import Loadable from 'react-loadable';


/**
 * The public API for rendering a history-aware <a>.
 */
class AsyncLink extends Link {

  handleClick = (event) => {
    if (this.props.onClick) this.props.onClick(event);

    if (
      !event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
    ) {
      event.preventDefault();

      const { history } = this.context.router;
      const { replace, to } = this.props;
      const locate = () => {
        if (replace) {
          history.replace(to);
        } else {
          history.push(to);
        }
      }
      console.log(this)
      if (this.context.router.history.location.pathname) {
        const route = routes.find((route) =>
          matchPath(this.context.router.history.location.pathname, route) ? route : null);
        console.log('../' + route.componentName, route);
        const Console = console;
        alert(2)
         //console.log(route.component.preload())
        route.component.load()
        Console.log('=================================')
        alert(1)
        console.log('imported', data)
        alert(2)
         setTimeout(locate,3000);
      } else {
        //locate();
      }
    }
  };

}

export default AsyncLink;

import React from "react";
import PropTypes from "prop-types";
import invariant from "invariant";
import { createLocation } from "history";
import { Link, matchPath } from 'react-router-dom';
import routes from './routes';
import Loadable from 'react-loadable';



const isModifiedEvent = event =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);


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
      function locate() {
        if (replace) {
          history.replace(to);
        } else {
          history.push(to);
        }
      }
      console.log(this)
      if (this.context.router.history.location.pathname) {
        const route = routes.find((route) => matchPath(this.props.to, route) ? route : null);
        const path = String('./' + route.componentName)
        console.log(route)
        console.log('===============', path)
        import(`${path}`).then(function() {locate()})
      } else {
        //locate();
      }
    }
  };

}

export default AsyncLink;

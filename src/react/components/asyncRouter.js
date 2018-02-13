import warning from "warning";
import invariant from "invariant";
import React from "react";
import PropTypes from "prop-types";
import { Route, Router, Switch} from 'react-router';


/**
 * The public API for putting history on context.
 */
class AsyncRouter extends Router {

  getChildContext() {
  alert('getChildContext')

    console.log('getChildContext', this);
    return {
      router: {
        ...this.context.router,
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      }
    };
  }


  componentWillMount() {
    console.log('componentWillMount+++++', this)
    alert('componentWillMount')
    const { children, history } = this.props;

    invariant(
      children == null || React.Children.count(children) === 1,
      "A <Router> may have only one child element"
    );

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(() => {
      this.setState({
        match: this.computeMatch(history.location.pathname)
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    alert('componentWillReceiveProps')
    console.log('componentWillReceiveProps', this)
    warning(
      this.props.history === nextProps.history,
      "You cannot change <Router history>"
    );
  }

  componentWillUnmount() {
    this.unlisten();
  }

}

export default AsyncRouter;

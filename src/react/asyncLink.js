import { Link, matchPath, } from 'react-router-dom';
import routes from './routes';

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

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
      const { history, } = this.context.router;
      const { replace, to, } = this.props;

      function locate() { // eslint-disable-line no-inner-declarations
        if (replace) {
          history.replace(to);
        } else {
          history.push(to);
        }
      }
      if (this.context.router.history.location.pathname) {
        const routeTo = routes.find((route) =>
          matchPath(this.props.to, route) ? route : null
        );

        if (routeTo) {
          import(`./${routeTo.componentName}`).then(() => locate());
        } else {
          locate();
        }
      } else {
        locate();
      }
    }
  };
}

export default AsyncLink;

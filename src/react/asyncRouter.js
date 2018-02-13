import routes from './routes';
import { Link } from 'react-router';
let realLink = Link;

try {
if (typeof process == 'undefined') {
  const AsyncSetup = require('react-router-async-routing');
  const asyncSetup = AsyncSetup(routes, path => import(`./${componentName}`));
  realLink = asyncSetup.Link
}
} catch(ex) {}

module.exports = { Link: realLink };

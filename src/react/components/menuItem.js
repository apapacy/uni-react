import React from 'react';
import { withRouter } from 'react-router-dom';

import Link from '../asyncLink'; // eslint-disable-line

const MenuItem = ({ children, to, location }) => ( // eslint-disable-line react/prop-types
  <li className={`nav-item ${to === location.pathname ? 'active' : null}`} key={to}>
    <Link className="nav-link" to={to}>{children}</Link>
  </li>
);

export default withRouter(MenuItem);

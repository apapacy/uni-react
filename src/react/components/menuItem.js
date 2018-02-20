import React from 'react';
import Link from '../asyncLink'; // eslint-disable-line

const MenuItem = ({ children, to, pathname }) => ( // eslint-disable-line react/prop-types
  <li className={`nav-item ${to === pathname ? 'active' : null}`} key={to}>
    <Link className="nav-link" to={to}>{children}</Link>
  </li>
);

export default MenuItem;

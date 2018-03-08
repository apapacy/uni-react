import React from 'react';
import Link from '../asyncLink';

export default ({ children }) => ( // eslint-disable-line react/prop-types
  <div>
    <header>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/users">Users List</Link> |
        <Link to="/room">Contact</Link>
      </nav>
    </header>
    { children }
    <footer>
      {'I`m here to stay'}
    </footer>
  </div>
);

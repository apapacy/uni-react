//import { Link } from 'react-router-dom';
import React from 'react';
import Link from '../asyncLink';
//import { Link, Route, Preload } from '../asyncRouter';


export default ({ children, title = 'This is the default title' }) => (
  <div>
    <header>
      <nav>
        <Link to='/'>Home</Link> |
        <Link to='/users'>Users List</Link> |
        <Link to='/room'>Contact</Link>
      </nav>
    </header>
    { children }
    <footer>
      {'I`m here to stay'}
    </footer>
  </div>
)

import React from 'react';
import { connect } from 'react-redux';
import Link from '../asyncLink'; // eslint-disable-line

const Layout = ({ children, user }) => ( // eslint-disable-line react/prop-types
  <div>
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/" to="/">conduit</Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            {/* Add "active" class when you're on that page" */}
            {
              user && user.id
              ? <Link className="nav-link active" to="/feed">Home</Link>
              : <Link className="nav-link active" to="/">Home</Link>
            }
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/new-post">
              <i className="ion-compose" />&nbsp;New Post
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/settings">
              <i className="ion-gear-a" />&nbsp;Settings
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sign-up">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
    {children}
    <footer>
      <div className="container">
        <Link to="/" className="logo-font">conduit</Link>
        <span className="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
);

export default connect(state => ({ user: state.user }))(Layout);

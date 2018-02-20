import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Link from '../asyncLink'; // eslint-disable-line
import MenuItem from './menuItem';

const Layout = ({ children, user, location }) => ( // eslint-disable-line react/prop-types
  <div>
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">conduit</Link>
        <ul className="nav navbar-nav pull-xs-right">
          {
            !user || !user.id
              ?
                [
                  <MenuItem pathname={location.pathname} to="/" key="home">
                    <i className="ion-home" />&nbsp;Home
                  </MenuItem>,
                  <MenuItem pathname={location.pathname} to="/sign-in" key="sign-in">
                    <i className="ion-log-in" />&nbsp;Sign in
                  </MenuItem>,
                  <MenuItem pathname={location.pathname} to="/sign-up" key="sign-up">
                    <i className="ion-person-add" />&nbsp;Sign up
                  </MenuItem>,
                ]
              :
                [
                  <MenuItem to="/feed" pathname={location.pathname} key="feed">
                    <i className="ion-home" />&nbsp;Home
                  </MenuItem>,
                  <MenuItem to="/new-post" pathname={location.pathname} key="new-post">
                    <i className="ion-compose" />&nbsp;New Post
                  </MenuItem>,
                  <MenuItem to="/settings" pathname={location.pathname} key="settings">
                    <i className="ion-gear-a" />&nbsp;Settings
                  </MenuItem>,
                  <MenuItem to="/log-out" pathname={location.pathname} key="log-out">
                    <i className="ion-log-out" />&nbsp;Sign out
                  </MenuItem>,
                  <MenuItem to="/author/apapacy" pathname={location.pathname} key="author">
                    <img alt="author" src={user.image} className="user-pic" />
                    {user.username}
                  </MenuItem>,
                ]
          }
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

export default withRouter(connect(state => ({ user: state.user }))(Layout));

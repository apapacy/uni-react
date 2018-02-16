import React from 'react';
import Link from '../asyncLink';

export default ({ children, }) => ( // eslint-disable-line react/prop-types
  <div>
    <nav className="navbar navbar-light">
       <div className="container">
         <Link className="navbar-brand" to="/">conduit</Link>
         <ul className="nav navbar-nav pull-xs-right">
           <li className="nav-item">
             {/* Add "active" class when you're on that page" */}
             <Link className="nav-link active" to="/">Home</Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/new-post">
               <i className="ion-compose"></i>&nbsp;New Post
             </Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/settings">
               <i className="ion-gear-a"></i>&nbsp;Settings
             </Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/sign-up">Sign up</Link>
           </li>
         </ul>
       </div>
     </nav>
      { children }
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

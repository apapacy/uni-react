import React from 'react';
import { connect, } from 'react-redux';
import {login} from '../../redux/services/user';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = ::this.handleSubmit;
  }
  handleSubmit(event) {
   event.preventDefault();
   console.log(this.emailInput.value);
   console.log(this.passwordInput.value);
   this.props.login({
     email: this.emailInput.value,
     password: this.passwordInput.value,
   });
 }
  render() {
    return (
<div className="auth-page">
  <div className="container page">
    <div className="row">

      <div className="col-md-6 offset-md-3 col-xs-12">
        <h1 className="text-xs-center">Sign up</h1>
        <p className="text-xs-center">
          <a href="">Have an account?</a>
        </p>

        <ul className="error-messages">
          <li>That email is already taken</li>
        </ul>

        <form onSubmit={this.handleSubmit}>
          <fieldset className="form-group">
            <input className="form-control form-control-lg" type="text" placeholder="Your Name"/>
          </fieldset>
          <fieldset className="form-group">
            <input ref={input => this.emailInput = input} className="form-control form-control-lg" type="text" placeholder="Email"/>
          </fieldset>
          <fieldset className="form-group">
            <input ref={input => this.passwordInput = input} className="form-control form-control-lg" type="password" placeholder="Password"/>
          </fieldset>
          <button className="btn btn-lg btn-primary pull-xs-right">
            Sign up
          </button>
        </form>
      </div>

    </div>
  </div>
</div>);
}
}

function mapDispatchToProps(dispatch) {
  return {
    login: (user) => dispatch(login(user)),
  };
}

export default connect(state => state, mapDispatchToProps)(Login);

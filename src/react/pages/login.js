import React from 'react';
import {connect} from 'react-redux';
import {login, me,} from '../../redux/services/user';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = ::this.handleSubmit;
  }
  async handleSubmit(event) {
    event.preventDefault();
    if (this.props.user && this.props.user.transition) {
      return;
    }
    await this.props.dispatch(login({email: this.emailInput.value, password: this.passwordInput.value}));
    if (this.props.user && this.props.user.id) {
      this.passwordInput.value = '';
    }
  }
  render() {
    return (<div className='auth-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Sign up</h1>
            <p className='text-xs-center'>
              <a href=''>Have an account?</a>
            </p>
            <ul className='error-messages'>
              <li>That email is already taken</li>
            </ul>
            <form onSubmit={this.handleSubmit}>
              <fieldset className='form-group'>
                <input ref={input => this.nameInput = input} className='form-control form-control-lg' type='text' placeholder='Your Name' autoComplete='off'/>
              </fieldset>
              <fieldset className='form-group'>
                <input ref={input => this.emailInput = input} className='form-control form-control-lg' type='text' placeholder='Email' autoComplete='off'/>
              </fieldset>
              <fieldset className='form-group'>
                <input ref={input => this.passwordInput = input} className='form-control form-control-lg' type='password' placeholder='Password' autoComplete='off'/>
              </fieldset>
              <button className='btn btn-lg btn-primary pull-xs-right'>
                Sign up
              </button>
            </form>
            <button onClick={() =>::this.props.dispatch(me({}))} className='btn btn-lg btn-primary pull-xs-right'>
              Whois
            </button>
          </div>
        </div>
      </div>
    </div>);
  }
}


export default connect(state => ({ user: state.user, }))(Login);

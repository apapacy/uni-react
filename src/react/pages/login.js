import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, me } from '../../redux/services/user';
import ErrorsList from '../components/errorsList';

class Login extends React.PureComponent {
  static async getInitialProps({ req, store, dispatch, user }) {
    if (user && user.id) {
      return;
    }
    const execute = dispatch || store.dispatch;
    await execute(me({ req }));
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await Login.getInitialProps(this.props);
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (this.props.user && this.props.user.transition) {
      return;
    }
    await this.props.dispatch(login({ email: this.emailInput.value, password: this.passwordInput.value }));
    if (this.props.user && this.props.user.id) {
      this.passwordInput.value = '';
    }
  }

  isSignUp() {
    return this.props.match && this.props.match.params && this.props.match.params[0] === 'sign-up';
  }
  
  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">
                {
                  this.isSignUp()
                    ? 'Sign up'
                    : 'Sign in'
                }
              </h1>
              <p className="text-xs-center">
                {
                  this.isSignUp()
                    ? <Link to="/sign-in">Have an account?</Link>
                    : <Link to="/sign-up">Need an account?</Link>
                }
              </p>
              <ErrorsList error={this.props.user.error} />
              <form onSubmit={this.handleSubmit}>
                {
                  this.isSignUp()
                    ?
                      <fieldset className="form-group">
                        <input
                          ref={(input) => { this.nameInput = input; }}
                          className="form-control form-control-lg"
                          type="text"
                          placeholder="Your Name"
                          autoComplete="off"
                        />
                      </fieldset>
                    :
                      null
                }
                <fieldset className="form-group">
                  <input
                    ref={(input) => { this.emailInput = input; }}
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    ref={(input) => { this.passwordInput = input; }}
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                  />
                </fieldset>
                <button className="btn btn-lg btn-primary pull-xs-right">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ user: state.user }))(Login);

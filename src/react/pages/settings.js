import React from 'react';
import { connect, } from 'react-redux';
import { me, save, } from '../../redux/services/user';

class Settings extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = ::this.handleSubmit;
  }

  async componentDidMount() {
    await Settings.getInitialProps(this.props);
    this.fillInputs();``
  }

  static async getInitialProps({ req, match, store, dispatch, user, }) {
    if (user && user.id) {
      return;
    }
    const action = me({ req });
    if (req) {
      await store.dispatch(action);
    } else {
      dispatch(action);
    }
    return;
  }

  fillInputs() {
    this.bioInput.value = this.props.user.bio || '';
    this.emailInput.value = this.props.user.email || '';
    this.imageInput.value = this.props.user.image || '';
    this.usernameInput.value = this.props.user.username || '';
    this.usernameInput.password = '';
  }

  async handleSubmit(event) {
   event.preventDefault();
   if (this.props.user && this.props.user.transition) {
     return;
   }
   await this.props.save({
     bio: this.bioInput.value,
     email: this.emailInput.value,
     image: this.imageInput.value,
     username: this.usernameInput.value,
     password: this.passwordInput.value,
   });
   this.fillInputs();
 }

  render() {
    return (
<div className="settings-page">
  <div className="container page">
    <div className="row">
      <div className="col-md-6 offset-md-3 col-xs-12">
        <h1 className="text-xs-center">Your Settings</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
              <fieldset className="form-group">
                <input className="form-control" type="text" placeholder="URL of profile picture"
                  ref={input => this.imageInput = input} autoComplete='off'/>
              </fieldset>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Your Name"
                  ref={input => this.usernameInput = input} autoComplete='off'/>
              </fieldset>
              <fieldset className="form-group">
                <textarea className="form-control form-control-lg" rows="8" placeholder="Short bio about you"
                  ref={input => this.bioInput = input} autoComplete='off'></textarea>
              </fieldset>
              <fieldset className="form-group">
                <input className="form-control form-control-lg" type="text" placeholder="Email"
                  ref={input => this.emailInput = input} autoComplete='off'/>
              </fieldset>
              <fieldset className="form-group">
                <input ref={input => this.passwordInput = input} className="form-control form-control-lg"
                  type="password" placeholder="Password" autoComplete='off'/>
              </fieldset>
              <button className="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>);
}
}

function mapDispatchToProps(dispatch) {
  return {
    login: user => dispatch(login(user)),
    me: () => dispatch(me({})),
    save: user => dispatch(save(user)),
    dispatch: dispatch,
  };
}

export default connect(state => ({ user: state.user }), mapDispatchToProps)(Settings);

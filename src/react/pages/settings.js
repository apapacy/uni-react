import React from 'react';
import {connect} from 'react-redux';
import {me, save, clearErrors} from '../../redux/services/user';
import ErrorsList from '../components/errorsList';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      ...this.props.user,
      password: '',
    };
  }

  async componentDidMount() {
    await Settings.getInitialProps(this.props);
    this.setState({
      ...this.props.user,
      password: '',
    });
  }

  async componentWillUnmount() {
    this.props.dispatch(clearErrors());
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (this.props.user && this.props.user.transition) {
      return;
    }
    const { bio, email, image, username, password, } = this.state;

    await this.props.dispatch(save({ bio, email, image, username, password, }));
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  static async getInitialProps({ req, store, dispatch, user, }) {
    if (user && user.id) {
      return;
    }
    const action = me({ req, });

    if (req) {
      await store.dispatch(action);
    } else {
      dispatch(action);
    }
    return;
  }

  render() {
    return (<div className='settings-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>Your Settings</h1>
            <ErrorsList error={this.props.user.error}/>
            <form onSubmit={this.handleSubmit}>
              <fieldset>
                <fieldset className='form-group'>
                  <input className='form-control' type='text' placeholder='URL of profile picture' name='image' onChange={this.handleChange} autoComplete='off' value={this.state.image}/>
                </fieldset>
                <fieldset className='form-group'>
                  <input className='form-control form-control-lg' type='text' placeholder='Your Name' name='username' onChange={this.handleChange} autoComplete='off' value={this.state.username}/>
                </fieldset>
                <fieldset className='form-group'>
                  <textarea className='form-control form-control-lg' rows='8' placeholder='Short bio about you' name='bio' onChange={this.handleChange} autoComplete='off' value={this.state.bio}></textarea>
                </fieldset>
                <fieldset className='form-group'>
                  <input className='form-control form-control-lg' type='text' placeholder='Email' name='email' onChange={this.handleChange} autoComplete='off' value={this.state.email}/>
                </fieldset>
                <fieldset className='form-group'>
                  <input ref={input => this.passwordInput = input} className='form-control form-control-lg' type='password' placeholder='Password' name='password' onChange={this.handleChange} autoComplete='off' value={this.state.password}/>
                </fieldset>
                <button className='btn btn-lg btn-primary pull-xs-right'>
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

export default connect(state => ({ user: state.user, }))(Settings);

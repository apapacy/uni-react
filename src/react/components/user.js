import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AsyncLink from '../asyncLink';
import { userActions } from '../../redux/actions';

class User extends React.PureComponent {
  static async getInitialProps({ req, match, store, dispatch }) {
   console.log(match);
   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
   const action = userActions.login({name: 'John', userAgent});
   const user = userActions.user({ id: Number(match.params.id) });
   if (req) {
     await store.dispatch(user);
   } else {
     dispatch(user);
   }
   return;
  }
  componentDidMount(){
    // client and server
    console.log('componentDidMount', this.props);
    return User.getInitialProps(this.props);
  }
  render() {
    console.log(this.props)
    const user = this.props.user;
    return <table>
      <tbody>
        <tr><td>id</td><td>{user.id}</td></tr>
        <tr><td>name</td><td>{user.name}</td></tr>
        <tr><td>email</td><td>{user.email}</td></tr>
        <tr><td>phone</td><td>{user.phone}</td></tr>
      </tbody>
    </table>;
  }
}

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default connect((state) => ({ user: state.user.user }))(User);

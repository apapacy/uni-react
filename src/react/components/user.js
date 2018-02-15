import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AsyncLink from '../asyncLink';
import { userActions } from '../../redux/actions';

class User extends React.PureComponent {
  static async getInitialProps({ req, match, store, dispatch, user }) {
    const id = Number(match.params.id);
    if (user && user.id === id) {
      return;
    }
    const action = userActions.user({ id });
    if (req) {
      await store.dispatch(action);
    } else {
      dispatch(action);
    }
    return;
  }
  componentDidMount(){
    return User.getInitialProps(this.props);
  }
  render() {
    const user = this.props.user;
    return user ? <table>
      <tbody>
        <tr><td>id</td><td>{user.id}</td></tr>
        <tr><td>name</td><td>{user.name}</td></tr>
        <tr><td>email</td><td>{user.email}</td></tr>
        <tr><td>phone</td><td>{user.phone}</td></tr>
      </tbody>
    </table> : null;
  }
}

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

export default connect((state) => ({ user: state.user.user }))(User);

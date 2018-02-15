import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AsyncLink from '../asyncLink';
import { userActions } from '../../redux/actions';

class UsersList extends React.PureComponent {
  static async getInitialProps({ req, match, store, dispatch, users }) {
    if (users instanceof Array && users.length) {
      return;
    }
    const action = userActions.users();
    if (req) {
      await store.dispatch(action);
    } else {
      dispatch(action);
    }
    return;
  }

  componentDidMount(){
    UsersList.getInitialProps(this.props);
  }

  render() {
    return <ul>{this.props.users.map(user => (
      <li key={user.id}>{ user.name } <AsyncLink to={`/users/${user.id}`}>see detail</AsyncLink></li>
    ))}</ul>
  }
}

UsersList.propTypes = {
  users:  PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

UsersList.defaultProps = {
  users: [],
};

export default connect((state) => ({ users: state.user.users }))(UsersList);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AsyncLink from '../asyncLink';
import { usersAction } from '../../redux/services/users';

class UsersList extends React.PureComponent {
  static async getInitialProps({ dispatch }) {
    await dispatch(usersAction());
  }

  async componentDidMount() {
    if (this.props.history.action === 'POP' && this.props.hydrated) {
      await UsersList.getInitialProps(this.props);
    }
  }

  render() {
    return (
      <ul>
        {
          this.props.users.map(user => (
            <li key={user.id}>
              {user.name}
              <AsyncLink to={`/users/${user.id}`}>
                see detail
              </AsyncLink>
            </li>
          ))
        }
      </ul>
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  history: PropTypes.shape().isRequired,
  hydrated: PropTypes.bool.isRequired,
};

// UsersList.defaultProps = { users: [] };

export default connect(state => ({
  users: state.user.users,
  hydrated: state.hydrated,
}))(UsersList);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userAction } from '../../redux/services/users';

class User extends React.PureComponent {
  static async getInitialProps({ match, dispatch }) {
    const id = Number(match.params.id);
    await dispatch(userAction({ id }));
  }

  async componentDidMount() {
    if (this.props.history.action === 'POP' && this.props.hydrated) {
      await User.getInitialProps(this.props);
    }
  }

  render() {
    const { user } = this.props;

    return (
      user ?
        <table>
          <tbody>
            <tr><td>id</td><td>{user.id}</td></tr>
            <tr><td>name</td><td>{user.name}</td></tr>
            <tr><td>email</td><td>{user.email}</td></tr>
            <tr><td>phone</td><td>{user.phone}</td></tr>
          </tbody>
        </table>
        :
        null
    );
  }
}

// User.defaultProps = { user: {} };

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape().isRequired,
  hydrated: PropTypes.bool.isRequired,
};

export default connect(state => ({
  user: state.user.user,
  hydrated: state.hydrated,
}))(User);

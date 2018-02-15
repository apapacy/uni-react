import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AsyncLink from '../asyncLink';
import { userActions } from '../../redux/actions';

class UsersList extends React.PureComponent {
  static async getInitialProps({ req, match, store, dispatch }) {
   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
   const action = userActions.login({name: 'John', userAgent});
   const users = userActions.users();
   if (req) {
     await store.dispatch(action);
     await store.dispatch(users);
   } else {
     dispatch(action);
     dispatch(users);
   }
   return;
  }
  componentDidMount(){
    // client and server
    console.log('componentDidMount', this.props);
    return UsersList.getInitialProps(this.props);
  }
  render() {
    return <ul>{this.props.users.map(user => (
      <li key={user.id}>{ user.name } <AsyncLink to={`/users/${user.id}`}>see detail</AsyncLink></li>
    ))}</ul>
  }
}

UsersList.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    userAgent: PropTypes.string.isRequired,
  }),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  )
};

export default connect((state) => ({ user: state.user, users: state.user.users }))(UsersList);

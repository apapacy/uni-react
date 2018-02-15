import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {userActions} from '../../redux/actions';

class UsersList extends React.PureComponent {
  static async getInitialProps({ req, match, store, dispatch }) {
   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
   const action = userActions.login({name: 'John', userAgent});
   if (req) {
     await store.dispatch(action);
   } else {
     dispatch(action);
   }
   return;
  }
  render() {
    return <h1>UNI-React</h1>
  }
}

UserList.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    userAgent: PropTypes.string.isRequired,
  }),
};

export default connect((state) => ({user: state.user}))(UsersList);

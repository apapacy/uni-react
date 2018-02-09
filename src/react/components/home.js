'use strict'
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {userActions} from '../../redux/actions';

class Home extends React.PureComponent {
  static async getInitialProps({ req, match, store, dispatch }) {
   console.log('getInitialProps');
   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
   const action = userActions.login({name: 'John', userAgent});
   if (req) {
     await store.dispatchAsync(action);
   } else {
     dispatch(action);
   }
   return;
  }
  constructor(props, ...rest) {
    super(props, ...rest);
  }
  render(data) {
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.user.count}) Hello {this.props.user.name} from {this.props.user.userAgent}!</h1>
        <Link to="/room">About</Link>
      </div>
    );
  }


    componentWillMount(){
      // only server
      console.log('componentWillMount')
    }
    async componentDidMount(){
      // client and server
      console.log('componentDidMount', this.props);
      await Home.getInitialProps(this.props);
    }
    componentWillReceiveProps(){console.log('componentWillReceiveProps')}
    shouldComponentUpdate0(){
      console.log('shouldComponentUpdate')
      return true;
    }
    componentWillUpdate(){console.log('componentWillUpdate')}
    componentDidUpdate(){console.log('componentDidUpdate')}
    componentWillUnmount(){console.log('componentWillUnmount')}
    componentDidCatch(){console.log('componentDidCatch')}
    //    setState()
    //    forceUpdate()
    //    defaultProps
    //    displayName
    //    props
    //    state

}

Home.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    userAgent: PropTypes.string.isRequired,
  }),
};

export default connect((state) => ({user: state.user})/*, mapDispatchToProps*/)(Home)
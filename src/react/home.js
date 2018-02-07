import React from 'react';
import { connect } from 'react-redux'


class Home extends React.Component {
  static async getInitialProps({ req, match }) {
   console.log('getInitialProps')
   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
   return { userAgent, a: 16 }
  }
  constructor(props, ...rest) {
    super(props, ...rest);
  }
  render(data) {
    console.log(this.props)
    return (
      <h1>Hello {this.props.staticContext.data[0].userAgent}!</h1>
    );
  }


    componentWillMount(){
      console.log('componentWillMount')
    }
    async componentDidMount(){
      console.log('componentDidMount');
      this.props.data = await Home.getInitialProps(this.props);

    }
    componentWillReceiveProps(){console.log('componentWillReceiveProps')}
    shouldComponentUpdate(){console.log('shouldComponentUpdate')}
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

export default connect((state) => state/*, mapDispatchToProps*/)(Home)

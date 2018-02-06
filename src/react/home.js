import React from 'react';

export default class Home extends React.Component {
  static async getInitialProps({ req }) {
   const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
   return { userAgent, a: 16 }
  }
  constructor(...props) {
    super(...props);
    console.log('construct', props);
  }
  render(data) {
    console.log('props', this.props);
    console.log('props-data', this.data);
    return (
      <h1>Hello Kitty!</h1>
    );
  }
}

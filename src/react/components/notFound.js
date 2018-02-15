import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class NotFound extends React.PureComponent {
  render() {
    return <div>Page not found</div>;
  }
}

export default withRouter(connect()(NotFound));

import React from 'react';
import { withRouter } from 'react-router-dom';

import Link from '../asyncLink'; // eslint-disable-line
// asyncLink contents dynamic import()

const Following = ({ profile, user, onClick }) => {
  if (!user || !user.id || user.username === profile.username) {
    return null;
  }
  if (profile.following) {
    return (
      <button
        className="btn btn-sm btn-secondary action-btn"
        onClick={onClick}
      >
        <i className="ion-minus-round" />
        &nbsp;
        Unfollow {profile.username}
      </button>
    );
  } else {
    return (
      <button
        className="btn btn-sm btn-outline-secondary action-btn"
        onClick={onClick}
      >
        <i className="ion-plus-round" />
        &nbsp;
        Follow {profile.username}
      </button>
    );
  }
};

export default withRouter(Following);

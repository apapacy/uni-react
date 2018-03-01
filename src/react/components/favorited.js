import React from 'react';
import { withRouter } from 'react-router-dom';

import Link from '../asyncLink'; // eslint-disable-line
// asyncLink contents dynamic import()

const Favorited = ({ article, user, onClick, addClassName }) => {
  let click;
  if (!user || !user.username || article.author.username === user.username) {
    click = undefined;
  } else {
    click = onClick;
  }
  if (article.favorited) {
    return (
      <button className={`btn btn-sm btn-primary ${addClassName}`} onClick={click}>
        <i className="ion-heart" />
        {
          addClassName
            ?
              null
            :
              <span>&nbsp;Unvorite Post</span>
        }
        &nbsp;
        <span className="counter">{article.favoritesCount}</span>
      </button>
    );
  } else {
    return (
      <button className={`btn btn-sm btn-outline-primary ${addClassName}`} onClick={click}>
        <i className="ion-heart" />
        {
          addClassName
            ?
              null
            :
              <span>&nbsp;Favorite Post</span>
        }
        &nbsp;
        <span className="counter">{article.favoritesCount}</span>
      </button>
    );
  }
};

export default withRouter(Favorited);

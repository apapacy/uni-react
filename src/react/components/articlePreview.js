import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Link from '../asyncLink'; // eslint-disable-line
import { favorite } from '../../redux/services/articles';

const ArticlePreview = (props) => {
  function favoritedOnClick(event) {
    event.preventDefault();
    if (props.user && props.user.id && props.user.username !== props.author.username) {
      props.dispatch(favorite({ slug: props.slug, method: props.favorited ? 'delete' : 'post' }));
    }
    event.target.blur();
  }
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`/author/${props.author.username}`}><img alt="☺" src={props.author.image} /></Link>
        <div className="info">
          <Link to={`/author/${props.author.username}`} className="author">{props.author.username}</Link>
          <span className="date">{moment(props.updatedAt).format('ddd MMM DD YYYY')}</span>
        </div>
        <button className={`btn btn-${props.favorited ? '' : 'outline-'}primary btn-sm pull-xs-right`} onClick={favoritedOnClick}>
          <i className="ion-heart" />&nbsp;{props.favoritesCount}
        </button>
      </div>
      <Link to={`/article/${props.slug}`} className="preview-link">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <span>Read more...</span>
        {
          props.tagList && props.tagList.length
            ?
              <ul className="tag-list">
                {
                  props.tagList.map(tag => (
                    <li className="tag-default tag-pill tag-outline" key={tag}>{tag}</li>
                  ))
                }
              </ul>
            : null
        }
      </Link>
    </div>
  );
};

ArticlePreview.propTypes = {
  dispatch: PropTypes.func.isRequired,
  favorited: PropTypes.bool.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  favoritesCount: PropTypes.number.isRequired,
  updatedAt: PropTypes.string.isRequired,
  author: PropTypes.shape({
    username: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  tagList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withRouter(connect()(ArticlePreview));

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { me } from '../../redux/services/user';
import { article, clearErrors } from '../../redux/services/article';
import Link from '../asyncLink';

class Article extends React.PureComponent {
  static async getInitialProps({ req, dispatch, user, match }) {
    await dispatch(me({ req }));
    await dispatch(article({ req, slug: match.params[0] }));
  }

  async componentDidMount() {
    if (this.props.hydrated.state) {
      await Article.getInitialProps(this.props);
    }
  }

  async componentWillUnmount() {
    //this.props.dispatch(clearErrors());
  }

  render() {
    return (
<div className="article-page">
  <div className="banner">
    <div className="container">
      <h1>{this.props.article.title}</h1>
      <div className="article-meta">
        <Link to={`/author/${this.props.article.author.username}`}><img src={this.props.article.author.image} /></Link>
        <div className="info">
          <Link to={`/author/${this.props.article.author.username}`} className="author">{this.props.article.author.username}</Link>
          <span className="date">{this.props.article.updatedAt}</span>
        </div>
        <button className="btn btn-sm btn-outline-secondary">
          <i className="ion-plus-round" />
          &nbsp;
          Follow {this.props.article.author.username} <span className="counter" />
        </button>
        &nbsp;&nbsp;
        <button className={`btn btn-sm btn-${this.props.article.favorited ? '' : 'outline-'}primary`}>
          <i className="ion-heart" />
          &nbsp;
          Favorite Post <span className="counter">({this.props.article.favoritesCount})</span>
        </button>
      </div>

    </div>
  </div>
  <div className="container page">
    <div className="row article-content">
      <div className="col-md-12">
        {this.props.article.body}
      </div>
    </div>
    <hr />
    <div className="article-actions">
      <div className="article-meta">
        <Link to={`/author/${this.props.article.author.username}`}>
          <img src={this.props.article.author.image} />
        </Link>
        <div className="info">
          <Link to={`/author/${this.props.article.author.username}`} className="author">
            {this.props.article.author.username}
          </Link>
          <span className="date">{this.props.article.updatedAt}</span>
        </div>
        <button className="btn btn-sm btn-outline-secondary">
          <i className="ion-plus-round" />
          &nbsp;
          Follow {this.props.article.author.username}<span className="counter" />
        </button>
        &nbsp;
        <button className={`btn btn-sm btn-${this.props.article.favorited ? '' : 'outline-'}primary`}>
          <i className="ion-heart" />
          &nbsp;
          Favorite Post <span className="counter">{this.props.article.favoritesCount}</span>
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-md-8 offset-md-2">
        <form className="card comment-form">
          <div className="card-block">
            <textarea className="form-control" placeholder="Write a comment..." rows="3"></textarea>
          </div>
          <div className="card-footer">
            <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
            <button className="btn btn-sm btn-primary">
             Post Comment
            </button>
          </div>
        </form>
        <div className="card">
          <div className="card-block">
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="card-footer">
            <a href="" className="comment-author">
              <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
            </a>
            &nbsp;
            <a href="" className="comment-author">Jacob Schmidt</a>
            <span className="date-posted">Dec 29th</span>
          </div>
        </div>
        <div className="card">
          <div className="card-block">
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div className="card-footer">
            <a href="" className="comment-author">
              <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
            </a>
            &nbsp;
            <a href="" className="comment-author">Jacob Schmidt</a>
            <span className="date-posted">Dec 29th</span>
            <span className="mod-options">
              <i className="ion-edit" />
              <i className="ion-trash-a" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
}
}

Article.propTypes = { dispatch: PropTypes.func.isRequired };

export default connect(state => ({
  user: state.user,
  article: state.article,
  hydrated: state.hydrated,
}))(Article);

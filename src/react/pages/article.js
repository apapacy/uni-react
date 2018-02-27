import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { me } from '../../redux/services/user';
import { article, comments, follow, favorite } from '../../redux/services/article';
import Link from '../asyncLink';

class Article extends React.PureComponent {
  static async getInitialProps({ req, dispatch, user, match }) {
    await dispatch(me({ req }));
    await dispatch(article({ req, slug: match.params[0] }));
    await dispatch(comments({ req, slug: match.params[0] }));
  }

  async componentDidMount() {
    if (this.props.hydrated) {
      await Article.getInitialProps(this.props);
    }
  }

  async componentWillUnmount() {
    // this.props.dispatch(clearErrors());
  }

  follow(event) {
    this.props.dispatch(follow({
      author: this.props.article.article.author.username,
      method: 'post',
    }));
    event.target.blur();
  }

  unfollow(event) {
    this.props.dispatch(follow({
      author: this.props.article.article.author.username,
      method: 'delete',
    }));
    event.target.blur();
  }

  favorite(event) {
    this.props.dispatch(favorite({
      slug: this.props.article.article.slug,
      method: 'post',
    }));
    event.target.blur();
  }

  unfavorite(event) {
    this.props.dispatch(favorite({
      slug: this.props.article.article.slug,
      method: 'delete',
    }));
    event.target.blur();
  }

  render() {
    return (
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{this.props.article.article.title}</h1>
            <div className="article-meta">
              <Link to={`/author/${this.props.article.article.author.username}`}>
                <img alt="" src={this.props.article.article.author.image} />
              </Link>
              <div className="info">
                <Link to={`/author/${this.props.article.article.author.username}`} className="author">{this.props.article.article.author.username}</Link>
                <span className="date">{this.props.article.article.updatedAt}</span>
              </div>
              {
                this.props.article.article.author.following
                  ?
                    <button className="btn btn-sm btn-secondary" onClick={this.unfollow.bind(this)}>
                      <i className="ion-minus-round" />
                      &nbsp;
                      Unollow {this.props.article.article.author.username} <span className="counter" />
                    </button>
                  :
                    <button className="btn btn-sm btn-outline-secondary" onClick={this.follow.bind(this)}>
                      <i className="ion-plus-round" />
                      &nbsp;
                      Follow {this.props.article.article.author.username} <span className="counter" />
                    </button>
              }
              &nbsp;&nbsp;
              {
                this.props.article.article.favorited
                  ?
                    <button className="btn btn-sm btn-primary" onClick={this.unfavorite.bind(this)}>
                      <i className="ion-heart" />
                      &nbsp;
                      Unfavorite Post
                      &nbsp;
                      <span className="counter">({this.props.article.article.favoritesCount})</span>
                    </button>
                  :
                    <button className="btn btn-sm btn-outline-primary" onClick={this.favorite.bind(this)}>
                      <i className="ion-heart" />
                      &nbsp;
                      Favorite Post
                      &nbsp;
                      <span className="counter">({this.props.article.article.favoritesCount})</span>
                    </button>
              }
            </div>
          </div>
        </div>
        <div className="container page">
          <div className="row article-content">
            <div className="col-md-12">
              <ReactMarkdown>{this.props.article.article.body}</ReactMarkdown>
            </div>
          </div>
          <hr />
          <div className="article-actions">
            <div className="article-meta">
              <Link to={`/author/${this.props.article.article.author.username}`}>
                <img alt="" src={this.props.article.article.author.image} />
              </Link>
              <div className="info">
                <Link to={`/author/${this.props.article.article.author.username}`} className="author">
                  {this.props.article.article.author.username}
                </Link>
                <span className="date">{this.props.article.article.updatedAt}</span>
              </div>
              {
                this.props.article.article.author.following
                  ?
                    <button className="btn btn-sm btn-secondary"  onClick={this.unfollow.bind(this)}>
                      <i className="ion-minus-round" />
                      &nbsp;
                      Unfollow {this.props.article.article.author.username}<span className="counter" />
                    </button>
                  :
                    <button className="btn btn-sm btn-outline-secondary"  onClick={this.follow.bind(this)}>
                      <i className="ion-plus-round" />
                      &nbsp;
                      Follow {this.props.article.article.author.username}<span className="counter" />
                    </button>
              }
              &nbsp;
              {
                this.props.article.article.favorited
                  ?
                    <button className="btn btn-sm btn-primary" onClick={this.unfavorite.bind(this)}>
                      <i className="ion-heart" />
                      &nbsp;
                      Unfavorite Post
                      &nbsp;
                      <span className="counter">({this.props.article.article.favoritesCount})</span>
                    </button>
                  :
                    <button className="btn btn-sm btn-outline-primary" onClick={this.favorite.bind(this)}>
                      <i className="ion-heart" />
                      &nbsp;
                      Favorite Post
                      &nbsp;
                      <span className="counter">({this.props.article.article.favoritesCount})</span>
                    </button>
              }
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
              {
                this.props.user && this.props.user.id
                  ?
                    <form className="card comment-form">
                      <div className="card-block">
                        <textarea className="form-control" placeholder="Write a comment..." rows="3" />
                      </div>
                      <div className="card-footer">
                        <img alt="" src={this.props.user.image} className="comment-author-img" />
                        &nbsp;
                        <Link to={`/author/${this.props.user.username}`}>{this.props.user.username}</Link>
                        <button className="btn btn-sm btn-primary">
                         Post Comment
                        </button>
                      </div>
                    </form>
                  :
                    null
              }
              {
                this.props.article.comments.map(comment => (
                  <div className="card" key={comment.id}>
                    <div className="card-block">
                      <p className="card-text">
                        {comment.body}
                      </p>
                    </div>
                    <div className="card-footer">
                      <Link to={`/author/${comment.author.username}`} className="comment-author">
                        <img alt="" src={comment.author.image} className="comment-author-img" />
                      </Link>
                      &nbsp;
                      <Link to={`/author/${comment.author.username}`} className="comment-author">{comment.author.username}</Link>
                      <span className="date-posted">{comment.updatedAt}</span>
                    </div>
                  </div>
                ))
              }
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

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { me } from '../../redux/services/user';
import { article, follow, favorite } from '../../redux/services/article';
import Link from '../asyncLink';

class Article extends React.PureComponent {
  static async getInitialProps({ req, dispatch, user, match }) {
    await dispatch(me({ req }));
    await dispatch(article({ req, slug: match.params[0] }));
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
      author: this.props.article.author.username,
      method: 'post',
    }));
    event.target.blur();
  }

  unfollow(event) {
    this.props.dispatch(follow({
      author: this.props.article.author.username,
      method: 'delete',
    }));
    event.target.blur();
  }

  favorite(event) {
    this.props.dispatch(favorite({
      slug: this.props.article.slug,
      method: 'post',
    }));
    event.target.blur();
  }

  unfavorite(event) {
    this.props.dispatch(favorite({
      slug: this.props.article.slug,
      method: 'delete',
    }));
    event.target.blur();
  }

  render() {
    return (
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{this.props.article.title}</h1>
            <div className="article-meta">
              <Link to={`/author/${this.props.article.author.username}`}>
                <img alt="" src={this.props.article.author.image} />
              </Link>
              <div className="info">
                <Link to={`/author/${this.props.article.author.username}`} className="author">{this.props.article.author.username}</Link>
                <span className="date">{this.props.article.updatedAt}</span>
              </div>
              {
                this.props.article.author.following
                  ?
                    <button className="btn btn-sm btn-secondary" onClick={this.unfollow.bind(this)}>
                      <i className="ion-minus-round" />
                      &nbsp;
                      Unollow {this.props.article.author.username} <span className="counter" />
                    </button>
                  :
                    <button className="btn btn-sm btn-outline-secondary" onClick={this.follow.bind(this)}>
                      <i className="ion-plus-round" />
                      &nbsp;
                      Follow {this.props.article.author.username} <span className="counter" />
                    </button>
              }
              &nbsp;&nbsp;
              {
                this.props.article.favorited
                  ?
                    <button className="btn btn-sm btn-primary" onClick={this.unfavorite.bind(this)}>
                      <i className="ion-heart" />
                      &nbsp;
                      Unfavorite Post
                      &nbsp;
                      <span className="counter">({this.props.article.favoritesCount})</span>
                    </button>
                  :
                    <button className="btn btn-sm btn-outline-primary" onClick={this.favorite.bind(this)}>
                      <i className="ion-heart" />
                      &nbsp;
                      Favorite Post
                      &nbsp;
                      <span className="counter">({this.props.article.favoritesCount})</span>
                    </button>
              }
            </div>
          </div>
        </div>
        <div className="container page">
          <div className="row article-content">
            <div className="col-md-12">
              <ReactMarkdown>{this.props.article.body}</ReactMarkdown>
            </div>
          </div>
          <hr />
          <div className="article-actions">
            <div className="article-meta">
              <Link to={`/author/${this.props.article.author.username}`}>
                <img alt="" src={this.props.article.author.image} />
              </Link>
              <div className="info">
                <Link to={`/author/${this.props.article.author.username}`} className="author">
                  {this.props.article.author.username}
                </Link>
                <span className="date">{this.props.article.updatedAt}</span>
              </div>
              {
                this.props.article.author.following
                  ?
                    <button className="btn btn-sm btn-secondary"  onClick={this.unfollow.bind(this)}>
                      <i className="ion-minus-round" />
                      &nbsp;
                      Unfollow {this.props.article.author.username}<span className="counter" />
                    </button>
                  :
                    <button className="btn btn-sm btn-outline-secondary"  onClick={this.follow.bind(this)}>
                      <i className="ion-plus-round" />
                      &nbsp;
                      Follow {this.props.article.author.username}<span className="counter" />
                    </button>              
              }
              &nbsp;
              {
                this.props.article.favorited
                  ?
                    <button className="btn btn-sm btn-primary" onClick={this.unfavorite.bind(this)}>
                      <i className="ion-heart" />
                      &nbsp;
                      Unfavorite Post
                      &nbsp;
                      <span className="counter">({this.props.article.favoritesCount})</span>
                    </button>
                  :
                    <button className="btn btn-sm btn-outline-primary" onClick={this.favorite.bind(this)}>
                      <i className="ion-heart" />
                      &nbsp;
                      Favorite Post
                      &nbsp;
                      <span className="counter">({this.props.article.favoritesCount})</span>
                    </button>
              }
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-8 offset-md-2">
              <form className="card comment-form">
                <div className="card-block">
                  <textarea className="form-control" placeholder="Write a comment..." rows="3" />
                </div>
                <div className="card-footer">
                  <img alt="" src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                  <button className="btn btn-sm btn-primary">
                   Post Comment
                  </button>
                </div>
              </form>
              <div className="card">
                <div className="card-block">
                  <p className="card-text">
                    With supporting text below as a natural lead-in to additional content.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="" className="comment-author">
                    <img alt="" src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
                  </a>
                  &nbsp;
                  <a href="" className="comment-author">Jacob Schmidt</a>
                  <span className="date-posted">Dec 29th</span>
                </div>
              </div>
              <div className="card">
                <div className="card-block">
                  <p className="card-text">
                    With supporting text below as a natural lead-in to additional content.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="" className="comment-author">
                    <img alt="" src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img" />
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

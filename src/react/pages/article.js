import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { me } from '../../redux/services/user';
import { article, comments, addComment, deleteComment, follow, favorite } from '../../redux/services/article';
import Link from '../asyncLink'; // eslint-disable-line
import Following from '../components/following';


class Article extends React.PureComponent {
  static async getInitialProps({ req, dispatch, match, user }) {
    const promises = [
      dispatch(article({ req, slug: match.params[0] })),
      dispatch(comments({ req, slug: match.params[0] })),
    ];
    if (req && !user) {
      promises.unshift(dispatch(me({ req })));
    }
    await Promise.all(promises);
  }

  async componentDidMount() {
    if (this.props.history.action === 'POP') {
      await Article.getInitialProps(this.props);
    }
    this.commentBody = '';
  }

  async componentWillUnmount() {
    // this.props.dispatch(clearErrors());
  }

  addComment(event) {
    event.preventDefault();
    if (this.props.article.transition) {
      return;
    }
    const body = this.commentInput.value;
    if (!body || body === this.commentBody) {
      return;
    }
    this.commentBody = body;
    this.props.dispatch(addComment({
      slug: this.props.article.article.slug,
      body,
    }));
  }

  async deleteComment(id) {
    this.props.dispatch(deleteComment({
      id,
      slug: this.props.article.article.slug,
    }));
  }

  follow = async (event) => {
    event.persist();
    await this.props.dispatch(follow({
      author: this.props.article.article.author.username,
      method: this.props.article.article.author.following ? 'delete' : 'post',
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
                this.props.article.article.author.username === this.props.user.username
                ?
                  <Link className="btn btn-sm btn-secondary" to={`/edit/${this.props.article.article.slug}`}>
                    <i className="ion-edit" />
                    &nbsp;
                    Edit <span className="counter" />
                </Link>
                :
                  null
              }
              &nbsp;&nbsp;
              <Following
                profile={this.props.article.article.author}
                user={this.props.user}
                onClick={this.follow}
              />
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
          {
            this.props.article.article.tagList && this.props.article.article.tagList.length
              ?
                <ul className="tag-list">
                  {
                    this.props.article.article.tagList.map(tag => (
                      <li className="tag-default tag-pill tag-outline" key={tag}><Link to={`/tag/${tag}`}>{tag}</Link></li>
                    ))
                  }
                </ul>
              : null
          }
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
              <Following
                profile={this.props.article.article.author}
                user={this.props.user}
                onClick={this.follow}
              />
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
                    <form className="card comment-form" onSubmit={this.addComment.bind(this)}>
                      <div className="card-block">
                        <textarea
                          className="form-control"
                          placeholder="Write a comment..."
                          rows="3"
                          ref={input => this.commentInput = input}
                        />
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
                      {
                        comment.author.username === (this.props.user && this.props.user.username)
                          ?
                            <span class="mod-options" onClick={() => this.deleteComment(comment.id)}>
                              <i class="ion-trash-a" />
                            </span>
                          :
                            null
                      }
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

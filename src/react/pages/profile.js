import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { me, clearErrors } from '../../redux/services/user';
import { getProfile, follow } from '../../redux/services/profile';
import { feed } from '../../redux/services/articles';
import ArticlePreview from '../components/articlePreview';
import NavItem from '../components/navItem';
import Pagination from '../components/pagination';


class Profile extends React.PureComponent {
  static async getInitialProps({ req, dispatch, user, match, profile, articles }) {
    const promises = [];
    promises.push(dispatch(me({ req })));
    const page = Number(match.params.page) || 1;
    const author = match.params.author;
    const filter = match.params[0];
    if (!profile || profile.username !== author) {
      promises.push(dispatch(getProfile({ req, author })))
    }
    promises.push(dispatch(feed({ req, filter, author, page })));
    await Promise.all(promises);
  }

  componentDidMount() {
    if (this.props.history.action === 'POP') {
      Profile.getInitialProps(this.props);
    }
  }

  componentWillUnmount() {
    this.props.dispatch(clearErrors());
  }

  follow(event) {
    this.props.dispatch(follow({
      author: this.props.profile.username,
      method: 'post',
    }));
    event.target.blur();
  }

  unfollow(event) {
    this.props.dispatch(follow({
      author: this.props.profile.username,
      method: 'delete',
    }));
    event.target.blur();
  }

  render() {
    const count = this.props.articles.articlesCount;
    const { pageLength } = this.props.articles;
    const page = Number(this.props.match.params.page) || 1;
    const { author } = this.props.match.params;
    return (
      <div className="profile-page">
        <div className="user-info">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <img alt="" src={this.props.profile.image} className="user-img" />
                <h4>{this.props.profile.username}</h4>
                <p>{this.props.profile.bio}</p>
                {
                  this.props.user && this.props.user.id && this.props.user.username !== this.props.profile.username
                    ?
                      this.props.profile.following
                        ?
                          <button
                            className="btn btn-sm btn-outline-secondary action-btn"
                            onClick={this.unfollow.bind(this)}
                          >
                            <i className="ion-minus-round" />
                            &nbsp;
                            Unfollow {this.props.profile.username}
                          </button>
                        :
                          <button
                            className="btn btn-sm btn-outline-secondary action-btn"
                            onClick={this.follow.bind(this)}
                          >
                            <i className="ion-plus-round" />
                            &nbsp;
                            Follow {this.props.profile.username}
                          </button>
                    : null
                }
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <div className="articles-toggle">
                <ul className="nav nav-pills outline-active">
                  <NavItem to={`/author/${this.props.profile.username}`} data-test={`/author/${this.props.profile.username}`}>My Articles</NavItem>
                  <NavItem to={`/favorited/${this.props.profile.username}`}>Favorited Articles</NavItem>
                </ul>
              </div>
              {
                this.props.articles.articles.map(article =>
                  <ArticlePreview {...article} user={this.props.user} key={article.slug} />)
              }
              <Pagination {...{ count, pageLength, page, author }} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string,
    params: PropTypes.object,
  }).isRequired,
  hydrated: PropTypes.bool.isRequired,
  profile: PropTypes.shape({
    username: PropTypes.string,
    image: PropTypes.string,
    bio: PropTypes.string,
    following: PropTypes.bool,
  }).isRequired,
  articles: PropTypes.shape({
    page: PropTypes.number,
    pageLength: PropTypes.number,
    articlesCount: PropTypes.number,
    articles: PropTypes.arrayOf(PropTypes.shape({ slug: PropTypes.string })),
  }).isRequired,
};

export default connect(state => ({
  user: state.user,
  articles: state.articles,
  profile: state.profile,
  hydrated: state.hydrated,
}))(Profile);

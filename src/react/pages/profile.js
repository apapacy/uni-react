import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { me, clearErrors } from '../../redux/services/user';
import { feed } from '../../redux/services/articles';
import ArticlePreview from '../components/articlePreview';
import NavItem from '../components/navItem';
import Pagination from '../components/pagination';


class Profile extends React.PureComponent {
  static async getInitialProps({ req, dispatch, user, match }) {
    if (!user || !user.id) {
      await dispatch(me({ req }));
    }
    const page = Number(match.params.page) || 1;
    await dispatch(feed({ req, filter0: 'feed', page }));
  }

  async componentDidMount() {
    await Profile.getInitialProps(this.props);
  }

  async componentWillUnmount() {
    this.props.dispatch(clearErrors());
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
                <img alt="User Name" src="http://i.imgur.com/Qr71crq.jpg" className="user-img" />
                <h4>Eric Simons</h4>
                <p>
                  Cofounder @GoThinkster, lived in Aol&apos;s HQ for a few months,
                  kinda looks like Peeta from the Hunger Games
                </p>
                <button className="btn btn-sm btn-outline-secondary action-btn">
                  <i className="ion-plus-round" />
                  &nbsp;
                  Follow Eric Simons
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <div className="articles-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a className="nav-link active" href="">My Articles</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">Favorited Articles</a>
                  </li>
                </ul>
              </div>
              {
                this.props.articles.articles.map(article =>
                  <ArticlePreview {...article} key={article.slug} />)
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
  articles: PropTypes.shape({
    page: PropTypes.number,
    pageLength: PropTypes.number,
    articlesCount: PropTypes.number,
    articles: PropTypes.arrayOf(PropTypes.shape({ slug: PropTypes.string })),
  }).isRequired,
};

export default connect(state => ({ user: state.user, articles: state.articles }))(Profile);

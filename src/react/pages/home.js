import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { me, clearErrors } from '../../redux/services/user';
import { feed } from '../../redux/services/articles';
import ArticlePreview from '../components/articlePreview';
import NavItem from '../components/navItem';
import Pagination from '../components/pagination';


class Home extends React.PureComponent {
  static async getInitialProps({ req, dispatch, user, match, articles }) {
    if (!user || !user.id) {
      await dispatch(me({ req }));
    }
    const page = Number(match.params.page) || 1;
    let filter
    if (match.path.slice(0, 5) === '/feed')  {
      filter = 'feed';
    } else {
      filter = undefined;
    }
    if (!articles || articles.filter !== filter || articles.page !== page) {
      await dispatch(feed({ req, filter, page }));
    }
  }

  async componentDidMount() {
    await Home.getInitialProps(this.props);
  }

  async componentWillUnmount() {
    this.props.dispatch(clearErrors());
  }

  render() {
    const count = this.props.articles.articlesCount;
    const { pageLength } = this.props.articles;
    const page = Number(this.props.match.params.page) || 1;
    return (
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p className="test">A place to share your knowledge.</p>
          </div>
        </div>
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <NavItem to="/feed">Your Feed</NavItem>
                  <NavItem to="/">Global Feed</NavItem>
                </ul>
              </div>
              {
                this.props.articles.articles.map(article =>
                  <ArticlePreview {...article} user={this.props.user} key={article.slug} />)
              }
              <Pagination {...{ count, pageLength, page }} />
            </div>
            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
                <div className="tag-list">
                  <a href="/" className="tag-pill tag-default">programming</a>
                  <a href="/" className="tag-pill tag-default">javascript</a>
                  <a href="/" className="tag-pill tag-default">emberjs</a>
                  <a href="/" className="tag-pill tag-default">angularjs</a>
                  <a href="/" className="tag-pill tag-default">react</a>
                  <a href="/" className="tag-pill tag-default">mean</a>
                  <a href="/" className="tag-pill tag-default">node</a>
                  <a href="/" className="tag-pill tag-default">rails</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
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

export default connect(state => ({ user: state.user, articles: state.articles }))(Home);

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { me, clearErrors } from '../../redux/services/user';
import { feed } from '../../redux/services/articles';
import ArticlePreview from '../components/articlePreview';
import NavItem from '../components/navItem';


class Home extends React.PureComponent {
  static async getInitialProps({ req, dispatch, user }) {
    if (!user || !user.id) {
      await dispatch(me({ req }));
    }
    await dispatch(feed({ req, filter0: 'feed' }));
  }

  async componentDidMount() {
    await Home.getInitialProps(this.props);
  }

  async componentWillUnmount() {
    this.props.dispatch(clearErrors());
  }

  render() {
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
                  <ArticlePreview {...article} key={article.slug} />)
              }
              {
                this.props.articles.articlesCount && this.props.articles.pageLength
                  && this.props.articles.articlesCount > this.props.articles.pageLength
                  ?
                    <nav>
                      <ul className="pagination">
                        {
                          _.range(1, 1 + Math.floor(this.props.articles.articlesCount /
                            this.props.articles.pageLength)).map(index => (
                              <li className={`page-item${index === this.props.articles.page ? ' active' : ''}`} key={index}>
                                <Link className="page-link" to="/">{index}</Link>
                              </li>))
                        }
                      </ul>
                    </nav>
                  :
                    null
              }
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
  match: PropTypes.shape({ url: PropTypes.string }).isRequired,
  articles: PropTypes.shape({
    page: PropTypes.number,
    pageLength: PropTypes.number,
    articlesCount: PropTypes.number,
    articles: PropTypes.arrayOf(PropTypes.shape({ slug: PropTypes.string })),
  }).isRequired,
};

export default connect(state => ({ user: state.user, articles: state.articles }))(Home);

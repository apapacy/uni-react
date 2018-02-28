import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { me, clearErrors } from '../../redux/services/user';
import { article } from '../../redux/services/article';


class Editor extends React.PureComponent {
  static async getInitialProps({ req, dispatch, user, match }) {
    const promises = [];
    if (req && !user) {
      promises.unshift(dispatch(me({ req })));
    }
    const slug = match.params.slug;
    if (slug) {
      promises.push(dispatch(article({ req, slug })));
    }
    await Promise.all(promises);
  }

  constructor(...args) {
    super(...args);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      description: '',
      body: '',
      tagList: '',
      ...this.props.article.article,
      tagList: this.props.article.article.tagList.join(', '),
    };
  }

  async componentDidMount() {
    if (this.state.hydrated & this.props.history.action === 'POP') {
      await Editor.getInitialProps(this.props);
    }
  }

  async componentWillUnmount() {
    // this.props.dispatch(clearErrors());
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              <form>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Article Title"
                      name="title"
                      onChange={this.handleChange}
                      value={this.state.title}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What's this article about?"
                      name="description"
                      onChange={this.handleChange}
                      value={this.state.description}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      className="form-control"
                      rows="8"
                      placeholder="Write your article (in markdown)"
                      name="body"
                      onChange={this.handleChange}
                      value={this.state.body}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter tags"
                      name="tagList"
                      onChange={this.handleChange}
                      value={this.state.tagList}
                    />
                    <div className="tag-list" />
                  </fieldset>
                  <button
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="button"
                  >
                      Publish Article
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  dispatch: PropTypes.func.isRequired,
  hydrated: PropTypes.bool.isRequired,
};

export default connect(state => ({ user: state.user, hydrated: state.hydrated, article: state.article }))(Editor);

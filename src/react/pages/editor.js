import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { me, clearErrors } from '../../redux/services/user';


class Editor extends React.PureComponent {
  static async getInitialProps({ req, dispatch, user }) {
    if (user && user.id) {
      return;
    }
    await dispatch(me({ req }));
  }

  async componentDidMount() {
    if (this.props.history.action === 'POP') {
      await Editor.getInitialProps(this.props);
    }
  }

  async componentWillUnmount() {
    // this.props.dispatch(clearErrors());
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
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="What's this article about?"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <textarea
                      className="form-control"
                      rows="8"
                      placeholder="Write your article (in markdown)"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter tags"
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

export default connect(state => ({ user: state.user, hydrated: state.hydrated }))(Editor);

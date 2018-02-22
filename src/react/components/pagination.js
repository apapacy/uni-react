import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import _ from 'lodash';

function prepareLink(path, page, author) {
  let basePath = path.split(':')[0];
  [basePath] = basePath.split('/page/');
  if (page === 1) {
    if (author) {
      return `${basePath}${author}`;
    }
    return basePath;
  }
  if (basePath.slice(-1) !== '/') {
    basePath = `${basePath}/`;
  }
  if (author) {
    return `${basePath}${author}/page/${page}`;
  }
  return `${basePath}page/${page}`;
}

const Pagination = ({ count, pageLength, page, match, author }) => ( // eslint-disable-line
  count && pageLength && count > pageLength
    ?
      <nav>
        <ul className="pagination">
          {
            _.range(1, 1 + Math.floor(count / pageLength)).map(index => (
              <li className={`page-item${index === page ? ' active' : ''}`} key={index}>
                <Link className="page-link" to={prepareLink(match.path, index, author)}>
                  {index}
                </Link>
              </li>))
          }
        </ul>
      </nav>
    : null
);

export default withRouter(Pagination);

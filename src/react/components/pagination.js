import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import _ from 'lodash';

function prepareLink(match, page, author) {
  let [basePath] = match.path.split('/:');
  [basePath] = basePath.split('/(');
  [basePath] = basePath.split(/\/page(\/|$)/);
  if (basePath.slice(0, 1) === '/') {
    basePath = basePath.slice(1);
  }
  if (basePath === 'page') {
    basePath = '';
  }
  const param = match.params[0];
  if (param) {
    if (basePath) {
      basePath = `${basePath}/${param}`;
    } else {
      basePath = param;
    }
  }
  if (page === 1) {
    if (author) {
      return `/${basePath}/${author}`;
    }
    return `/${basePath}`;
  }
  if (author) {
    return `/${basePath}/${author}/page/${page}`;
  }
  if (basePath) {
    return `/${basePath}/page/${page}`;
  }
  return `/page/${page}`;
}

const Pagination = ({ count, pageLength, page, match, author }) => ( // eslint-disable-line
  count && pageLength && count > pageLength
    ?
      <nav>
        <ul className="pagination">
          {
            _.range(1, 1 + Math.floor(count / pageLength)).map(index => (
              <li className={`page-item${index === page ? ' active' : ''}`} key={index}>
                <Link className="page-link" to={prepareLink(match, index, author)}>
                  {index}
                </Link>
              </li>))
          }
        </ul>
      </nav>
    : null
);

export default withRouter(Pagination);

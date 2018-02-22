import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import _ from 'lodash';

function prepareLink(index, path) {
  const pager = '/page/:page';
  let basePath;
  if (path.slice(-11) === pager) {
    basePath = path.slice(0, -10); // end with slash
  } else {
    basePath = path;
  }
  if (index === 1) {
    return basePath;
  }
  return `${basePath}page/${index}`;
}

const Pagination = ({ count, pageLength, page, match }) => ( // eslint-disable-line react/prop-types
  count && pageLength && count > pageLength
    ?
      <nav>
        <ul className="pagination">
          {
            _.range(1, 1 + Math.floor(count / pageLength)).map(index => (
              <li className={`page-item${index === page ? ' active' : ''}`} key={index}>
                <Link className="page-link" to={prepareLink(index, match.path)}>{index}</Link>
              </li>))
          }
        </ul>
      </nav>
    : null
);

export default withRouter(Pagination);

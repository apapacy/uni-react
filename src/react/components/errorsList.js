import React from 'react';

export default(props) => {
  console.log(props)
  if (props.error && props.error.errors) {
    return (
      <ul className="error-messages">
        {
          Object.keys(props.error.errors)
            .map(field => props.error.errors[field]
              .map(message =>
                <li key={`field:${field},message:${message}`}>{field} {message}</li>))
        }
      </ul>
    );
  }
  if (props.error && props.error.message) {
    return (
      <ul className="error-messages">
        <li>{props.error.message}</li>
      </ul>
    );
  }
  return null;
};

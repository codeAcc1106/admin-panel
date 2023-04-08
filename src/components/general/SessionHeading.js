import React from 'react';
import PropTypes from 'prop-types';

const SessionHeading = (props) => {
  const { text, className, children, number } = props;

  return (
    <React.Fragment>
      <div className={`session-heading__main ${children ? 'heading-flex-box' : ''} ${className ? className : ''}`}>
        <div className="heading--content">
          <span className="heading--text">{text}</span>
          {number && <span className="heading--number">{number}</span>}
        </div>
        <span className="underline--highlight" />
        {children && <div className="session-heading--right">{children}</div>}
      </div>
    </React.Fragment>
  );
};

SessionHeading.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default SessionHeading;

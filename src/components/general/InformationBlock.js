import React from 'react';
import PropTypes from 'prop-types';

const InformationBlock = (props) => {
  const { icon, infoTitle, infoText, infoLink, infoLinkName, infoLinkIcon } = props;
  return (
    <div className="information__block">
      <div className="info-icon">{icon}</div>
      <div className="info--wrapper">
        <div className="info-title">{infoTitle}</div>
        <div className="info--text">
          <span className="font-style">{infoText}</span>
          {infoLink && (
            <a href="#" className="info-link--content">
              <span>{infoLinkName}</span>
              <span className="info-link-icon">{infoLinkIcon}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

InformationBlock.propTypes = {
  icon: PropTypes.object,
  infoTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  infoText: PropTypes.string,
  infoLink: PropTypes.bool,
  infoLinkIcon: PropTypes.object,
  infoLinkName: PropTypes.string,
};

export default InformationBlock;

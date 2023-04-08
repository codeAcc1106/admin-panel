import React from 'react';
import PropTypes from 'prop-types';
import { BsThreeDots } from 'react-icons/bs';
import Button from 'components/inputs/Button';
import DropDown from '../inputs/DropDown';

const ActivityItem = (props) => {
  let { icon, metaIcon, isMetaIcon, showUpdateButton, text, date, onClickButton, dropdownList } = props;

  if (!onClickButton) {
    onClickButton = () => {};
  }

  return (
    <div className="activity-item__main">
      <div className="activity-item--inner">
        {icon && (
          <div className="activity-left-icon__main-block">
            <div className="activity-icon--block">
              <div className="activity_icon__inner">
                <div className="activity--icon">{icon}</div>
                {isMetaIcon && <div className="activity-status--icon">{metaIcon}</div>}
              </div>
            </div>
          </div>
        )}
        <div className="activity-content__main-block">
          <div className="activity-content--inner">
            <div className="activity-details--content-block">
              <div className="activity-details-block">{text}</div>
              <span className="activity-timing">{date}</span>
            </div>
            <div className="activity-item__right-block">
              {showUpdateButton ? (
                <Button className="update-button" onClick={onClickButton}>
                  Update
                </Button>
              ) : (
                dropdownList && (
                  <DropDown
                    popupClass="bottom-left"
                    trigger={
                      <div className="">
                        <BsThreeDots />
                      </div>
                    }
                    triggerClass=""
                  >
                    <ul>{dropdownList}</ul>
                  </DropDown>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ActivityItem.propTypes = {
  icon: PropTypes.object,
  metaIcon: PropTypes.object,
  isMetaIcon: PropTypes.bool,
  showUpdateButton: PropTypes.bool,
  text: PropTypes.node,
  dropdownList: PropTypes.node,
  onClickButton: PropTypes.func,
  date: PropTypes.string,
};

export default ActivityItem;

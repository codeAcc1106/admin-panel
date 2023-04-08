import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import Button from 'components/inputs/Button';
import * as _ from 'lodash';


const DeleteModal = (props) => {
  const { title = '', onClose = _.noop(), onRemove = _.noop() } = props;

  return (
    <React.Fragment>
      <div className="delete-modal-main_page">
        <div className="delete-modal--inner">
          <div className="delete-modal---block_title">
            <div className="inner--block_title">
              <div className="title">Remove {title}</div>
              <p className="sub-title">Are you sure you want to remove this {_.toLower(title)}?</p>
            </div>
          </div>
          <div className="delete-modal-input-box__block">
            <Row>
              <Col lg={6}>
                <Button className="delete-model--btn cancel--btn" onClick={onClose}>
                  Cancel
                </Button>
              </Col>
              <Col lg={6}>
                <Button className="delete-model--btn  remove--btn" onClick={onRemove}>
                  Remove
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
DeleteModal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  onRemove: PropTypes.func,
};
export default DeleteModal;

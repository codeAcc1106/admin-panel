import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Pagination = (props) => {
  const { className, currentPage, limit, total, onPageChange } = props;
  const pageSize = Math.ceil(total / limit);
  let startItem = (currentPage - 1) * limit + 1;
  let endItem = startItem + limit - 1;

  if (startItem === 0) {
    startItem = 1;
  }

  if (endItem < limit) {
    endItem = limit;
  } else if (endItem > total) {
    endItem = total;
  }

  const handleClickPrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleClickNext = () => {
    if (currentPage < pageSize) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={`pagination-block__main ${className ? className : ''}`}>
      <div className="pagination-block--inner">
        <div className="pagination-data-count--block">
          Showing {startItem}-{endItem} of {total}
        </div>
        <div className="pagination-btn--block">
          <div className={`arrow--btn ${currentPage <= 1 ? 'disabled' : ''}`} onClick={handleClickPrev}>
            <BsArrowLeft />
          </div>
          <div className={`arrow--btn ${currentPage >= pageSize ? 'disabled' : ''}`} onClick={handleClickNext}>
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  limit: PropTypes.number,
  total: PropTypes.number,
  className: PropTypes.string,
  onPageChange: PropTypes.func,
};
export default Pagination;

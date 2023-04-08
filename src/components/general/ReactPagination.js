import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const ReactPagination = (props) => {
  let { totalPages, handlePageClick, className, currentPage, limit, total } = props;
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

  return (
    <div className={`react-pagination-block__main ${className ? className : ''}`}>
      <div className="react-pagination-block--inner">
        <div className="react-pagination-data-count--block">
          Showing {startItem}-{endItem} of {total}
        </div>
        <div className="react-pagination---block">
          <ReactPaginate
            {...props}
            previousLabel={<BsArrowLeft />}
            nextLabel={<BsArrowRight />}
            breakLabel={'..'}
            forcePage={currentPage - 1}
            breakClassName={'break-me'}
            pageCount={totalPages}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </div>
      </div>
    </div>
  );
};

ReactPagination.propTypes = {
  totalPages: PropTypes.number,
  handlePageClick: PropTypes.func,
  className: PropTypes.string,
  currentPage: PropTypes.number,
  limit: PropTypes.number,
  total: PropTypes.number,
};
export default ReactPagination;

import React from 'react';
import { css } from '@emotion/core';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';

class SvgRenderer extends React.Component {
  render() {
    const { path, wrapperclass, className, style, ...rest } = this.props;

    return (
      <ReactSVG
        {...rest}
        path={path}
        src={path}
        svgclassname={className}
        className={`svg-wrap d-flex align-items-center ${wrapperclass ? wrapperclass : ''} ${wrapStyle}`}
        svgstyle={style}
      />
    );
  }
}

SvgRenderer.propTypes = {
  path: PropTypes.string,
  wrapperclass: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
  }),
};
export default SvgRenderer;

const wrapStyle = css`
  > div {
    display: inherit;
    height: auto;
  }

  svg {
    height: inherit;
  }
`;

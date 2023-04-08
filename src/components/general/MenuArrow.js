import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import SvgRenderer from 'components/general/SvgRenderer';
import arrow from 'assets/svg/general/down-arrow-red.svg';

const Arrow = ({ open, size }) => {
  open = open || false;
  size = size || 20;
  return (
    <Rotator open={open}>
      <SvgRenderer path={arrow} style={{ width: size, height: size }} />
    </Rotator>
  );
};

Arrow.propTypes = {
  open: PropTypes.bool,
  size: PropTypes.number,
};
export default Arrow;

const Rotator = styled('div')`
  transform: rotate(${({ open }) => (open ? 180 : 0)}deg);
  transition: transform 0.3s ease;
`;

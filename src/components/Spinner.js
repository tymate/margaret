import React from 'react';
import styled, { css } from 'styled-components';
import Stack from './Stack';
import 'loaders.css';

const Spin = styled.div`
  > div {
    background-color: ${({ theme }) => theme.spinner?.color || theme.primary};

    ${({ variant }) =>
      (variant === 'button' || variant === 'inline') &&
      css`
        background-color: currentColor;
      `};

    ${({ color }) =>
      Boolean(color) &&
      css`
        background-color: ${({ theme }) =>
          theme.colors?.[color] || theme?.[color]};
      `};
  }
`;

const Wrapper = styled(Stack).attrs({
  alignX: 'center',
  alignY: 'center',
})`
  min-height: ${({ size }) => (Boolean(size) ? undefined : '120px')};
  transform: scale(
    calc(${({ size }) => size || 64} / 64),
    calc(${({ size }) => size || 64} / 64)
  );

  ${({ variant }) =>
    variant === 'button' &&
    css`
      display: block;
      margin-right: ${({ theme }) => theme.spacing(1.5)};
      min-height: 0;
    `};

  ${({ variant }) =>
    variant === 'inline' &&
    css`
      display: block;
      transform: scale(
        calc(${({ size }) => size || 20} / 64),
        calc(${({ size }) => size || 20} / 64)
      );
      min-height: 0;
      margin-right: 1rem;
    `};
`;

const getDotsCount = animation => {
  switch (animation) {
    case 'ball-clip-rotate':
    case 'ball-scale':
    case 'ball-scale-ripple':
    case 'semi-circle-spin':
    case 'square-spin':
    case 'triangle-skew-spin':
      return 1;
    case 'ball-clip-rotate-multiple':
    case 'ball-clip-rotate-pulse':
    case 'ball-zig-zag':
    case 'ball-zig-zag-deflect':
    case 'cube-transition':
      return 2;
    case 'ball-beat':
    case 'ball-pulse':
    case 'ball-pulse-sync':
    case 'ball-rotate':
    case 'ball-scale-multiple':
    case 'ball-scale-ripple-multiple':
    case 'ball-triangle-path':
      return 3;
    case 'ball-pulse-rise':
    case 'line-scale':
    case 'line-scale-pulse-out':
    case 'line-scale-pulse-out-rapid':
    case 'pacman':
      return 5;
    case 'ball-spin-fade-loader':
    case 'line-spin-fade-loader':
      return 8;
    case 'ball-grid-beat':
    case 'ball-grid-pulse':
      return 9;
    default:
      return 0;
  }
};

const Spinner = ({ animation, variant, size }) => (
  <Wrapper variant={variant} size={size}>
    <Spin className={animation} variant={variant}>
      {[...Array(getDotsCount(animation))].map((_, index) => (
        <div key={index} />
      ))}
    </Spin>
  </Wrapper>
);

Spinner.defaultProps = {
  animation: 'ball-spin-fade-loader',
};

export default Spinner;

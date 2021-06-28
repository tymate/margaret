import styled, { css } from 'styled-components';
import { isPlainObject, keys } from 'lodash';
import { setProperty, entries } from '../utils';
import Box from './Box';

const generateAlign = ({ value, direction, theme, property, breakpoint }) => {
  if (breakpoint === 'default') {
    return (direction?.default || 'row') === 'row'
      ? property === 'alignX'
        ? css`
            justify-content: ${value?.default};
          `
        : css`
            align-items: ${value?.default};
          `
      : property === 'alignX'
      ? css`
          align-items: ${value?.default};
        `
      : css`
          justify-content: ${value?.default};
        `;
  }

  const breakpointSize = theme.breakpoints?.[breakpoint];
  const sortedBreakpoints = entries(theme.breakpoints)
    .sort((a, b) => b[1] - a[1])
    .filter(breakpoint => breakpoint[1] <= breakpointSize);
  const directionBreakpoint =
    sortedBreakpoints.filter(
      breakpoint => direction?.[breakpoint?.[0]] !== undefined,
    )?.[0]?.[0] || 'default';
  const alignBreakpoint =
    sortedBreakpoints.filter(
      breakpoint => value?.[breakpoint?.[0]] !== undefined,
    )?.[0]?.[0] || 'default';

  return (direction?.[directionBreakpoint] || 'row') === 'row'
    ? property === 'alignX'
      ? css`
          justify-content: ${value?.[alignBreakpoint]};
        `
      : css`
          align-items: ${value?.[alignBreakpoint]};
        `
    : property === 'alignX'
    ? css`
        align-items: ${value?.[alignBreakpoint]};
      `
    : css`
        justify-content: ${value?.[alignBreakpoint]};
      `;
};

const generateAligns = ({ value, direction, theme, property }) => {
  if (!isPlainObject(value)) {
    value = { default: value };
  }
  if (!isPlainObject(direction)) {
    direction = { default: direction };
  }

  return css`
    ${generateAlign({
      breakpoint: 'default',
      value,
      direction,
      theme,
      property,
    })}

    ${[...new Set(keys(value).concat(keys(direction)))]
      .sort(
        (breakpointA, breakpointB) =>
          theme.breakpoints?.[breakpointA] - theme.breakpoints?.[breakpointB],
      )
      .filter(
        breakpoint =>
          breakpoint !== 'default' && Boolean(theme.media?.[breakpoint]),
      )
      .map(
        breakpoint => theme.media[breakpoint]`
          ${generateAlign({
            value,
            breakpoint,
            direction,
            theme,
            property,
          })}
        `,
      )}
  `;
};

const Stack = styled(Box)`
  display: flex;

  ${({ wrap }) =>
    wrap === 'wrap' &&
    css`
      flex-wrap: wrap;
    `}

  ${({ gap, gutterSize, theme }) =>
    (gap !== undefined || gutterSize !== undefined) &&
    css`
      ${setProperty({
        theme,
        property: 'margin',
        value: gap || gutterSize,
        multiplier: -0.5,
      })}

      > * {
        ${setProperty({
          theme,
          property: 'margin',
          value: gap || gutterSize,
          multiplier: 0.5,
        })}
      }
    `}

  ${({ theme, direction }) =>
    Boolean(direction) &&
    setProperty({
      theme,
      property: 'Direction',
      value: direction,
      prefix: 'flex',
    })}


  ${({ alignX, direction, theme }) =>
    alignX !== undefined &&
    generateAligns({ value: alignX, direction, theme, property: 'alignX' })}

  ${({ alignY, direction, theme }) =>
    alignY !== undefined &&
    generateAligns({ value: alignY, direction, theme, property: 'alignY' })}
`;

export default Stack;

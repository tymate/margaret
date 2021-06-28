import styled, { css } from 'styled-components';
import { gutterSizes, media } from '../ui/utils';
import Box from './Box';
import { keys } from 'lodash';

const Stack = styled(Box)`
  display: flex;

  ${({ direction }) =>
    typeof direction === 'string' &&
    css`
      flex-direction: ${({ direction }) => direction};
    `}

  ${({ direction }) =>
    typeof direction === 'object' &&
    css`
      flex-direction: ${({ direction }) => direction?.default};
      align-items: ${({ alignX, alignY }) =>
        direction?.default === 'row'
          ? typeof alignY === 'object'
            ? alignY?.default
            : alignY
          : typeof alignX === 'object'
          ? alignX?.default
          : alignX};
      justify-content: ${({ alignX, alignY }) =>
        direction?.default === 'row'
          ? typeof alignX === 'object'
            ? alignX?.default
            : alignX
          : typeof alignY === 'object'
          ? alignY?.default
          : alignY};

      > * + * {
        ${({ theme, gutterSize }) =>
          gutterSizes({
            theme,
            gutterSize,
            direction: direction?.default === 'column' ? 'top' : 'left',
          })};
      }

      ${keys(direction)
        .filter(key => key !== 'default')
        .map(
          breakpoint => media[breakpoint]`
            flex-direction: ${({ direction }) => direction[breakpoint]};
            align-items: ${({ alignX, alignY }) =>
              direction[breakpoint] === 'row'
                ? typeof alignY === 'object'
                  ? alignY[breakpoint]
                  : alignY
                : typeof alignX === 'object'
                ? alignX[breakpoint]
                : alignX};
            justify-content: ${({ alignX, alignY }) =>
              direction[breakpoint] === 'row'
                ? typeof alignX === 'object'
                  ? alignX[breakpoint]
                  : alignX
                : typeof alignY === 'object'
                ? alignY[breakpoint]
                : alignY};

            > * + * {
              ${({ theme, gutterSize }) =>
                gutterSizes({
                  theme,
                  gutterSize: 0,
                  direction:
                    direction[breakpoint] === 'column' ? 'left' : 'top',
                })};

              ${({ theme, gutterSize }) =>
                gutterSizes({
                  theme,
                  gutterSize,
                  direction:
                    direction[breakpoint] === 'column' ? 'top' : 'left',
                })};
                
              align-items: ${({ alignX, alignY }) =>
                direction[breakpoint] === 'column' ? alignX : alignY};
              justify-content: ${({ alignX, alignY }) =>
                direction[breakpoint] === 'column' ? alignY : alignX};
            }
          `,
        )}
    `}

  ${({ direction }) =>
    direction === 'row' &&
    css`
      align-items: ${({ alignY }) => alignY};
      justify-content: ${({ alignX }) => alignX};

      > * + * {
        ${({ theme, gutterSize }) =>
          gutterSizes({ theme, gutterSize, direction: 'left' })};
      }

      ${({ variant }) =>
        variant === 'multiLine' &&
        css`
          flex-wrap: wrap;

          ${({ theme, gutterSize }) =>
            gutterSizes({
              theme,
              gutterSize: -1 * gutterSize,
              direction: 'left',
            })};
          ${({ theme, gutterSize }) =>
            gutterSizes({
              theme,
              gutterSize: -1 * gutterSize,
              direction: 'top',
            })};

          > * {
            ${({ theme, gutterSize }) =>
              gutterSizes({ theme, gutterSize, direction: 'left' })};
            ${({ theme, gutterSize }) =>
              gutterSizes({ theme, gutterSize, direction: 'top' })};
          }
        `}
    `}

  ${({ direction }) =>
    direction === 'column' &&
    css`
      align-items: ${({ alignX }) => alignX};
      justify-content: ${({ alignY }) => alignY};

      > * + * {
        ${({ theme, gutterSize }) =>
          gutterSizes({ theme, gutterSize, direction: 'top' })};
      }
    `}
`;

Stack.defaultProps = {
  direction: 'row',
  alignX: 'flex-start',
  alignY: 'flex-start',
};

export default Stack;

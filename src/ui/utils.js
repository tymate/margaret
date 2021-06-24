import { css } from 'styled-components';
import { keys } from 'lodash';

export const BASE = 1;
export const spacing = (input = 1) => `${input}rem`;

export const viewportSizes = {
  desktop: 1200,
  medium: 1000,
  tablet: 750,
};

const mediaQuery = (...query) => (...rules) =>
  css`
    @media ${css(...query)} {
      ${css(...rules)};
    }
  `;

export const media = {
  tablet: mediaQuery`(min-width: ${viewportSizes.tablet / 16}em)`,
  medium: mediaQuery`(min-width: ${viewportSizes.medium / 16}em)`,
  desktop: mediaQuery`(min-width: ${viewportSizes.desktop / 16}em)`,
};

const cssLock = ({
  valueUnit = '',
  minValue,
  maxValue,
  lowerBreakpoint,
  higherBreakpoint,
}) =>
  `calc((${minValue} * 1${valueUnit}) + (${maxValue} - ${minValue}) * ((100vw - ${
    lowerBreakpoint / 16
  }rem) / (${higherBreakpoint / 16} - ${lowerBreakpoint / 16})))`;

export const injectMargaret = theme => {
  theme.breakpoints =
    theme.breakpoints || theme.viewportSizes || viewportSizes || {};

  theme.spacing = (input = 1) => `${input * 1}rem`;

  theme.media = keys(theme.breakpoints).reduce(
    (media, breakpoint) => ({
      ...media,
      [breakpoint]: mediaQuery`(min-width: ${
        theme.breakpoints?.[breakpoint] / 16
      }em)`,
    }),
    {},
  );

  theme.fontSize = keys(theme.fontStacks).reduce(
    (acc, breakpoint) => ({
      ...acc,
      [breakpoint]: css`
        font-size: ${theme.fontStacks?.[breakpoint]?.sizeMinRem}rem;

        ${theme.media[theme.cssLockLowerBreakpoint || 'tablet']`
          font-size: ${cssLock({
            valueUnit: 'rem',
            minValue: theme.fontStacks?.[breakpoint]?.sizeMinRem,
            maxValue: theme.fontStacks?.[breakpoint]?.sizeMaxRem,
            lowerBreakpoint:
              theme.breakpoints?.[theme.cssLockLowerBreakpoint || 'tablet'],
            higherBreakpoint:
              theme.breakpoints?.[theme.cssLockHigherBreakpoint || 'desktop'],
          })};
        `}

        ${theme.media[theme.cssLockHigherBreakpoint || 'desktop']`
          font-size: ${theme.fontStacks?.[breakpoint]?.sizeMaxRem}rem;
        `}
      `,
    }),
    {},
  );

  theme.lineHeight = keys(theme.fontStacks).reduce(
    (acc, breakpoint) => ({
      ...acc,
      [breakpoint]: css`
        line-height: ${theme.fontStacks?.[breakpoint]?.lineHeightMin}em;

        ${theme.media[theme.cssLockLowerBreakpoint || 'tablet']`
          line-height: ${cssLock({
            minValue: theme.fontStacks?.[breakpoint]?.lineHeightMin,
            maxValue: theme.fontStacks?.[breakpoint]?.lineHeightMax,
            lowerBreakpoint:
              theme.breakpoints?.[theme.cssLockLowerBreakpoint || 'tablet'],
            higherBreakpoint:
              theme.breakpoints?.[theme.cssLockHigherBreakpoint || 'desktop'],
          })};
        `}

        ${theme.media[theme.cssLockHigherBreakpoint || 'desktop']`
          line-height: ${theme.fontStacks?.[breakpoint]?.lineHeightMax}em;
        `}
      `,
    }),
    {},
  );

  theme.fontStyles = keys(theme.fontStacks).reduce(
    (acc, style) => ({
      ...acc,
      [style]: css`
        ${theme.fontSize[style]}
        ${theme.lineHeight[style]}
        ${Boolean(theme.fontStacks?.[style]?.fontWeight) &&
        css`
          font-weight: ${theme.fontStacks[style]?.fontWeight};
        `}
        ${Boolean(theme.fontStacks?.[style]?.color) &&
        css`
          color: ${theme.colors?.[theme.fontStacks[style].color] ||
          theme?.[theme.fontStacks[style].color]};
        `}
        ${Boolean(theme.fontStacks?.[style]?.fontFamily) &&
        css`
          font-family: ${theme.fonts?.[theme.fontStacks[style].fontFamily]};
        `}
      `,
    }),
    {},
  );

  return theme;
};

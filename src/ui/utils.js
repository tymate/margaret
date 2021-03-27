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
  theme.spacing = (input = 1) => `${input * 1}rem`;

  theme.media = keys(theme.viewportSizes || viewportSizes).reduce(
    (media, breakpoint) => ({
      ...media,
      [breakpoint]: mediaQuery`(min-width: ${
        theme.viewportSizes?.[breakpoint] / 16
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
              theme.viewportSizes[theme.cssLockLowerBreakpoint || 'tablet'],
            higherBreakpoint:
              theme.viewportSizes[theme.cssLockHigherBreakpoint || 'desktop'],
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
              theme.viewportSizes[theme.cssLockLowerBreakpoint || 'tablet'],
            higherBreakpoint:
              theme.viewportSizes[theme.cssLockHigherBreakpoint || 'desktop'],
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
        ${Boolean(theme.lineHeight[style]?.fontWeight) &&
        css`
          font-weight: ${theme.lineHeight[style]?.fontWeight};
        `}
      `,
    }),
    {},
  );

  return theme;
};

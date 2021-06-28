import { css } from 'styled-components';
import { keys } from 'lodash';

export const BASE = 1;
export const spacing = (input = 1) => `${input}rem`;

export const breakpoints = {
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
  tablet: mediaQuery`(min-width: ${breakpoints.tablet / 16}em)`,
  medium: mediaQuery`(min-width: ${breakpoints.medium / 16}em)`,
  desktop: mediaQuery`(min-width: ${breakpoints.desktop / 16}em)`,
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

  theme.media = keys(theme.breakpoints || breakpoints).reduce(
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
              theme.breakpoints[theme.cssLockLowerBreakpoint || 'tablet'],
            higherBreakpoint:
              theme.breakpoints[theme.cssLockHigherBreakpoint || 'desktop'],
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
              theme.breakpoints[theme.cssLockLowerBreakpoint || 'tablet'],
            higherBreakpoint:
              theme.breakpoints[theme.cssLockHigherBreakpoint || 'desktop'],
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

export const getSpacingFromSize = ({ theme, gutterSize }) => {
  if (typeof gutterSize === 'number') {
    return theme.spacing(gutterSize);
  }

  return 0;
};

export const gutterSizes = ({ theme, gutterSize, direction }) => {
  if (typeof gutterSize === 'object') {
    return css`
      margin-${direction}: ${getSpacingFromSize({
      theme,
      gutterSize: gutterSize?.default,
    })};

    ${keys(gutterSize)
      .filter(key => key !== 'default')
      .map(
        breakpoint => media[breakpoint]`
          
          margin-${direction}: ${getSpacingFromSize({
          theme,
          gutterSize: gutterSize[breakpoint],
        })}
        `,
      )};`;
  }

  return css`
    margin-${direction}: ${getSpacingFromSize({ theme, gutterSize })}
  `;
};

export const spacings = props => css`
  ${({ margin }) =>
    (Boolean(margin) || margin === 0) &&
    css`
      margin: ${({ theme }) => theme.spacing(margin)};
    `}

  ${({ marginVertical }) =>
    (Boolean(marginVertical) || marginVertical === 0) &&
    css`
      margin-top: ${({ theme }) => theme.spacing(marginVertical)};
      margin-bottom: ${({ theme }) => theme.spacing(marginVertical)};
    `}

  ${({ marginHorizontal }) =>
    (Boolean(marginHorizontal) || marginHorizontal === 0) &&
    css`
      margin-left: ${({ theme }) => theme.spacing(marginHorizontal)};
      margin-right: ${({ theme }) => theme.spacing(marginHorizontal)};
    `}

  ${({ marginTop }) =>
    (Boolean(marginTop) || marginTop === 0) &&
    css`
      margin-top: ${({ theme }) => theme.spacing(marginTop)};
    `}

  ${({ marginBottom }) =>
    (Boolean(marginBottom) || marginBottom === 0) &&
    css`
      margin-bottom: ${({ theme }) => theme.spacing(marginBottom)};
    `}

  ${({ marginLeft }) =>
    (Boolean(marginLeft) || marginLeft === 0) &&
    css`
      margin-left: ${({ theme }) => theme.spacing(marginLeft)};
    `}

  ${({ marginRight }) =>
    (Boolean(marginRight) || marginRight === 0) &&
    css`
      margin-right: ${({ theme }) => theme.spacing(marginRight)};
    `}

  ${({ padding }) =>
    (Boolean(padding) || padding === 0) &&
    css`
      padding: ${({ theme }) => theme.spacing(padding)};
    `}

  ${({ paddingVertical }) =>
    (Boolean(paddingVertical) || paddingVertical === 0) &&
    css`
      padding-top: ${({ theme }) => theme.spacing(paddingVertical)};
      padding-bottom: ${({ theme }) => theme.spacing(paddingVertical)};
    `}

  ${({ paddingHorizontal }) =>
    (Boolean(paddingHorizontal) || paddingHorizontal === 0) &&
    css`
      padding-left: ${({ theme }) => theme.spacing(paddingHorizontal)};
      padding-right: ${({ theme }) => theme.spacing(paddingHorizontal)};
    `}

  ${({ paddingTop }) =>
    (Boolean(paddingTop) || paddingTop === 0) &&
    css`
      padding-top: ${({ theme }) => theme.spacing(paddingTop)};
    `}

  ${({ paddingBottom }) =>
    (Boolean(paddingBottom) || paddingBottom === 0) &&
    css`
      padding-bottom: ${({ theme }) => theme.spacing(paddingBottom)};
    `}

  ${({ paddingLeft }) =>
    (Boolean(paddingLeft) || paddingLeft === 0) &&
    css`
      padding-left: ${({ theme }) => theme.spacing(paddingLeft)};
    `}

  ${({ paddingRight }) =>
    (Boolean(paddingRight) || paddingRight === 0) &&
    css`
      padding-right: ${({ theme }) => theme.spacing(paddingRight)};
    `}
`;

import styled, { css } from 'styled-components';
import { media } from './utils';
import { keys } from 'lodash';
import Stack from '../components/Stack';

export const Name = styled.span`
  font-weight: 500;
`;

const getSpacingFromSize = ({ theme, gutterSize }) => {
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

export const Box = styled.div`
  ${spacings()}

  ${({ theme, color }) =>
    Boolean(color) &&
    (Boolean(theme?.colors?.[color]) || Boolean(theme?.[color])) &&
    css`
      color: ${({ theme }) => theme?.colors?.[color] || theme?.[color]};
    `}

  ${({ size }) =>
    size === 'full' &&
    css`
      width: 100%;
    `}

  ${({ size }) =>
    size === 'fit-content' &&
    css`
      width: fit-content;
    `}
`;

export const List = styled(Stack)`
  list-style-type: none;
`;

List.defaultProps = {
  as: 'ul',
  margin: 0,
  padding: 0,
};

export const InlineList = styled(List)`
  flex-wrap: wrap;
`;

InlineList.defaultProps = {
  direction: 'row',
  marginTop: 0,
  marginBottom: 0,
};

export const ButtonReset = styled.button`
  border: 0;
  background-color: transparent;
  text-decoration: none;
  color: inherit;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  text-align: inherit;

  ${({ size }) =>
    size === 'full' &&
    css`
      width: 100%;
    `}
`;

export const Container = styled.div`
  padding-left: ${({ theme }) => theme.spacing()};
  padding-right: ${({ theme }) => theme.spacing()};
  max-width: 100%;
  width: ${({ theme }) => theme.containerSizes?.default};
  margin-left: auto;
  margin-right: auto;

  ${media.tablet`
    padding-left: ${({ theme }) => theme.spacing(2)};
    padding-right: ${({ theme }) => theme.spacing(2)};
  `}

  ${({ size, theme }) =>
    Boolean(size) &&
    Boolean(theme?.containerSizes?.[size]) &&
    `
      width: ${theme?.containerSizes?.[size]}
    `};

  ${({ variant }) =>
    variant === 'bare' &&
    css`
      padding-left: 0;
      padding-right: 0;

      ${media.tablet`
        padding-left: 0;
        padding-right: 0;
      `}
    `}

  ${props =>
    props.variant === 'main' &&
    css`
      padding-top: ${({ theme }) => theme.spacing(2)};
      padding-bottom: ${({ theme }) => theme.spacing(2)};

      ${media.tablet`
        padding-top: ${({ theme }) => theme.spacing()};
        padding-bottom: ${({ theme }) => theme.spacing()};
      `}
    `}

    ${({ alignment }) =>
    alignment === 'center' &&
    css`
      display: flex;
      align-items: center;
      flex-direction: column;
    `}
`;

export const Buttons = styled(Box)`
  margin-left: ${({ theme }) => theme.spacing(-1)};
  margin-top: ${({ theme }) => theme.spacing(-1)};
  display: flex;
  justify-content: ${({ theme }) => theme.buttonsDefaultAlignX};
  flex-wrap: wrap;

  > * {
    margin-left: ${({ theme }) => theme.spacing()};
    margin-top: ${({ theme }) => theme.spacing()};
  }

  ${({ alignX }) =>
    Boolean(alignX) &&
    css`
      justify-content: ${({ alignX }) => alignX};
    `}

  ${({ alignY }) =>
    Boolean(alignY) &&
    css`
      align-items: ${({ alignY }) => alignY};
    `}

  ${props =>
    props.hasTopMargin &&
    css`
      margin-top: ${({ theme }) => theme.spacing()};
    `};

  ${props =>
    props.spacingSize === 'small' &&
    css`
      margin-left: ${({ theme }) => theme.spacing(-0.5)};
      margin-top: ${({ theme }) => theme.spacing(-0.5)};

      > * {
        margin-left: ${({ theme }) => theme.spacing(0.5)};
        margin-top: ${({ theme }) => theme.spacing(0.5)};
      }
    `}

  ${props =>
    props.spacingSize === 'big' &&
    css`
      margin-left: ${({ theme }) => theme.spacing(-2)};
      margin-top: ${({ theme }) => theme.spacing(-2)};

      > * {
        margin-left: ${({ theme }) => theme.spacing(2)};
        margin-top: ${({ theme }) => theme.spacing(2)};
      }
    `}
`;

export const Icon = styled.div`
  font-size: 1.25rem;
  + * {
    margin-left: ${({ theme }) => theme.spacing(0.5)};
  }
`;

export const TitleAndAction = styled(Stack)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ hasTopMargin, theme }) =>
    hasTopMargin &&
    `
      margin-top: ${theme.spacing()}
    `}

  ${({ hasBottomMargin, theme }) =>
    hasBottomMargin &&
    `
      margin-bottom: ${theme.spacing()}
    `}

  ${({ hasBottomBorder, theme }) =>
    hasBottomBorder &&
    `
      padding-bottom: ${theme.spacing()};
      border-bottom: 1px solid ${theme.text}
    `}
`;

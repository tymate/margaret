import styled, { css } from 'styled-components';
import { spacings } from './base';

export const Text = styled.div.attrs(({ theme, type, as }) => ({
  as: as || theme?.fontStacks?.[type]?.defaultTag,
}))`
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

  ${({ type = 'body', theme }) =>
    Boolean(theme?.fontStyles?.[type]) &&
    css`
      ${theme?.fontStyles?.[type]}
    `}

  ${({ marginTop, marginVertical, margin }) =>
    !Boolean(marginTop) &&
    !Boolean(marginVertical) &&
    !Boolean(margin) &&
    `
      margin-top: 0;
    `}
  
  ${({ marginBottom, marginVertical, margin }) =>
    !Boolean(marginBottom) &&
    !Boolean(marginVertical) &&
    !Boolean(margin) &&
    `
      margin-bottom: 0;
    `}

  ${({ color, theme }) =>
    Boolean(color) &&
    `
      color: ${theme?.colors?.[color] || theme?.[color]};
    `}

  ${({ fontWeight }) =>
    Boolean(fontWeight) &&
    `
      font-weight: ${fontWeight};
    `}
  
  ${({ fontFamily, theme }) =>
    Boolean(fontFamily) &&
    `
      font-family: ${theme.fonts?.[fontFamily]};
    `}
`;

export const MainTitle = styled(Text).attrs(({ type }) => ({
  type: type || 'h1Mega',
}))``;

export const Title = styled(Text).attrs(({ type }) => ({
  type: type || 'h1',
}))``;

export const Subtitle = styled(Text).attrs(({ type }) => ({
  type: type || 'h2',
}))``;

export const Heading = styled(Text).attrs(({ type }) => ({
  type: type || 'heading',
}))``;

export const SubHeading = styled(Text).attrs(({ type }) => ({
  type: type || 'subHeading',
}))``;

export const Legend = styled(Text).attrs(({ type }) => ({
  type: type || 'legend',
}))``;

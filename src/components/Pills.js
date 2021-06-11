import React from 'react';
import styled, { css } from 'styled-components';
import { media, ButtonReset, InlineList } from '../ui';

export const PillsNavBar = styled.nav`
  display: flex;
  padding: ${({ theme }) => theme.spacing(0.875)}
    ${({ theme }) => theme.spacing()};
  justify-content: flex-start;
  background-color: ${({ theme }) =>
    theme.pills?.navBarBackgroundColor || 'transparent'};
  max-width: 100vw;
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);

  ${media.medium`
    flex-wrap: wrap;
    justify-content: center;
    box-shadow: none;
    padding: ${({ theme }) => theme.spacing(0.875)}
      ${({ theme }) => theme.spacing(2)};

    ${({ align }) =>
      align === 'left' &&
      css`
        justify-content: flex-start;
      `}
  `};
`;

export const PillItem = styled.li`
  white-space: nowrap;
`;

export const PillButton = styled(ButtonReset)`
  box-shadow: inset 0 0 0 1px
    ${({ theme }) => theme.pills?.boxShadowColor || theme.separator};
  padding: ${({ theme }) => theme.spacing(0.5)}
    ${({ theme }) => theme.spacing(0.75)};
  display: block;
  border-radius: ${({ theme }) =>
    theme.borderRadius?.[theme.pills?.borderRadius] ||
    theme.borderRadius?.default};
  background-color: ${({ theme }) =>
    theme.pills?.backgroundColor || 'transparent'};
  color: ${({ theme }) => theme.pills?.color || theme.textLight};
  text-decoration: none;
  transition: box-shadow 150ms ease, background 150ms ease, color 150ms ease;
  font-weight: 400;
  line-height: 1.5;

  &:not([disabled]):hover {
    color: ${({ theme }) => theme.pills?.colorHover || theme.text};
    background-color: ${({ theme }) => theme.pills?.backgroundColorHover};
  }

  &:not([disabled]).active,
  &:not([disabled]).active:hover {
    background-color: ${({ theme }) =>
      theme.pills?.activeBackground || theme.primaryBackground};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.primaryBackground};
    color: ${({ theme }) => theme.pills?.activeColor || theme.primary};

    ${({ variant }) =>
      variant === 'success' &&
      css`
        background-color: ${({ theme }) => theme.successBackground};
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.successBackground};
        color: ${({ theme }) => theme.success};
      `}

    ${({ variant }) =>
      variant === 'error' &&
      css`
        background-color: ${({ theme }) => theme.errorBackground};
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.errorBackground};
        color: ${({ theme }) => theme.error};
      `};
  }

  &:disabled,
  &:disabled:hover {
    cursor: default;
    background-color: ${({ theme }) =>
      theme.pills?.disabledBackground || theme.disabledBackground};
    color: ${({ theme }) => theme.pills?.disabledColor || theme.disabled};

    &.active {
      background-color: ${({ theme }) =>
        theme.pills?.activeDisabledBackground || theme.disabled};
      color: ${({ theme }) =>
        theme.pills?.activeDisabledColor || theme.textLight};
    }
  }
`;

export const Pills = styled(InlineList)`
  flex-wrap: nowrap;
`;

Pills.defaultProps = {
  alignX: 'center',
  gutterSize: 0.5,
};

export const Pill = ({ onClick, isActive, ...props }) => (
  <PillItem>
    <PillButton className={isActive && 'active'} onClick={onClick} {...props} />
  </PillItem>
);

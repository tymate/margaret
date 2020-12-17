import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledButtonReset } from '../ui';
import Spinner from './Spinner';

const ButtonWrapper = styled(StyledButtonReset)`
  position: relative;
  display: flex;
  white-space: nowrap;
  transition: ${({ theme }) => theme.button.transition};
  align-items: ${({ theme }) => theme.button.alignY};
  justify-content: ${({ theme }) => theme.button.alignX};
  border-radius: ${({ theme }) => theme.button.borderRadius};
  padding: ${({ theme }) => theme.button.paddingHorizontal}
    ${({ theme }) => theme.button.paddingHorizontal};
  line-height: 1;
  font-size: ${({ theme }) => theme.button.fontSize};
  font-weight: ${({ theme }) => theme.button.fontWeight};
  color: ${({ theme }) => theme.button.color};
  min-width: ${({ theme }) => theme.button.minWidth};

  &:hover {
    color: ${({ theme }) => theme.button.colorHover};
  }

  > svg {
    margin-right: ${({ theme }) => theme.spacing(0.25)};
  }

  ${({ variant }) =>
    Boolean(variant) &&
    css`
      border-radius: ${({ theme }) =>
        theme.button?.[variant]?.borderRadius || theme?.button?.borderRadius};
      box-shadow: ${({ theme }) =>
        theme.button?.[variant]?.boxShadow || theme.button.boxShadow};
      background: ${({ theme }) =>
        theme.button?.[variant]?.background || theme.button.background};
      color: ${({ theme }) =>
        theme.button?.[variant]?.color || theme.button.color};
      padding: ${({ theme }) =>
          theme.button?.[variant]?.paddingVertical ||
          theme.button.paddingVertical}
        ${({ theme }) =>
          theme.button?.[variant]?.paddingHorizontal ||
          theme.button.paddingHorizontal};
      min-width: ${({ theme }) =>
          theme.button?.[variant]?.minWidth || theme.button.minWidth}
        || ${({ theme }) => theme.button.minWidth};

      &:hover {
        background: ${({ theme }) =>
          theme.button?.[variant]?.backgroundHover ||
          theme.button.backgroundHover};
        color: ${({ theme }) =>
          theme.button?.[variant]?.colorHover || theme.button.colorHover};
        box-shadow: ${({ theme }) =>
          theme.button?.[variant]?.boxShadowHover ||
          theme.button.boxShadowHover};
        transform: ${({ theme }) =>
          theme.button?.[variant]?.transformHover ||
          theme.button.transformHover};
      }
    `}

  ${({ isLoading, theme }) =>
    isLoading &&
    `
      padding-left: ${theme.spacing(1.5)};
    `}

  ${({ size }) =>
    size === 'full' &&
    `
      width: 100%;
    `};

  ${({ size }) =>
    size === 'big' &&
    `
      font-size: 1.5em;
    `}

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.disabled};
    color: rgba(0, 0, 0, 0.38);
    box-shadow: none;
    color: ${({ theme }) => theme.textLight};
    box-shadow: none;
  }
`;

const Button = ({ isLoading, children, icon, as, ...props }) => (
  <ButtonWrapper
    {...props}
    as={Boolean(props.to) ? Link : Boolean(as) ? as : null}
    disabled={props.disabled || isLoading}
  >
    {isLoading && <Spinner variant="button" />}
    {!isLoading && icon}
    {children}
  </ButtonWrapper>
);

Button.propTypes = {
  /**
   * Displays the spinner & disables the button
   * */
  isLoading: PropTypes.bool,
  /**
   * Changes the appearance of the button
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  disabled: PropTypes.bool,
  /**
   * If this prop is set, the button acts like a link,
   * and cannot be disabled
   */
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  size: PropTypes.oneOf(['auto', 'full', 'fixed', 'big']),
};

export default Button;

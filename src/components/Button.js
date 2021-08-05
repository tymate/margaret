import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonReset } from '../ui/base';
import Spinner from './Spinner';
import Stack from './Stack';

const ButtonWrapper = styled(ButtonReset)`
  position: relative;
  display: flex;
  white-space: nowrap;
  transition: ${({ theme }) => theme.button?.transition};
  align-items: ${({ theme }) => theme.button?.alignY};
  justify-content: ${({ theme }) => theme.button?.alignX};
  border-radius: ${({ theme }) => theme.button?.borderRadius};
  padding: ${({ theme }) => theme.button?.paddingHorizontal}
    ${({ theme }) => theme.button?.paddingHorizontal};
  line-height: 1;
  font-weight: ${({ theme }) => theme.button?.fontWeight};
  font-size: ${({ theme }) => theme.button?.fontSize};
  color: ${({ theme }) => theme.button?.color};
  min-width: ${({ theme }) => theme.button?.minWidth};
  box-shadow: ${({ theme }) => theme.button?.boxShadow};

  &:hover {
    color: ${({ theme }) => theme.button?.colorHover};
    box-shadow: ${({ theme }) => theme.button?.boxShadowHover};
  }

  &:focus {
    color: ${({ theme }) => theme.button?.colorFocus};
    box-shadow: ${({ theme }) => theme.button?.boxShadowFocus};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.button?.backgroundDisabled};
    color: ${({ theme }) => theme.button?.colorDisabled};
    box-shadow: ${({ theme }) => theme.button?.boxShadowDisabled};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      background: ${({ theme }) => theme.button?.backgroundDisabled};
      color: ${({ theme }) => theme.button?.colorDisabled};
      box-shadow: ${({ theme }) => theme.button?.boxShadowDisabled};

      &:hover,
      &:focus {
        background: ${({ theme }) => theme.button?.backgroundDisabled};
        color: ${({ theme }) => theme.button?.colorDisabled};
        box-shadow: ${({ theme }) => theme.button?.boxShadowDisabled};
      }
    `}

  > svg {
    margin-right: ${({ theme }) => theme.spacing(0.25)};
  }

  ${({ variant }) =>
    Boolean(variant) &&
    css`
      font-weight: ${({ theme }) =>
        theme.button?.[variant]?.fontWeight || theme?.button?.fontWeight};
      font-size: ${({ theme }) =>
        theme.button?.[variant]?.fontSize || theme?.button?.fontSize};
      border-radius: ${({ theme }) =>
        theme.button?.[variant]?.borderRadius || theme?.button?.borderRadius};
      box-shadow: ${({ theme }) =>
        theme.button?.[variant]?.boxShadow || theme.button?.boxShadow};
      background: ${({ theme }) =>
        theme.button?.[variant]?.background || theme.button?.background};
      color: ${({ theme }) =>
        theme.button?.[variant]?.color || theme.button?.color};
      padding: ${({ theme }) =>
        theme.button?.[variant]?.paddingVertical ||
        theme.button?.paddingVertical}
        ${({ theme }) =>
          theme.button?.[variant]?.paddingHorizontal ||
          theme.button?.paddingHorizontal};
      min-width: ${({ theme }) =>
        theme.button?.[variant]?.minWidth || theme.button?.minWidth};

      &:hover {
        background: ${({ theme }) =>
          theme.button?.[variant]?.backgroundHover ||
          theme.button?.[variant]?.background ||
          theme.button?.backgroundHover};
        color: ${({ theme }) =>
          theme.button?.[variant]?.colorHover ||
          theme.button?.[variant]?.color ||
          theme.button?.colorHover};
        box-shadow: ${({ theme }) =>
          theme.button?.[variant]?.boxShadowHover ||
          theme.button?.[variant]?.boxShadow ||
          theme.button?.boxShadowHover};
        transform: ${({ theme }) =>
          theme.button?.[variant]?.transformHover ||
          theme.button?.transformHover};
      }

      &:focus {
        background: ${({ theme }) =>
          theme.button?.[variant]?.backgroundFocus ||
          theme.button?.[variant]?.background ||
          theme.button?.backgroundFocus};
        color: ${({ theme }) =>
          theme.button?.[variant]?.colorFocus ||
          theme.button?.[variant]?.color ||
          theme.button?.colorFocus};
        box-shadow: ${({ theme }) =>
          theme.button?.[variant]?.boxShadowFocus ||
          theme.button?.[variant]?.boxShadow ||
          theme.button?.boxShadowFocus};
        transform: ${({ theme }) => theme.button?.[variant]?.transformFocus} ||
          theme.button?.transformFocus};
      }
      

      &:disabled {
        background: ${({ theme }) =>
          theme.button?.[variant]?.backgroundDisabled ||
          theme.button?.backgroundDisabled ||
          theme.backgroundDisabled};
        color: ${({ theme }) =>
          theme.button?.[variant]?.colorDisabled ||
          theme.button?.colorDisabled ||
          theme.textDisabled};
        box-shadow: ${({ theme }) =>
          theme.button?.[variant]?.boxShadowDisabled ||
          theme.button?.boxShadowDisabled};
        transform: ${({ theme }) => theme.button?.[variant]?.transformDisabled};
      }

      ${({ disabled }) =>
        disabled &&
        css`
          background: ${({ theme }) =>
            theme.button?.[variant]?.backgroundDisabled ||
            theme.button?.backgroundDisabled ||
            theme.backgroundDisabled};
          color: ${({ theme }) =>
            theme.button?.[variant]?.colorDisabled ||
            theme.button?.colorDisabled ||
            theme.textDisabled};
          box-shadow: ${({ theme }) =>
            theme.button?.[variant]?.boxShadowDisabled ||
            theme.button?.boxShadowDisabled};
          transform: ${({ theme }) =>
            theme.button?.[variant]?.transformDisabled};

          &:hover,
          &:focus {
            background: ${({ theme }) =>
              theme.button?.[variant]?.backgroundDisabled ||
              theme.button?.backgroundDisabled ||
              theme.backgroundDisabled};
            color: ${({ theme }) =>
              theme.button?.[variant]?.colorDisabled ||
              theme.button?.colorDisabled ||
              theme.textDisabled};
            box-shadow: ${({ theme }) =>
              theme.button?.[variant]?.boxShadowDisabled ||
              theme.button?.boxShadowDisabled};
            transform: ${({ theme }) =>
              theme.button?.[variant]?.transformDisabled};
          }
        `}
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

  ${({ fontSize }) =>
    fontSize &&
    `
      font-size: ${fontSize};
    `}
`;

const Button = ({
  isLoading,
  children,
  icon,
  disabled,
  loadingAnimation,
  spinnerProps,
  shouldHideContentWhenLoading,
  ...props
}) => (
  <ButtonWrapper {...props} disabled={disabled || isLoading}>
    {isLoading && (
      <Stack>
        <Spinner
          variant="inline"
          animation={loadingAnimation}
          {...spinnerProps}
        />
      </Stack>
    )}
    {!isLoading && icon}
    {(!shouldHideContentWhenLoading || !isLoading) && <span>{children}</span>}
  </ButtonWrapper>
);

Button.defaultProps = {
  loadingAnimation: 'ball-spin-fade-loader',
  isLoading: false,
  disabled: false,
  fontSize: '1em',
};

export default Button;

import styled, { css } from 'styled-components';
import { includes } from 'lodash';

const Tip = styled.span`
  ${({ theme }) => theme.fontStyles[theme.tooltip.fontStyle]};

  position: absolute;
  opacity: 0;
  display: none;
  z-index: 22;
  text-transform: none;
  flex-wrap: wrap;

  width: 100%;
  max-width: ${({ theme }) => theme.tooltip.maxWidth};
  transition: transform 75ms ease, opacity 300ms ease;

  ${({ maxWidth }) =>
    Boolean(maxWidth) &&
    `
      max-width: ${maxWidth}px;
    `}

  ${({ hasArrow }) =>
    Boolean(hasArrow) &&
    css`
      &:before {
        content: '';
        position: absolute;
        border: 4px solid transparent;
        z-index: 22;
      }
    `}

  ${({ position }) =>
    includes(['right', 'right-top', 'right-bottom'], position) &&
    css`
      left: calc(100% + ${({ theme }) => theme.spacing(0.5)});

      ${({ hasArrow }) =>
        Boolean(hasArrow) &&
        css`
          &:before {
            left: -8px;
            border-right-color: ${({ theme }) => theme.tooltip.background};
          }
        `}
    `}

  ${({ position }) =>
    position === 'right' &&
    css`
      top: 50%;
      transform: translateY(-50%);

      ${({ hasArrow }) =>
        Boolean(hasArrow) &&
        css`
          &:before {
            top: 50%;
            transform: translateY(-50%);
          }
        `}
    `}

  ${({ position }) =>
    position === 'right-top' &&
    css`
      top: 0;

      ${({ hasArrow }) =>
        Boolean(hasArrow) &&
        css`
          &:before {
            bottom: ${({ theme }) => theme.spacing()};
          }
        `}
    `}

  ${({ position }) =>
    position === 'right-bottom' &&
    css`
      bottom: 0;

      ${({ hasArrow }) =>
        Boolean(hasArrow) &&
        css`
          &:before {
            top: ${({ theme }) => theme.spacing()};
          }
        `}
    `}

    ${({ position }) =>
    includes(['left', 'left-top', 'left-bottom'], position) &&
    css`
      left: ${({ theme }) => theme.spacing(-0.5)};
      transform: translateX(-100%);

      ${({ hasArrow }) =>
        Boolean(hasArrow) &&
        css`
          &:before {
            right: -8px;
            border-left-color: ${({ theme }) => theme.tooltip.background};
          }
        `}
    `}


    ${({ position }) =>
    position === 'left' &&
    css`
      top: 50%;
      left: ${({ theme }) => theme.spacing(-0.5)};
      transform: translate(-100%, -50%);

      ${({ hasArrow }) =>
        Boolean(hasArrow) &&
        css`
          &:before {
            top: 50%;
            transform: translateY(-50%);
          }
        `}
    `}

  ${({ position }) =>
    position === 'left-top' &&
    css`
      top: 0;

      ${({ hasArrow }) =>
        Boolean(hasArrow) &&
        css`
          &:before {
            bottom: ${({ theme }) => theme.spacing()};
          }
        `}
    `}

  ${({ position }) =>
    position === 'left-bottom' &&
    css`
      bottom: 0;

      ${({ hasArrow }) =>
        Boolean(hasArrow) &&
        css`
          &:before {
            top: ${({ theme }) => theme.spacing()};
          }
        `}
    `}

    ${({ position }) =>
    includes(['bottom', 'bottom-start', 'bottom-end'], position) &&
    css`
      top: calc(100% + ${({ theme }) => theme.spacing(0.5)});

      ${({ hasArrow }) =>
        Boolean(hasArrow) &&
        css`
          &:before {
            top: -8px;
            border-bottom-color: ${({ theme }) => theme.tooltip.background};
          }
        `}
    `}

  ${({ position }) =>
    position === 'bottom' &&
    css`
      left: 50%;
      transform: translateX(-50%);

      &:before {
        left: 50%;
        transform: translateX(-50%);
      }
    `}

    ${({ position }) =>
    position === 'bottom-start' &&
    css`
      left: 0;

      &:before {
        right: ${({ theme }) => theme.spacing()};
      }
    `}

    ${({ position }) =>
    position === 'bottom-end' &&
    css`
      left: 0;

      &:before {
        left: ${({ theme }) => theme.spacing()};
      }
    `}

    ${({ position }) =>
    includes(['top', 'top-start', 'top-end'], position) &&
    css`
      top: ${({ theme }) => theme.spacing(-0.5)};
      transform: translateY(-100%);

      ${({ hasArrow }) =>
        Boolean(hasArrow) &&
        css`
          &:before {
            bottom: -8px;
            border-top-color: ${({ theme }) => theme.tooltip.background};
          }
        `}
    `}

    ${({ position }) =>
    position === 'top' &&
    css`
      left: 50%;
      transform: translate(-50%, -100%);

      &:before {
        left: 50%;
        transform: translateX(-50%);
      }
    `}

    ${({ position }) =>
    position === 'top-start' &&
    css`
      left: 0;

      &:before {
        right: ${({ theme }) => theme.spacing()};
      }
    `}

    ${({ position }) =>
    position === 'top-end' &&
    css`
      right: 0;

      &:before {
        left: ${({ theme }) => theme.spacing()};
      }
    `}
`;

const Wrapper = styled.span`
  position: relative;
  display: flex;

  &:hover ${Tip} {
    opacity: 1;
    display: flex;
  }

  svg {
    display: block;
  }
`;

const TipText = styled.span`
  display: block;
  background: ${({ theme }) => theme.tooltip.background};
  padding: ${({ theme }) => theme.tooltip.paddingVertical}
    ${({ theme }) => theme.tooltip.paddingHorizontal};
  border-radius: ${({ theme }) => theme.tooltip.borderRadius};

  font-weight: ${({ theme }) => theme.tooltip.fontWeight};
  color: ${({ theme }) => theme.tooltip.color};
`;

const Content = styled.span``;

const Tooltip = ({
  children,
  tip,
  label,
  disabled,
  hasArrow,
  position,
  maxWidth,
  ...props
}) => (
  <Wrapper {...props}>
    <Content aria-labelledby={!disabled ? label : null}>{children}</Content>
    {!disabled && (
      <Tip
        id={label}
        position={position}
        hasArrow={hasArrow}
        maxWidth={maxWidth}
      >
        <TipText>{tip}</TipText>
      </Tip>
    )}
  </Wrapper>
);

Tooltip.defaultProps = {
  position: 'right',
  hasArrow: false,
};

export default Tooltip;

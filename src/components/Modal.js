import React, { isValidElement, useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import ReactModal from 'react-modal';
import { MdClose } from 'react-icons/md';
import { ButtonReset } from '../ui';

const StyledModal = styled(ReactModal)`
  position: absolute;
  z-index: 2147483646;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  margin-right: -50%;
  padding: 0;
  max-height: calc(100vh - 32px);
  border: 0;
  outline: ${({ theme }) => theme.modal.outline || 'none'};
  overflow-y: auto;
  background: ${({ theme }) => theme.modal.background};
  border-radius: ${({ theme }) => theme.modal.borderRadius};
  box-shadow: ${({ theme }) => theme.modal.boxShadow};
  width: ${({ theme }) => theme.modal?.sizes?.default || '500px'};
  max-width: calc(100vw - 32px);

  ${({ size, theme }) =>
    Boolean(size) &&
    Boolean(theme?.modal?.sizes?.[size]) &&
    `
      width: ${theme?.modal?.sizes?.[size]};
    `};
`;

export const CloseModalTriggerButton = styled(ButtonReset)`
  position: absolute;
  z-index: 2;
  font-size: 1.5em;
  top: ${({ theme }) => theme.spacing()};
  right: ${({ theme }) => theme.spacing()};
`;

const ModalTitle = styled.h1`
  margin: 0;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing(1.5)};
  font-size: 24px;
  text-align: center;
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.modal.padding};
  line-height: 1.5;
`;

const Modal = ({
  title,
  children,
  isOpen,
  closeIcon,
  onRequestClose,
  variant,
  overflow,
  size,
  ...props
}) => {
  const theme = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'auto';
    }

    return () => {
      document.documentElement.style.overflowY = 'auto';
    };
  }, [isOpen]);

  const overlayStyles = {
    zIndex: 2147483646,
    ...theme?.modal?.overlay,
  };

  return (
    <StyledModal
      size={size}
      variant={variant}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: overlayStyles,
        content: { overflow },
      }}
      ariaHideApp={false}
      {...props}
    >
      <Content variant={variant}>
        {Boolean(title) &&
          (isValidElement(title) ? title : <ModalTitle>{title}</ModalTitle>)}

        {onRequestClose && (
          <CloseModalTriggerButton onClick={onRequestClose}>
            {Boolean(closeIcon) ? closeIcon : <MdClose />}
          </CloseModalTriggerButton>
        )}

        {children}
      </Content>
    </StyledModal>
  );
};

export default Modal;

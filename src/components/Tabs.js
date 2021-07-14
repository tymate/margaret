import React from 'react';
import styled from 'styled-components';
import { List, ButtonReset } from '../ui/base';

export const TabsBase = styled(List)`
  max-width: 100vw;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding: ${({ theme }) => theme?.tabs?.padding};
  margin: ${({ theme }) => theme?.tabs?.margin};
`;

const TabNav = styled.li`
  display: block;
`;

export const TabNavButton = styled(ButtonReset)`
  cursor: pointer;
  display: flex;
  appearance: none;
  text-decoration: none;
  outline: none;
  border: 0;
  text-align: center;
  white-space: ${({ theme }) => theme?.tabs?.tab?.whiteSpace};
  flex-direction: ${({ theme }) => theme?.tabs?.tab?.direction};
  padding: ${({ theme }) => theme?.tabs?.tab?.padding};
  min-width: ${({ theme }) => theme?.tabs?.tab?.minWidth};
  max-width: ${({ theme }) => theme?.tabs?.tab?.maxWidth};
  font-weight: ${({ theme }) => theme?.tabs?.tab?.fontWeight};
  font-size: ${({ theme }) => theme?.tabs?.tab?.fontSize};
  border-radius: ${({ theme }) => theme?.tabs?.tab?.borderRadius};
  background: ${({ theme }) => theme?.tabs?.tab?.background};
  box-shadow: ${({ theme }) => theme?.tabs?.tab?.boxShadow};
  color: ${({ theme }) => theme?.tabs?.tab?.color};

  ${({ isActive, theme }) =>
    isActive &&
    `
      color: ${theme?.tabs?.tab?.colorActive};
      background: ${theme?.tabs?.tab?.backgroundActive};
      box-shadow: ${theme?.tabs?.tab?.boxShadowActive}
    `};

  &.active {
    color: ${({ theme }) => theme?.tabs?.tab?.colorActive};
    background: ${({ theme }) => theme?.tabs?.tab?.backgroundActive};
    box-shadow: ${({ theme }) => theme?.tabs?.tab?.boxShadowActive};
  }

  &:hover {
    color: ${({ theme }) => theme?.tabs?.tab?.colorHover};
    background: ${({ theme }) => theme?.tabs?.tab?.backgroundHover};
    box-shadow: ${({ theme }) => theme?.tabs?.tab?.boxShadowHover};
  }

  &:disabled {
    color: ${({ theme }) => theme?.tabs?.tab?.colorDisabled};
    background: ${({ theme }) => theme?.tabs?.tab?.backgroundDisabled};
    box-shadow: ${({ theme }) => theme?.tabs?.tab?.boxShadowDisabled};
  }

  ${({ theme }) => theme.media.tablet`
    width: 100%;
  `}
`;

const Tab = ({ children, ...props }) => (
  <TabNav>
    <TabNavButton {...props}>{children}</TabNavButton>
  </TabNav>
);

export const Tabs = props => <TabsBase {...props} />;
Tabs.Item = Tab;

export default Tabs;

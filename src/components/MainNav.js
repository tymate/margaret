import React, { useState, createContext } from 'react';
import styled, { useTheme } from 'styled-components';
import { media, Stack, ButtonReset } from '../ui';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { useMargaret } from './MargaretProvider';

const Scrollbars = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// https://www.aditus.io/patterns/accordion/

const MainNavSectionContext = createContext();

const MainNavBase = styled(Stack).attrs(({ as, theme }) => ({
  as: as || 'aside',
  direction: {
    default: 'column',
    tablet: theme.mainNav.position === 'top' ? 'row' : 'column',
  },
  alignX: 'stretch',
  alignY: {
    default: 'flex-start',
    tablet: theme.mainNav.position === 'top' ? 'center' : 'flex-start',
  },
}))`
  position: absolute;
  top: 0;
  left: -${({ theme }) => theme.mainNav.width};
  bottom: 0;
  width: ${({ theme }) => theme.mainNav.width};
  max-width: ${({ theme }) => theme.mainNav.maxWidth};
  background: ${({ theme }) => theme.mainNav.background.mobile};
  box-shadow: ${({ theme }) => theme.mainNav.boxShadow};
  z-index: 2;

  ${media.tablet`
    left: 0;
    background: ${({ theme }) => theme.mainNav.background.tablet};


    ${({ theme }) =>
      theme.mainNav.position === 'top' &&
      `
        bottom: auto;
        width: auto;
        right: 0;
        height: ${theme.mainNav.height};
      `}
  `}
`;

const Backdrop = styled(ButtonReset)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.48);
`;

const MainNav = ({ header, children, hasBackdrop, ...props }) => {
  const { isMobile, mainNavIsExpanded, collapseMainNav } = useMargaret();
  const theme = useTheme();

  const mainNavVariants = {
    open: {
      transform: `translateX(${theme.mainNav.width})`,
      transition: { ease: 'easeInOut', duration: 0.2 },
    },
    closed: {
      transform: `translateX(0px)`,
      transition: { ease: 'easeInOut', duration: 0.2 },
    },
  };

  return (
    <>
      {hasBackdrop && (
        <AnimatePresence>
          {mainNavIsExpanded && isMobile && (
            <Backdrop
              onClick={collapseMainNav}
              type="button"
              as={isMobile ? motion.button : null}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            />
          )}
        </AnimatePresence>
      )}

      <MainNavBase
        {...props}
        as={isMobile ? motion.aside : null}
        animate={mainNavIsExpanded ? 'open' : 'closed'}
        variants={mainNavVariants}
      >
        {header}
        {theme.mainNav.position === 'top' ? (
          children
        ) : (
          <Scrollbars>
            <Stack direction="column" style={{ flex: 1, height: '100%' }}>
              {children}
            </Stack>
          </Scrollbars>
        )}
      </MainNavBase>
    </>
  );
};

MainNav.defaultProps = {
  hasBackdrop: true,
};

const MainNavMainContent = styled.div`
  flex: 1;
  width: 100%;
`;

const MainNavItems = styled(Stack).attrs(({ theme }) => ({
  as: 'ul',
  direction:
    theme.mainNav.position === 'left'
      ? 'column'
      : {
          default: 'column',
          tablet: 'row',
        },
  alignX: 'stretch',
}))`
  margin: 0;
  padding: ${({ theme }) => theme.spacing()};
  list-style-type: none;
  width: 100%;
`;

const MainNavItem = styled.li`
  flex: 1;
`;

const MainNavHeader = styled(Stack)``;

const MainNavSectionBase = styled(Stack).attrs({
  direction: 'column',
  padding: 1,
  size: 'full',
})`
  position: relative;

  + *:before {
    position: absolute;
    top: ${({ theme }) => theme.spacing(-1)};
    content: '';
    top: 0;
    left: ${({ theme }) => theme.spacing()};
    right: ${({ theme }) => theme.spacing()};
    border-top: 1px solid ${({ theme }) => theme.separator};
    display: block;
  }

  > ${MainNavItems} {
    padding: 0;
    margin-top: ${({ theme }) => theme.spacing()};
  }
`;

const MainNavSection = ({ children, header }) => {
  return (
    <MainNavSectionBase>
      <MainNavSectionHeader>{header}</MainNavSectionHeader>
      {children}
    </MainNavSectionBase>
  );
};

const MainNavSectionHeaderBase = styled(Stack).attrs(({ disabled, id }) => ({
  gutterSize: 0.5,
  alignY: 'center',
  alignX: 'space-between',
  size: 'full',
  role: 'button',
  'aria-controls': id,
  disabled,
}))`
  text-transform: uppercase;
  font-size: 14px;
`;

const ToggleIcon = styled(Stack)`
  transition: transform 100ms ease;
`;

const MainNavSectionHeader = ({
  icon,
  children,
  isExpanded,
  onToggle,
  ...props
}) => {
  return (
    <MainNavSectionHeaderBase
      as={ButtonReset}
      onClick={onToggle}
      isExpanded={isExpanded}
      {...props}
    >
      <Stack gutterSize={0.5} alignY="center">
        {Boolean(icon) && icon}
        <span>{children}</span>
      </Stack>
      {Boolean(onToggle) && (
        <ToggleIcon style={{ transform: `rotate(${isExpanded ? 180 : 0}deg)` }}>
          <MdKeyboardArrowDown />
        </ToggleIcon>
      )}
    </MainNavSectionHeaderBase>
  );
};

const MainNavSectionPanel = ({ header, children }) => {
  const [isExpanded, setIsExpanded] = useState();

  const handleToggleSection = () => setIsExpanded(!isExpanded);

  return (
    <MainNavSectionContext.Provider value={{ isExpanded }}>
      <MainNavSectionBase>
        {Boolean(header) && (
          <MainNavSectionHeader
            onToggle={handleToggleSection}
            isExpanded={isExpanded}
          >
            {header}
          </MainNavSectionHeader>
        )}
        {isExpanded && children}
      </MainNavSectionBase>
    </MainNavSectionContext.Provider>
  );
};

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);

const MainNavTriggerBase = styled(ButtonReset)`
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  padding: ${({ theme }) => theme.spacing()};
`;

const MainNavTrigger = () => {
  const { mainNavIsExpanded, toggleMainNav } = useMargaret();
  const theme = useTheme();

  return (
    <MainNavTriggerBase onClick={toggleMainNav}>
      <motion.svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        animate={mainNavIsExpanded ? 'expanded' : 'collapsed'}
      >
        <Path
          d="M 2 2.5 L 20 2.5"
          stroke="#ffffff"
          variants={{
            collapsed: {
              stroke: theme.mainNav.triggerColor.collapsed,
              d: 'M 2 2.5 L 20 2.5',
            },
            expanded: {
              stroke: theme.mainNav.triggerColor.expanded,
              d: 'M 3 16.5 L 17 2.5',
            },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="#ffffff"
          variants={{
            collapsed: {
              stroke: theme.mainNav.triggerColor.collapsed,
              opacity: 1,
            },
            expanded: {
              stroke: theme.mainNav.triggerColor.expanded,
              opacity: 0,
            },
          }}
          opacity={0}
          transition={{ duration: 0.1 }}
        />
        <Path
          d="M 2 16.346 L 20 16.346"
          stroke="#ffffff"
          variants={{
            collapsed: {
              stroke: theme.mainNav.triggerColor.collapsed,
              d: 'M 2 16.346 L 20 16.346',
            },
            expanded: {
              stroke: theme.mainNav.triggerColor.expanded,
              d: 'M 3 2.5 L 17 16.346',
            },
          }}
        />
      </motion.svg>
    </MainNavTriggerBase>
  );
};

const MainNavFooter = styled.footer`
  padding: ${({ theme }) => theme.spacing()};
  width: 100%;
`;

MainNav.Section = MainNavSection;
MainNav.MainContent = MainNavMainContent;
MainNav.SectionHeader = MainNavSectionHeader;
MainNav.SectionPanel = MainNavSectionPanel;
MainNav.Items = MainNavItems;
MainNav.Item = MainNavItem;
MainNav.Header = MainNavHeader;
MainNav.Trigger = MainNavTrigger;
MainNav.Footer = MainNavFooter;

export default MainNav;

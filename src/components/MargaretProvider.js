import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as defaultTheme, viewportSizes } from '../ui';
import { createBreakpoint } from 'react-use';
import Sanitize from 'styled-sanitize.css';

const AppContext = createContext();

export const useMargaret = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error(`useMargaret must be used within a MargaretProvider`);
  }

  return context;
};

export const useBreakpoint = createBreakpoint({
  loading: 0,
  mobile: 1,
  ...viewportSizes,
});

const MargaretProvider = ({ theme, children }) => {
  const [mainNavIsExpanded, setMainNavIsExpanded] = useState();
  const breakpoint = useBreakpoint();

  const isMobile = breakpoint === 'mobile';
  const isDesktop = breakpoint === 'desktop';
  const isMobileOrTablet = !isDesktop;

  const handleExpandMainNav = () => setMainNavIsExpanded(true);
  const handleCollapseMainNav = () => setMainNavIsExpanded(false);
  const handleToggleMainNav = () => setMainNavIsExpanded(!mainNavIsExpanded);

  return (
    <AppContext.Provider
      value={{
        mainNavIsExpanded,
        expandMainNav: handleExpandMainNav,
        collapseMainNav: handleCollapseMainNav,
        toggleMainNav: handleToggleMainNav,
        breakpoint,
        isMobile,
        isMobileOrTablet,
        isDesktop,
      }}
    >
      <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
        <>
          <Sanitize />
          {children}
        </>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default MargaretProvider;

import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as defaultTheme } from '../ui';
import 'sanitize.css';

const AppContext = createContext();

export const useMargaret = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error(`useMargaret must be used within a MargaretProvider`);
  }

  return context;
};

const merge = (empirical = {}, payload = {}) => {
  let output = empirical;

  // eslint-disable-next-line
  for (const key in payload) {
    output = {
      ...output,
      [key]: {
        ...(output[key] || {}),
        ...(payload[key] || {}),
      },
    };
  }

  return output;
};

const MargaretProvider = ({ theme, children }) => {
  const [mainNavIsExpanded, setMainNavIsExpanded] = useState();

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
      }}
    >
      <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default MargaretProvider;

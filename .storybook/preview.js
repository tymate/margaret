import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { addDecorator, addParameters } from '@storybook/react';
import { MargaretProvider, theme } from '../src';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const GlobalStyle = createGlobalStyle`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.fonts?.title};
  }

  body {
    font-family: ${({ theme }) => theme.fonts?.body};
  }

  button {
    font-family: ${({ theme }) => theme.fonts?.ui};
  }
`;

const history = createBrowserHistory();

addParameters({
  options: {
    showRoots: true,
    showCanvas: false,
    storySort: {
      order: ['Intro', ['Getting Started', 'Basics', 'Theming', 'Typography']],
    },
  },
  dependencies: {
    withStoriesOnly: true,
    hideEmpty: true,
    previewTabs: { canvas: { hidden: true } },
  },
});

addDecorator(story => (
  <MargaretProvider>
    <Router history={history}>
      <GlobalStyle />
      {story()}
    </Router>
  </MargaretProvider>
));

import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
  {
    path: '/',
    component: ComponentCreator('/', 'deb'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '3d6'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '914'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'c28'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '3cf'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '31b'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '0da'),
    exact: true,
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '244'),
    exact: true,
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'be1'),
    exact: true,
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '159'),

    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '87d'),
        exact: true,
      },
      {
        path: '/docs/box',
        component: ComponentCreator('/docs/box', 'c17'),
        exact: true,
      },
      {
        path: '/docs/container',
        component: ComponentCreator('/docs/container', '0b2'),
        exact: true,
      },
      {
        path: '/docs/customizeTheme',
        component: ComponentCreator('/docs/customizeTheme', '6ea'),
        exact: true,
      },
      {
        path: '/docs/defaultTheme',
        component: ComponentCreator('/docs/defaultTheme', 'b1b'),
        exact: true,
      },
      {
        path: '/docs/mdx',
        component: ComponentCreator('/docs/mdx', '398'),
        exact: true,
      },
      {
        path: '/docs/stack',
        component: ComponentCreator('/docs/stack', '738'),
        exact: true,
      },
      {
        path: '/docs/theming',
        component: ComponentCreator('/docs/theming', '975'),
        exact: true,
      },
    ],
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

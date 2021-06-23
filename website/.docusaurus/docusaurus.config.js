export default {
  title: 'Margaret, ',
  tagline:
    'Margaret is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.',
  url: 'https://tymate.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '@tymate',
  projectName: 'margaret',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Margaret',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/tymate/margaret',
          label: 'GitHub',
          position: 'right',
        },
      ],
      hideOnScroll: false,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: 'Copyright © 2021 My Project, Inc. Built with Docusaurus.',
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '🌜',
        darkIconStyle: {},
        lightIcon: '🌞',
        lightIconStyle: {},
      },
    },
    docs: {
      versionPersistence: 'localStorage',
    },
    metadatas: [],
    prism: {
      additionalLanguages: [],
    },
    hideableSidebar: false,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: '/Users/cynthia/Tymate/margaret/website/sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss:
            '/Users/cynthia/Tymate/margaret/website/src/css/custom.css',
        },
      },
    ],
  ],
  baseUrlIssueBanner: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {},
  },
  onDuplicateRoutes: 'warn',
  customFields: {},
  plugins: [],
  themes: [],
  titleDelimiter: '|',
  noIndex: false,
};

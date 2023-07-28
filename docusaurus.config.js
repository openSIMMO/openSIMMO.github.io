// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'openSIMMO Documentation',
  tagline: 'An open ready-to-use super-resolution extension for your microscope.',
  url: 'https://openSIMMO.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'openSIMMO', // Usually your GitHub org/user name.
  projectName: 'openSIMMO Documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          exclude: [],
        },
        blog: {
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'openSIMMO Documentation',
        logo: {
          alt: 'openSIMMO Logo',
          src: 'img/Artboard4@4x.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Introduction',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/openSIMMO/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      /*
      algolia: {
        // The application ID provided by Algolia
        appId: 'DMM0XHVBNE',

        // Public API key: it is safe to commit it
        apiKey: '189458dc6e096d90e28c263a2a88e9c2',

        indexName: 'matchboxscopeio',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        /*replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',


      },*/  //... other Algolia params

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/Introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/openSIMMO',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/beniroquai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Software',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/openSIMMO/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Matchboxscope Developers.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

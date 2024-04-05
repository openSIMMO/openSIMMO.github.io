// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'openSIMMO Documentation',
  tagline: 'A low-cost, open-source implementation of DMD-based multi-colour SIM',
  url: 'https://opensimmo.github.io',
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
          exclude: ['./static/firmware',
                    './static/spectrometer',
                    './static/gallery',
                    './static/cameraserial',],
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
          alt: 'openUC2 Logo',
          src: 'img/opensimmologo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Introduction',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Software', position: 'left'},
          {
            href: 'https://github.com/openSIMMO/openSIMMO.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'C5IY8BN8B3',

        // Public API key: it is safe to commit it
        apiKey: '45765923aab0ae9171cd5a10e8a17bf0',

        indexName: 'opensimmoio',

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
        */

        //... other Algolia params
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/Introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discourse',
                href: 'https://openuc2.com',
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
                href: 'https://github.com/openSIMMO/openSIMMO.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} openSIMMO Developers.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules',
);

module.exports = {
  siteMetadata: {
    title: `Be Better`,
    description: `Some Description`,
    author: `GoWeb`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    // `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        prefix: `dogs/`,
        context: true,
        tags: true,
        maxResults: 50,
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/cmsdata`,
        name: `CMS Data`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Be Better`,
        short_name: `Be Better`,
        lang: 'en',
        start_url: `/`,
        theme_color: `#ffffff`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      // import SomeIcon from 'images/svg/some-icon.inline.svg' and use as Component <SomeIcon/>, inline svg
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`uk`, `ru`, `en`],
        defaultLanguage: `uk`,
        generateDefaultLanguagePage: '/uk',
        redirect: false,
        siteUrl: '',

        i18nextOptions: {
          lng: 'uk',
          load: 'currentOnly',
          interpolation: {
            escapeValue: false,
          },
          nsSeparator: true,
          keySeparator: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be omitted or customized
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public'],
        // Any additional eslint-webpack-plugin options below
        // ...
      },
    },
  ],
};

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Rodrigo Herrera',
  siteDescription: 'Personal Website of Rodrigo Herrera Diaz ',
  siteUrl: 'https://rodrigo-herrera.info',
  plugins: [
    {
      use: 'gridsome-plugin-typescript'
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'de-de',
          'en-gb'
        ],
        pathAliases: { // path segment alias for each locales
          'de-de': 'de',
          'en-gb': 'en'
        },
        fallbackLocale: 'en-gb', // fallback language
        defaultLocale: 'en-gb', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {
          'de-de': require('./src/locales/de-de.json'),
          'en-gb': require('./src/locales/en-gb.json'),
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap'
    }
  ]
}

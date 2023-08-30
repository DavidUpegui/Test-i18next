/** @type {import('next-i18next').UserConfig} */
module.exports = {
    i18n: {
      defaultLocale: 'es',
      locales: ['es', 'en'],
      fallbacks: {
        en: 'es', 
        es: 'en', 
      },
    },
  }
import colors from 'vuetify/es5/util/colors'

module.exports = {

  ssr: false,

  head: {
    titleTemplate: '%s - nuxt-app',
    title: 'nuxt-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [{ src: "@/plugins/vueCountry.js" }],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],


  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],

  i18n:  {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          'en': 'En',
          'ru': 'Ru',
          'currencyConverter': 'Currency Converter',
          'from': 'from',
          'to': 'To',
          'amount': 'Amount',
          'total': 'Total',
          'currency': 'Currency',
          'home': 'Home',
          'list': 'List',
          'currencyListUpdated': 'Currency list updated',
          'amountIsRequired': 'Amount is required!',
          'lightMode': 'Light Mode'
        },
        ru: {
          'en': 'Анг',
          'ru': 'Рус',
          'currencyConverter': 'Конвертер валют',
          'from': 'Из',
          'to': 'В',
          'amount': 'Сумма',
          'total': 'Итог',
          'currency': 'Валюта',
          'home': 'Главная',
          'list': 'Лист',
          'currencyListUpdated': 'Лист валют обновлен',
          'amountIsRequired': 'Сумма отсутсвует!',
          'lightMode': 'Светлый Режим'
        },
      }
    }
  },

  axios: {
    baseURL: '/',
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        light: {
          primary: colors.purple,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.red.accent3,
          success: colors.green.accent3,
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {}
}

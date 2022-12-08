

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: false,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"en","messages":{"en":{"en":"En","ru":"Ru","currencyConverter":"Currency Converter","from":"from","to":"To","amount":"Amount","total":"Total","currency":"Currency","home":"Home","list":"List","currencyListUpdated":"Currency list updated","amountIsRequired":"Amount is required!","lightMode":"Light Mode"},"ru":{"en":"Анг","ru":"Рус","currencyConverter":"Конвертер валют","from":"Из","to":"В","amount":"Сумма","total":"Итог","currency":"Валюта","home":"Главная","list":"Лист","currencyListUpdated":"Лист валют обновлен","amountIsRequired":"Сумма отсутсвует!","lightMode":"Светлый Режим"}}},
  vueI18nLoader: false,
  locales: ["en","ru"],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieAge":365,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en"},{"code":"ru"}],
  localeCodes: ["en","ru"],
  additionalMessages: [],
}

export const localeMessages = {}

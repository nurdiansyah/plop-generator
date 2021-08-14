import i18next, { InitOptions } from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { languages } from "src/locales/supportedLanguages"

const detectionOptions = {
  // order and from where user language should be detected
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "navigator",
    "htmlTag",
    "path",
    "subdomain",
  ],

  // keys or params to lookup language from
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "myDomain",

  // optional htmlTag with lang attribute, the default is:
  // htmlTag: typeof window !== undefined && document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true,
  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: { path: "/" },
}

const i18nResources = languages.reduce(
  (resources: InitOptions["resources"], language): InitOptions["resources"] => {
    resources[language.code] = {
      translations: require(`../locales/${language.code}/translations.json`),
    }
    return resources
  },
  {}
)

i18next.use(LanguageDetector).init({
  whitelist: languages.map(({ code }) => code),
  fallbackLng: "en",
  resources: i18nResources,
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  react: {
    wait: true,
  },
  detection: detectionOptions,
  keySeparator: false,
  supportedLngs: languages.map(({ code }) => code),
  lowerCaseLng: true,
})

export default i18next

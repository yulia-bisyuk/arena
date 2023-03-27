import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uaTranslation from './locales/ua.json';
import enTranslation from './locales/en.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  ua: {
    translation: uaTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    lng: "ua",
    fallbackLng: "ua",
    debug: false,
    detection: {
      order: ['querystring', 'cookie'],
      caches: ['cookie']
    },
    resources,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

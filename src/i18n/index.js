import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import pl from './locales/pl/translation.json'
import en from './locales/en/translation.json'
import ru from './locales/ru/translation.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pl: { translation: pl },
      en: { translation: en },
      ru: { translation: ru },
    },
    lng: 'pl',
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
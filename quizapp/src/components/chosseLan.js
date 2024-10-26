import React from 'react';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import enTranslation from './translations/en.json';
import esTranslation from './translations/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    es: { translation: esTranslation }
  },
  lng: 'en', // default language
  fallbackLng: 'en', // fallback language if translation for selected language is not available
  interpolation: {
    escapeValue: false // React already does escaping
  }
});

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Spanish</button>
    </div>
  );
}

export default App;
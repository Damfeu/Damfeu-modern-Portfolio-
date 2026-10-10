import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/fr/translation.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslation },
            fr: { translation: frTranslation },
        },
        fallbackLng: 'fr',
        detection: {
            order: ['localStorage'],
            caches: ['localStorage'],
            lookupLocalStorage: 'portfolioLang_v2',
        },
        interpolation: {
            escapeValue: false,
        },
    });

// Keep <html lang> in sync for screen readers and SEO
document.documentElement.lang = i18n.resolvedLanguage ?? 'fr';
i18n.on('languageChanged', (lng) => {
    document.documentElement.lang = lng;
});

export default i18n;

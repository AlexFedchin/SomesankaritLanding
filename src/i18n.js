import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fi from "./locales/fi.json";

// Load saved language or fallback to 'fi'
const savedLang = localStorage.getItem("language") || "fi";

// Initialize i18n
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fi: { translation: fi },
  },
  lng: savedLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  // Optional: detect and log when language is changed
  // Not required for it to work, just helpful for debugging
  debug: false,
});

// Set the <html lang="..."> on init
document.documentElement.lang = savedLang;

// Update <html lang="..."> and localStorage on language change
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  localStorage.setItem("language", lng);
});

export default i18n;

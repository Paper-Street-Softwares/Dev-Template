// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import contentPT from "./locales/pt.json"; // para textos já traduzidos, se quiser
import contentEN from "./locales/en.json"; // idem
import content from "./content/content"; // seu content.js

// Função para extrair só os textos (ignora imagens ou JSX)
const extractText = (obj) => {
  const result = {};
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      result[key] = obj[key];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      result[key] = extractText(obj[key]);
    }
  }
  return result;
};

const ptTexts = {
  ...extractText(content.texts),
  ...contentPT, // caso tenha textos extras em JSON
};

const enTexts = {
  ...extractText(content.texts), // você pode substituir aqui pelos textos em inglês
  ...contentEN,
};

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: ptTexts },
    en: { translation: enTexts },
  },
  lng: "pt",
  fallbackLng: "pt",
  interpolation: { escapeValue: false },
});

export default i18n;

import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

export const LANGUAGE_STORAGE_KEY = 'userLanguage';

export const normalizeLanguage = (lang) => {
    if (!lang || typeof lang !== 'string') {
        return 'en';
    }
    const cleanLang = lang.trim().toLowerCase();
    if (cleanLang.startsWith('pt')) {
        return 'pt_br';
    }
    return 'en';
};

export const getInitialLanguage = () => {
    let storedLang = null;
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            storedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
        }
    } catch {
        // ignore storage errors
    }

    // 1. Ler o localStorage para ver se o usuário já escolheu um idioma anteriormente.
    if (storedLang) {
        return normalizeLanguage(storedLang);
    }

    // 2. Se estiver vazio, ler a API navigator.language do navegador.
    const browserLang = typeof navigator !== 'undefined' ? (navigator.language || (navigator.languages && navigator.languages[0])) : null;

    // 3. Fazer o fallback seguro: se o navegador estiver em 'pt' ou 'pt-BR', definir como Português. Qualquer outro idioma, definir o padrão como Inglês ('en').
    const detectedLang = normalizeLanguage(browserLang);

    // 4. Salvar essa definição inicial no localStorage
    try {
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem(LANGUAGE_STORAGE_KEY, detectedLang);
        }
    } catch {
        // ignore storage errors
    }

    return detectedLang;
};

export const updateHtmlLang = (lng) => {
    if (typeof document !== 'undefined' && document.documentElement) {
        document.documentElement.lang = lng === 'pt_br' ? 'pt-BR' : 'en';
    }
};

const initialLanguage = getInitialLanguage();
updateHtmlLang(initialLanguage);

const customDetector = {
    name: 'customLanguageDetector',
    lookup() {
        return getInitialLanguage();
    },
    cacheUserLanguage(lng) {
        try {
            if (typeof window !== 'undefined' && window.localStorage) {
                localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
            }
        } catch {
            // ignore
        }
    }
};

const languageDetector = new LanguageDetector();
languageDetector.addDetector(customDetector);

i18n
    .use(Backend)
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        lng: initialLanguage,
        fallbackLng: "en",
        detection: {
            order: ['customLanguageDetector'],
            caches: ['customLanguageDetector'],
        },
        backend: {
            loadPath: "/locales/{{lng}}/translation.json"
        },
        interpolation: {
            escapeValue: false
        }
    });

i18n.on('languageChanged', (lng) => {
    updateHtmlLang(lng);
});

export default i18n;


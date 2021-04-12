import "moment/locale/cs";
import "moment/locale/en-gb";
import "moment/locale/sk";
import "moment/locale/es";

import * as H from "history";

export type Language = "en-US" | "cs-CZ" | "sk-SK" | "es-ES";

const fallbackLanguage: Language = 'en-US';
export type Shorthands = "en" | "cz" | "sk" | "es";
export const shorthands: Shorthands[] = ["en", "cz", "sk", "es"];
export const languages: Language[] = ["en-US", "cs-CZ", "sk-SK", "es-ES"];
const shorthandMap: Record<Shorthands, Language> = {
    en: "en-US",
    sk: "sk-SK",
    cz: "cs-CZ",
    es: "es-ES",
};

export const defaultLanguage = getDefaultLanguage();
export const currentLanguage = getLanguageFromLocation(window.location);

export const defaultShortLanguage = defaultLanguage.substr(0, 2);
export const currentShortLanguage = currentLanguage.substr(0, 2);

export function getLanguageFromLocation(location: H.Location | Location): Language {
    const m = new RegExp(`^\\/(${shorthands.join("|")})`).exec(location.pathname);
    const lang = (m && m[1]) || defaultLanguage;
    return lang.length === 2 ? shorthandMap[lang as Shorthands] : (lang as Language);
}

export function getDefaultLanguage(): Language {
    let lang: Language = navigator.language || (navigator as any).userLanguage;
    if (!lang) {
        lang = fallbackLanguage;
    }
    if (lang.length === 2) {
        lang = shorthandMap[lang.toLowerCase() as Shorthands] || fallbackLanguage;
    }
    const spl = lang.split("-");
    lang = [spl[0], spl[1].toUpperCase()].join("-") as Language;
    if (!languages.includes(lang)) {
        lang = fallbackLanguage;
    }
    return lang || fallbackLanguage;
}

export function languageToMomentLanguage(lang: Language): string {
    const map = {
        "en-US": "en-GB",
        "cs-CZ": "cs",
        "sk-SK": "sk",
        "es-ES": "es",
    };
    return map[lang];
}

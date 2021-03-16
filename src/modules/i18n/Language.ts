import "moment/locale/cs";
import "moment/locale/en-gb";
import "moment/locale/sk";
import "moment/locale/es";

import * as H from "history";

export type Language = "en-US" | "cs-CZ" | "sk-SK" | "es-ES";

export type Shorthands = "en" | "cz" | "sk" | "es";
export const shorthands: Shorthands[] = ["en", "cz", "sk", "es"];
export const languages: Language[] = ["en-US", "cs-CZ", "sk-SK", "es-ES"];

export const defaultLanguage = getDefaultLanguage();
export const currentLanguage = getLanguageFromLocation(window.location);

export const defaultShortLanguage = defaultLanguage.substr(0, 2);
export const currentShortLanguage = currentLanguage.substr(0, 2);

export function getLanguageFromLocation(location: H.Location | Location): Language {
    const m = new RegExp(`^\\/(${shorthands.join("|")})`).exec(location.pathname);
    return ((m && m[1]) || defaultLanguage) as Language;
}

export function getDefaultLanguage(): Language {
    let lang = navigator.language || (navigator as any).userLanguage;
    if (!lang) {
        lang = "en-US";
    }
    const spl = lang.split("-");
    lang = [spl[0], spl[1].toUpperCase()].join("-");
    if (!languages.includes(lang)) {
        lang = "en-US";
    }
    return lang || "en-US";
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

import "moment/locale/cs";
import "moment/locale/en-gb";
import "moment/locale/sk";

import * as H from "history";
import * as moment from "moment";

export type Language = "en-US" | "cs-CZ" | "sk-SK" | "es-ES";

export type Shorthands = "en" | "cz" | "sk" | "es";
export const shorthands: Shorthands[] = ["en", "cz", "sk", "es"];
export const languages: Language[] = ["en-US", "cs-CZ", "sk-SK", "es-ES"];

export type Plural = {
    "sg": string;
    "pl": string;
    "0": string;
    "1": string;
    "2-4": string;
    ">5": string;
};

type Params = {[key: string]: any};

interface PhraseBasis {
    phrase: string;
    plurals: Partial<Plural>;
}

export type LanguagePhrase<P extends Params = {}> = Partial<PhraseBasis> & P;

type Translations = {[key: string]: LanguagePhrase | string};

/**
 * Creates object with interface {get(string, parameters, count), language}.
 * Example:
 * ```ts
 * const L = createLanguage({
 *     cs: {
 *         foo: "fú"
 *     },
 *     en: {
 *         foo: "foo"
 *     }
 * })
 * ```
 * Object MUST be of same structure.
 * @method get() - 1st parameter is mandatory (it is a key of translations)
 * 2nd parameter is optional and MUST be compatible with object given in translations.
 * Example:
 * So if this structure is passed as parameter:
 * ```ts
 * const translations = {
 *     en: {
 *         ...
 *         "foo {bar} {baz}": {
 *             phrase: "foo {bar} {baz}",
 *             bar: "",
 *             baz: ""
 *         }
 *         ...
 *     }
 * }
 * ```
 * Then translation would look like this:
 * ```ts
 * L.get("foo {bar} {baz}", {
 *     bar: "something",
 *     baz: "foo"
 * });
 * ```
 * And final string will be "foo something foo".
 *
 * Following structures will produce error:
 * ```ts
 * L.get("foo {bar} {baz}", {
 *     foo: "bar" // foo is not in keyof translations.en["foo {bar} {baz}"]
 *     // missing key
 * });
 * // ...
 * L.get("not existing key");
 * ```
 *
 * 3rd (or second overload parameter) is optional and is used with the plurals key.
 * If only "sg" and "pl" keys are present and
 * count == 1 then "sg" key is used
 * "pl" otherwise
 * In languages such as Czech or Slovak plurals are different for count 0, 1, 2-4 and > 5
 * so for this cases there is an option to pass "0", "1", "2-4" and ">5" keys.
 * Example:
 * ```ts
 * const L = createLanguage({
 *     cs: {
 *         car: {
 *             plurals: {
 *                 "0": "aut",
 *                 "1": "auto",
 *                 "2-4": "auta",
 *                 ">5": "aut"
 *             }
 *         }
 *     },
 *     en: {
 *         car: {
 *             plurals: {
 *                 "sg": "car",
 *                 "pl": "cars"
 *             }
 *         }
 *     }
 * });
 *
 * L.language = "en";
 * L.get("car", 1); // car
 * L.get("car", 2); // cars
 * L.get("car", 10); // cart
 *
 * L.language = "cs";
 * L.get("car", 1); // auto
 * L.get("car", 2); // auta
 * L.get("car", 10); // aut
 * ```
 * @param translations
 * @param initLang
 */
export default function createLanguage<T extends Translations>(
    translations: {[l in Language]: T},
    initLang: Language = getDefaultLanguage()
) {
    return new (class {
        public language: Language = initLang;

        setLanguage(lang: Language | Shorthands) {
            this.language = (shorthands.includes(lang as Shorthands)
                ? getLong(lang as Shorthands)
                : lang) as Language;
            moment.locale(languageToMomentLanguage(this.language));
        }

        get<P extends T[keyof T]>(key: keyof T, count?: number): string;
        get<P extends T[keyof T]>(
            key: keyof T,
            parameters?: P extends T[keyof T] ? Partial<P> : never,
            count?: number
        ): string;
        get<P extends T[keyof T]>(
            key: keyof T,
            parameters?: number | (P extends T[keyof T] ? Partial<P> : never),
            count?: number
        ): string {
            let phrase = translations[this.language][key] as LanguagePhrase | undefined;
            if (typeof phrase === "undefined") {
                console.error(`Language translation '${key}' does not exists.`);
                return "";
            }
            if (typeof phrase == "string") {
                return phrase;
            }
            let phraseString: string;
            if (typeof parameters == "number") {
                count = parameters;
                parameters = undefined;
            }
            if (phrase.plurals && count !== undefined) {
                if (count === 1) {
                    phraseString = phrase.plurals["sg"]
                        ? phrase.plurals["sg"]
                        : (phrase.plurals["1"] as string);
                } else if (phrase.plurals["pl"]) {
                    phraseString = phrase.plurals["pl"] as string;
                } else if (count === 0) {
                    phraseString = phrase.plurals["0"] as string;
                } else if (count > 1 && count < 5) {
                    phraseString = phrase.plurals["2-4"] as string;
                } else {
                    phraseString = phrase.plurals[">5"] as string;
                }
            } else {
                phraseString = phrase.phrase || "";
            }
            if (parameters) {
                Object.keys(parameters as object).forEach((k: string) => {
                    phraseString = phraseString.replace(`{${k}}`, (parameters as any)[k]);
                });
            }
            return phraseString;
        }
    })();
}

export const defaultLanguage = getDefaultLanguage();
export const currentLanguage = getLanguageFromLocation(window.location);

export const defaultShortLanguage = defaultLanguage.substr(0, 2);
export const currentShortLanguage = currentLanguage.substr(0, 2);

export function getLanguageFromLocation(location: H.Location | Location): Language {
    const m = new RegExp(`^\\/(${shorthands.join("|")})`).exec(location.pathname);
    return ((m && m[1]) || defaultLanguage) as Language;
}

const getLong = (short: Shorthands): Language =>
    ({
        en: "en-US" as Language,
        sk: "sk-SK" as Language,
        cz: "cs-CZ" as Language,
        es: "es-ES" as Language,
    }[short]);

export function getDefaultLanguage(): Language {
    let lang = navigator.language || (navigator as any).userLanguage;
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
        "es-ES": "es-ES",
    };
    return map[lang];
}

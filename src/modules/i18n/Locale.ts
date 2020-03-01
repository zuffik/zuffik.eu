import createLanguage, {currentLanguage} from "./Language";
import sk from "./locales/sk";
import en from "./locales/en";
import es from "./locales/es";
import cs from "./locales/cs";

export const L = createLanguage({
    "sk-SK": sk,
    "en-US": en,
    "es-ES": es,
    "cs-CZ": cs,
});

L.setLanguage(currentLanguage);

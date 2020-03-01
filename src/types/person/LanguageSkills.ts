import {Language as Lan} from "../../modules/i18n/Language";

export type LanguageLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type Language = Lan & "de-DE";

export type LanguageSkills = Record<Language, LanguageLevel>;

import {Language as Lan} from "../../modules/i18n/Language";
import {MessageDescriptor} from "react-intl";

export type LanguageLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type Language = Lan & "de-DE";

export interface LanguageSkill {
    label: MessageDescriptor;
    level: LanguageLevel;
}
export type LanguageSkills = Record<Language, LanguageSkill>;

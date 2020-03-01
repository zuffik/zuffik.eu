import {Moment} from "moment";
import {Contact} from "./Contact";
import {LanguageSkills} from "./LanguageSkills";

export class Person {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly birthDay: Moment,
        public readonly contact: Contact,
        public readonly languageSkills: LanguageSkills,
        public readonly titleBefore?: string,
        public readonly titleAfter?: string,
        public readonly bio?: string,
        public readonly hobby: string[] = []
    ) {}
}

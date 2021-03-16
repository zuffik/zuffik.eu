import {Moment} from "moment";
import {Contact} from "./Contact";
import {LanguageSkills} from "./LanguageSkills";
import {LocalizationResource} from "../LocalizationResource";

export class Person {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly birthDay: Moment,
        public readonly contact: Contact,
        public readonly address: string,
        public readonly languageSkills: LanguageSkills,
        public readonly photo: string,
        public readonly titleBefore?: string,
        public readonly titleAfter?: string,
        public readonly highlights?: LocalizationResource,
        public readonly bio?: LocalizationResource,
        public readonly other: LocalizationResource[] = []
    ) {}

    public get fullName(): string {
        return `${this.titleBefore || ""} ${this.firstName} ${this.lastName} ${this.titleAfter || ""}`.trim();
    }
}

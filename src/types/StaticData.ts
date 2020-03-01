import {Company} from "./jobs/Company";
import {Project} from "./jobs/Project";
import {Framework} from "./skills/Framework";
import {Language} from "./skills/Language";
import {Platform} from "./skills/Platform";
import {Utility} from "./skills/Utility";
import {School} from "./jobs/School";
import {Person} from "./person/Person";

export class StaticData {
    constructor(
        // person
        public readonly person: Person,

        // skills
        public readonly frameworks: Framework[],
        public readonly languages: Language[],
        public readonly platforms: Platform[],
        public readonly utilities: Utility[],
        // jobs
        public readonly companies: Company[],
        public readonly schools: School[],
        public readonly projects: Project[]
    ) {}
}

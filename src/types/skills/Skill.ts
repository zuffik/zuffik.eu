import {Entity, EntityImage} from "../Entity";
import {Job} from "../jobs/Job";
import {School} from "../jobs/School";
import {Project} from "../jobs/Project";
import {LocalizationResource} from "../LocalizationResource";

export class Skill extends Entity {
    constructor(
        id: string,
        label: LocalizationResource,
        image: EntityImage,
        link: string,
        public readonly jobs: (Job | School)[],
        public readonly projects: Project[],
        public readonly knowledge: number,
        description?: LocalizationResource
    ) {
        super(id, label, image, link, description);
    }
}

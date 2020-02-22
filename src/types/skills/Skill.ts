import {Entity, EntityImage} from "../Entity";
import {Job} from "../jobs/Job";
import {School} from "../jobs/School";
import {Project} from "../jobs/Project";

export class Skill extends Entity {
    constructor(
        id: string,
        label: string,
        image: EntityImage,
        link: string,
        public readonly jobs: (Job | School)[],
        public readonly projects: Project[],
        public readonly knowledge: number,
        description?: string,
    ) {
        super(id, label, image, link, description);
    }
}

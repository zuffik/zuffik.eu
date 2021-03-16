import {Entity, EntityImage} from "../Entity";
import {Skill} from "../skills/Skill";
import {Moment} from "moment";
import {LocalizationResource} from "../LocalizationResource";

export abstract class Job extends Entity {
    private readonly _skills: Skill[] = [];
    constructor(
        id: string,
        label: LocalizationResource,
        image: EntityImage,
        link: string,
        description?: LocalizationResource,
        public readonly from?: Moment,
        public readonly to?: Moment
    ) {
        super(id, label, image, link, description);
    }

    public set skills(skills: Skill[]) {
        this._skills.push(...skills);
    }

    public get skills(): Skill[] {
        return this._skills;
    }

    public addSkill(skill: Skill) {
        this._skills.push(skill);
    }
}

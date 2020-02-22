import {Entity} from "../Entity";
import {Skill} from "../skills/Skill";

export abstract class Job extends Entity {
    private readonly _skills: Skill[] = [];

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

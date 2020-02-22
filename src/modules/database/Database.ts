import * as _ from 'lodash';
import {skills} from "./Skills";
import {Skill} from "../../types/skills/Skill";
import {StaticData} from "../../types/StaticData";
import {jobs} from "./Jobs";

for (const category of _.values(skills)) {
    for (const skill of _.values<Skill>(category)) {
        for (const job of [...skill.projects, ...skill.jobs]) {
            job.addSkill(skill);
        }
    }
}

export const database = new StaticData(
    // skills
    _.sortBy(_.values(skills.frameworks), skill => -skill.knowledge),
    _.sortBy(_.values(skills.languages), skill => -skill.knowledge),
    _.sortBy(_.values(skills.platforms), skill => -skill.knowledge),
    _.sortBy(_.values(skills.utilities), skill => -skill.knowledge),
    // jobs
    _.values(jobs.companies),
    _.values(jobs.schools),
    _.values(jobs.projects),
);

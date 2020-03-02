import * as _ from "lodash";
import {skills} from "./Skills";
import {Skill} from "../../types/skills/Skill";
import {StaticData} from "../../types/StaticData";
import {jobs} from "./Jobs";
import {Person} from "../../types/person/Person";
import moment from "moment";
import {Contact} from "../../types/person/Contact";
import {Link} from "../../types/person/Link";
import {L} from "../i18n/Locale";

for (const category of _.values(skills)) {
    for (const skill of _.values<Skill>(category)) {
        for (const job of [...skill.projects, ...skill.jobs]) {
            job.addSkill(skill);
        }
    }
}

export const database = new StaticData(
    new Person(
        "Kristián",
        "Žuffa",
        moment("1996-01-08"),
        new Contact(
            new Link("+421 905 856 819", 'tel:"+421905856819"'),
            new Link("kristian.zuffa@gmail.com", "mailto:kristian.zuffa@gmail.com"),
            "+421 905 856 819",
            new Link("zuffik", "https://www.instagram.com/zuffik/"),
            new Link("Kristián Žuffa", "https://facebook.com/zuffik"),
            new Link("Kristián Žuffa", "https://twitter.com/KristianZuffa"),
            new Link("zuffik", "https://github.com/zuffik"),
            new Link("zuffik", "https://pinterest.com/zuffik")
        ),
        "Medvedzie, 027 44 Tvrdošín, Slovakia",
        {
            "sk-SK": "C2",
            "cs-CZ": "C1",
            "en-US": "B2",
            "es-ES": "A2",
            "de-DE": "A1",
        },
        "https://s.gravatar.com/avatar/7d40d7be4408965747f2903a4350bd29?s=512",
        "Bc.",
        undefined,
        L.get("programmer, react (and full-stack) developer"),
        L.get(
            "I am student of FRI in University of Žilina, Slovakia. I've been programming since 2010 and participated in various project with various platforms."
        ),
        [
            L.get("Math optimization"),
            L.get("Simulations"),
            L.get("Algorithms"),
            L.get("Data structures"),
            L.get("A, B driver licence (200 000km driven)"),
        ]
    ),
    // skills
    _.sortBy(_.values(skills.frameworks), (skill) => -skill.knowledge),
    _.sortBy(_.values(skills.languages), (skill) => -skill.knowledge),
    _.sortBy(_.values(skills.platforms), (skill) => -skill.knowledge),
    _.sortBy(_.values(skills.utilities), (skill) => -skill.knowledge),
    // jobs
    _.values(jobs.companies),
    _.values(jobs.schools),
    _.values(jobs.projects)
);

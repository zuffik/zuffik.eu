import * as _ from "lodash";
import {skills} from "./Skills";
import {Skill} from "../../types/skills/Skill";
import {StaticData} from "../../types/StaticData";
import {jobs} from "./Jobs";
import {Person} from "../../types/person/Person";
import moment from "moment";
import {Contact} from "../../types/person/Contact";
import {Link} from "../../types/person/Link";
import {defineMessage} from "react-intl";

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
            new Link("zuffik", "https://pinterest.com/zuffik"),
            new Link("Kristián Žuffa", "https://www.linkedin.com/in/kristian-zuffa/")
        ),
        "Medvedzie, 027 44 Tvrdošín, Slovakia",
        {
            "sk-SK": {
                label: defineMessage({id: "db.me.languageSkills.sk-SK", defaultMessage: "Slovak"}),
                level: "C2",
            },
            "cs-CZ": {
                label: defineMessage({id: "db.me.languageSkills.cs-CZ", defaultMessage: "Czech"}),
                level: "C1",
            },
            "en-US": {
                label: defineMessage({id: "db.me.languageSkills.en-US", defaultMessage: "English"}),
                level: "B2",
            },
            "es-ES": {
                label: defineMessage({id: "db.me.languageSkills.es-ES", defaultMessage: "Spanish"}),
                level: "A2",
            },
            "de-DE": {
                label: defineMessage({id: "db.me.languageSkills.de-DE", defaultMessage: "German"}),
                level: "A1",
            },
        },
        "https://s.gravatar.com/avatar/7d40d7be4408965747f2903a4350bd29?s=512",
        "Ing.",
        undefined,
        defineMessage({
            id: "db.me.highlights",
            defaultMessage: "programmer, react (and full-stack) developer",
        }),
        defineMessage({
            id: "db.me.bio",
            defaultMessage:
                "I was student of FRI in University of Žilina, Slovakia. I've been programming since 2010 and participated in various project with various platforms.",
        }),
        [
            defineMessage({id: "db.me.otherSkills.mathOptimization", defaultMessage: "Math optimization"}),
            defineMessage({id: "db.me.otherSkills.simulations", defaultMessage: "Simulations"}),
            defineMessage({id: "db.me.otherSkills.algorithms", defaultMessage: "Algorithms"}),
            defineMessage({id: "db.me.otherSkills.dataStructures", defaultMessage: "Data structures"}),
            defineMessage({
                id: "db.me.otherSkills.driverLicence",
                defaultMessage: "A, B driver licence (200 000km driven)",
            }),
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

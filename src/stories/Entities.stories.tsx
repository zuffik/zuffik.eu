import React from "react";
import {Skill} from "../components/skills/Skill";
import {database} from "../modules/database/Database";
import {number} from "@storybook/addon-knobs";
import {Job} from "../components/jobs/Job";

export default {
    title: "Entities",
};
const skillsCount =
    database.languages.length +
    database.frameworks.length +
    database.utilities.length +
    database.platforms.length;
const skills = [...database.languages, ...database.frameworks, ...database.platforms, ...database.utilities];
export const skill = () => {
    const index = number("Skill", 0, {
        min: 0,
        max: skillsCount - 1,
        range: true,
    });
    return <Skill skill={skills[index]} />;
};

const jobsCount = database.projects.length + database.companies.length + database.schools.length;
const jobs = [...database.projects, ...database.companies, ...database.schools];
export const job = () => {
    const index = number("Job", 0, {min: 0, max: jobsCount - 1, range: true});
    return <Job job={jobs[index]} />;
};

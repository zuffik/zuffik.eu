import React from "react";
import {SkillList} from "../components/skills/SkillList";
import {database} from "../modules/database/Database";
import {JobList} from "../components/jobs/JobList";

export default {
    title: "Layout",
};

export const skills = () => (
    <SkillList
        frameworks={database.frameworks}
        languages={database.languages}
        platforms={database.platforms}
        utilities={database.utilities}
    />
);

export const jobs = () => (
    <JobList companies={database.companies} schools={database.schools} projects={database.projects} />
);

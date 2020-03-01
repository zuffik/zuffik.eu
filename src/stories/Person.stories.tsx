import React from "react";
import {SkillList} from "../components/skills/SkillList";
import {database} from "../modules/database/Database";
import {JobList} from "../components/jobs/JobList";
import {Person} from "../components/profile/Person";

export default {
    title: "Person",
};

export const person = () => <Person person={database.person} />;

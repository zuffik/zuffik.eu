import * as React from "react";
import {SkillList} from "../skills/SkillList";
import {JobList} from "../jobs/JobList";
import {Company} from "../../types/jobs/Company";
import {School} from "../../types/jobs/School";
import {Project} from "../../types/jobs/Project";
import {Framework} from "../../types/skills/Framework";
import {Language} from "../../types/skills/Language";
import {Platform} from "../../types/skills/Platform";
import {Utility} from "../../types/skills/Utility";

interface Props {
    companies: Company[];
    schools: School[];
    projects: Project[];
    frameworks: Framework[];
    languages: Language[];
    platforms: Platform[];
    utilities: Utility[];
}

export const Main: React.FC<Props> = (props: Props): React.ReactElement => {
    return (
        <>
            <SkillList
                frameworks={props.frameworks}
                languages={props.languages}
                platforms={props.platforms}
                utilities={props.utilities}
            />
            <JobList companies={props.companies} schools={props.schools} projects={props.projects} />
        </>
    );
};

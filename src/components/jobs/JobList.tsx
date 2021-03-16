import * as React from "react";
import {useIntl} from "react-intl";
import {School} from "../../types/jobs/School";
import {Project} from "../../types/jobs/Project";
import {Company} from "../../types/jobs/Company";
import {SectionTitle} from "../section/SectionTitle";
import {Grid} from "@material-ui/core";
import {Job} from "./Job";

interface Props {
    companies: Company[];
    schools: School[];
    projects: Project[];
}

export const JobList: React.FC<Props> = (props: Props): React.ReactElement => {
    const intl = useIntl();
    return (
        <>
            <SectionTitle>
                {intl.formatMessage({
                    defaultMessage: "Projects",
                    id: "general.projects",
                })}
            </SectionTitle>
            <Grid container spacing={2} justify="space-between">
                {props.projects.map((project) => (
                    <Grid item key={project.id} xs={12} sm={6} lg={4}>
                        <Job job={project} />
                    </Grid>
                ))}
            </Grid>
            <SectionTitle>
                {intl.formatMessage({
                    defaultMessage: "Career",
                    id: "general.career",
                })}
            </SectionTitle>
            <Grid container spacing={2} justify="space-between">
                {props.companies
                    .filter((j) => !j.hidden)
                    .map((company) => (
                        <Grid item key={company.id} xs={12} sm={6} lg={4}>
                            <Job job={company} />
                        </Grid>
                    ))}
            </Grid>
            <SectionTitle>
                {intl.formatMessage({
                    defaultMessage: "Education",
                    id: "general.education",
                })}
            </SectionTitle>
            <Grid container spacing={2} justify="space-between">
                {props.schools.map((school) => (
                    <Grid item key={school.id} xs={12} sm={4} lg={4}>
                        <Job job={school} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

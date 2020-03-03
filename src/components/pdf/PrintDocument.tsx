import * as React from "react";
import {Box, Theme, Typography} from "@material-ui/core";
import {PersonPrint} from "../profile/PersonPrint";
import {Person} from "../../types/person/Person";
import {PrintSection} from "./PrintSection";
import {PrintSectionTitle} from "./PrintSectionTitle";
import {L} from "../../modules/i18n/Locale";
import {School} from "../../types/jobs/School";
import {Company} from "../../types/jobs/Company";
import * as _ from "lodash";
import {Skill} from "../../types/skills/Skill";
import {makeStyles} from "@material-ui/core/styles";

interface Props {
    person: Person;
    schools: School[];
    jobs: Company[];
    skills: Skill[];
}

const useStyles = makeStyles((theme: Theme) => ({
    block: {
        display: "block",
    },
}));

const getSkillKnowledgeLabel = (knowledge: number): string => {
    if (knowledge > 90) {
        return L.get("Senior");
    }
    if (knowledge > 50) {
        return L.get("Medior");
    }
    return L.get("Junior");
};

export const PrintDocument: React.FC<Props> = (props: Props): React.ReactElement => {
    const styles = useStyles(props);
    return (
        <Box display="none" displayPrint="block">
            <PersonPrint person={props.person} />
            <PrintSection title={L.get("Personal information")}>
                {[
                    [
                        <PrintSectionTitle>{L.get("Address")}</PrintSectionTitle>,
                        <Typography>{props.person.address}</Typography>,
                    ],
                    [
                        <PrintSectionTitle>{L.get("E-mail")}</PrintSectionTitle>,
                        <Typography>{props.person.contact.email.label}</Typography>,
                    ],
                    [
                        <PrintSectionTitle>{L.get("Phone")}</PrintSectionTitle>,
                        <Typography>{props.person.contact.phone.label}</Typography>,
                    ],
                    [
                        <PrintSectionTitle>{L.get("Birthday")}</PrintSectionTitle>,
                        <Typography>{props.person.birthDay.format("DD.MM.YYYY")}</Typography>,
                    ],
                ]}
            </PrintSection>
            <PrintSection title={L.get("Education")}>
                {
                    props.schools.map((school) => [
                        <PrintSectionTitle>
                            {school.from.format("MM.YYYY")}
                            {" - "}
                            {school.to?.format("MM.YYYY") || L.get("now")}
                        </PrintSectionTitle>,
                        <Typography>
                            <strong>{school.label}</strong>
                            <span className={styles.block}>{school.section}</span>
                            <span className={styles.block}>{school.level}</span>
                        </Typography>,
                    ]) as [React.ReactNode, React.ReactNode][]
                }
            </PrintSection>
            <PrintSection title={L.get("Employment")}>
                {
                    props.jobs.map((job) => [
                        <PrintSectionTitle>
                            {job.from.format("MM.YYYY")}
                            {" - "}
                            {job.to?.format("MM.YYYY") || L.get("now")}
                        </PrintSectionTitle>,
                        <Typography>
                            <strong>{job.label}</strong>
                            <span className={styles.block}>{job.primaryTask}</span>
                        </Typography>,
                    ]) as [React.ReactNode, React.ReactNode][]
                }
            </PrintSection>
            <PrintSection title={L.get("Language skills")}>
                {
                    _.entries(props.person.languageSkills).map(([language, skill]) => [
                        <PrintSectionTitle>{L.get(language as any)}</PrintSectionTitle>,
                        <Typography>{L.get(skill as any)}</Typography>,
                    ]) as [React.ReactNode, React.ReactNode][]
                }
            </PrintSection>
            <PrintSection title={L.get("Other skills")}>
                {
                    props.skills.map((skill) => [
                        <PrintSectionTitle>{skill.label}</PrintSectionTitle>,
                        <Typography>{getSkillKnowledgeLabel(skill.knowledge)}</Typography>,
                    ]) as [React.ReactNode, React.ReactNode][]
                }
            </PrintSection>
            <PrintSection title={L.get("Other knowledges")}>
                {props.person.other.map((other) => [<Typography>{other}</Typography>]) as [React.ReactNode][]}
            </PrintSection>
        </Box>
    );
};

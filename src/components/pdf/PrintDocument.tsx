import * as React from "react";
import {Box, Theme, Typography} from "@material-ui/core";
import {PersonPrint} from "../profile/PersonPrint";
import {Person} from "../../types/person/Person";
import {PrintSection} from "./PrintSection";
import {PrintSectionTitle} from "./PrintSectionTitle";
import {School} from "../../types/jobs/School";
import {Company} from "../../types/jobs/Company";
import * as _ from "lodash";
import {Skill} from "../../types/skills/Skill";
import {makeStyles} from "@material-ui/core/styles";
import {defineMessage, useIntl} from "react-intl";
import {Language} from "../../modules/i18n/Language";
import {LanguageSkill} from "../../types/person/LanguageSkills";

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
        return defineMessage("Senior");
    }
    if (knowledge > 50) {
        return defineMessage("Medior");
    }
    return defineMessage("Junior");
};

export const PrintDocument: React.FC<Props> = (props: Props): React.ReactElement => {
    const styles = useStyles(props);
    const intl = useIntl();
    return (
        <Box display="none" displayPrint="block">
            <PersonPrint person={props.person} />
            <PrintSection
                title={intl.formatMessage({
                    defaultMessage: "Personal information",
                    id: "general.personalInfo",
                })}
            >
                {[
                    [
                        <PrintSectionTitle>
                            {intl.formatMessage({defaultMessage: "Address", id: "general.address"})}
                        </PrintSectionTitle>,
                        <Typography>{props.person.address}</Typography>,
                    ],
                    [
                        <PrintSectionTitle>
                            {intl.formatMessage({defaultMessage: "E-mail", id: "general.email"})}
                        </PrintSectionTitle>,
                        <Typography>{props.person.contact.email.label}</Typography>,
                    ],
                    [
                        <PrintSectionTitle>
                            {intl.formatMessage({defaultMessage: "Phone", id: "general.phone"})}
                        </PrintSectionTitle>,
                        <Typography>{props.person.contact.phone.label}</Typography>,
                    ],
                    [
                        <PrintSectionTitle>
                            {intl.formatMessage({defaultMessage: "Birthday", id: "general.birthday"})}
                        </PrintSectionTitle>,
                        <Typography>{props.person.birthDay.format("DD.MM.YYYY")}</Typography>,
                    ],
                ]}
            </PrintSection>
            <PrintSection title={intl.formatMessage({defaultMessage: "Education", id: "general.education"})}>
                {
                    props.schools.map((school) => [
                        <PrintSectionTitle>
                            {school.from!.format("MM.YYYY")}
                            {" - "}
                            {school.to?.format("MM.YYYY") ||
                                intl.formatMessage({defaultMessage: "now", id: "general.now"})}
                        </PrintSectionTitle>,
                        <Typography>
                            <strong>{intl.formatMessage(school.label)}</strong>
                            <span className={styles.block}>{intl.formatMessage(school.section)}</span>
                            <span className={styles.block}>{intl.formatMessage(school.level)}</span>
                        </Typography>,
                    ]) as [React.ReactNode, React.ReactNode][]
                }
            </PrintSection>
            <PrintSection
                title={intl.formatMessage({defaultMessage: "Employment", id: "general.employment"})}
            >
                {
                    props.jobs.map((job) => [
                        <PrintSectionTitle>
                            {job.from.format("MM.YYYY")}
                            {" - "}
                            {job.to?.format("MM.YYYY") ||
                                intl.formatMessage({defaultMessage: "now", id: "general.now"})}
                        </PrintSectionTitle>,
                        <Typography>
                            <strong>{intl.formatMessage(job.label)}</strong>
                            <span className={styles.block}>
                                {job.primaryTask ? intl.formatMessage(job.primaryTask) : ""}
                            </span>
                        </Typography>,
                    ]) as [React.ReactNode, React.ReactNode][]
                }
            </PrintSection>
            <PrintSection
                title={intl.formatMessage({defaultMessage: "Language skills", id: "general.languageSkills"})}
            >
                {
                    _.keys(props.person.languageSkills).map((language) => {
                        const skill = (props.person.languageSkills as Record<Language, LanguageSkill>)[
                            language as Language
                        ];
                        return [
                            <PrintSectionTitle>{intl.formatMessage(skill.label)}</PrintSectionTitle>,
                            <Typography>{skill.level}</Typography>,
                        ];
                    }) as [React.ReactNode, React.ReactNode][]
                }
            </PrintSection>
            <PrintSection
                title={intl.formatMessage({defaultMessage: "Other skills", id: "general.otherSkills"})}
                small
            >
                {
                    props.skills
                        .sort((a, b) => (a.knowledge < b.knowledge ? 1 : -1))
                        .map((skill) => [
                            <PrintSectionTitle>{intl.formatMessage(skill.label)}</PrintSectionTitle>,
                            <Typography>{getSkillKnowledgeLabel(skill.knowledge)}</Typography>,
                        ]) as [React.ReactNode, React.ReactNode][]
                }
            </PrintSection>
            <PrintSection
                title={intl.formatMessage({defaultMessage: "Other knowledge", id: "general.otherKnowledge"})}
            >
                {
                    props.person.other.map((other) => [
                        <Typography>{intl.formatMessage(other)}</Typography>,
                    ]) as [React.ReactNode][]
                }
            </PrintSection>
        </Box>
    );
};

import * as React from "react";
import {Grid} from "@material-ui/core";
import {Framework} from "../../types/skills/Framework";
import {Language} from "../../types/skills/Language";
import {Platform} from "../../types/skills/Platform";
import {Utility} from "../../types/skills/Utility";
import {Skill} from "./Skill";
import {SectionTitle} from "../section/SectionTitle";
import {useIntl} from "react-intl";

interface Props {
    frameworks: Framework[];
    languages: Language[];
    platforms: Platform[];
    utilities: Utility[];
}

export const SkillList: React.FC<Props> = (props: Props): React.ReactElement => {
    const total = [...props.frameworks, ...props.languages, ...props.platforms, ...props.utilities];
    const intl = useIntl();

    return (
        <>
            <SectionTitle>
                {intl.formatMessage({defaultMessage: "Skills", id: "general.skills"})}
            </SectionTitle>
            <Grid container spacing={2} justify="space-between">
                {total
                    .sort((a, b) => (a.knowledge < b.knowledge ? 1 : -1))
                    .map((skill) => (
                        <Grid item key={skill.id}>
                            <Skill skill={skill} />
                        </Grid>
                    ))}
            </Grid>
        </>
    );
};

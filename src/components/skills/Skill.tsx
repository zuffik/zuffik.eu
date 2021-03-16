import * as React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Skill as SkillType} from "../../types/skills/Skill";
import {Typography} from "@material-ui/core";
import {Card} from "../elements/Card";
import classNames from "classnames";
import {useIntl} from "react-intl";

interface Props {
    skill: SkillType;
}

const maxScaleDown = 0.3;

const useStyles = makeStyles((theme: Theme) => ({
    root: (props: Props) => ({
        padding: theme.spacing(2),
        width: 130,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transformOrigin: "center",
        transform: `scale(${1 - maxScaleDown + (props.skill.knowledge / 100) * maxScaleDown})`,
    }),
    image: {
        height: 75,
    },
    title: {
        fontSize: theme.typography.pxToRem(24),
        paddingTop: 0,
        paddingBottom: 0,
        fontWeight: 500,
        whiteSpace: "nowrap",
    },
    titleWithWhitespace: {
        fontSize: theme.typography.pxToRem(18),
        paddingTop: 6,
        paddingBottom: 6,
    },
    description: {
        fontSize: theme.typography.pxToRem(12),
        height: 18,
        color: theme.palette.grey[400],
    },
    knowledge: {},
}));

export const Skill: React.FC<Props> = (props: Props): React.ReactElement => {
    const styles = useStyles(props);
    const Image = props.skill.image;
    const intl = useIntl();
    return (
        <Card classes={{root: styles.root}}>
            <Image className={styles.image} />
            <Typography
                classes={{
                    root: classNames(styles.title, {
                        [styles.titleWithWhitespace]: intl.formatMessage(props.skill.label).includes(" "),
                    }),
                }}
            >
                {intl.formatMessage(props.skill.label)}
            </Typography>
            <Typography classes={{root: styles.description}}>
                {props.skill.description ? intl.formatMessage(props.skill.description) : ""}
            </Typography>
            <Typography classes={{root: styles.knowledge}}>{props.skill.knowledge}%</Typography>
        </Card>
    );
};

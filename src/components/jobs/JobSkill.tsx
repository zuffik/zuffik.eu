import * as React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Tooltip} from "@material-ui/core";
import {Skill} from "../../types/skills/Skill";
import {useIntl} from "react-intl";

interface Props {
    skill: Skill;
    size?: number;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: (props: Props) => ({
        height: props.size || theme.spacing(3),
        marginTop: 0,
        marginBottom: 0,
        marginLeft: theme.spacing(0.5),
        marginRight: theme.spacing(0.5),
        "& img": {
            filter: "grayscale(70%)",
            opacity: 0.8,
            transition: `all ${theme.transitions.duration.standard}ms`,
        },
        "&:hover img": {
            filter: "grayscale(0%)",
            opacity: 1,
        },
    }),
}));

export const JobSkill: React.FC<Props> = (props: Props): React.ReactElement => {
    const styles = useStyles(props);
    const Image = props.skill.image;
    const intl = useIntl();
    return (
        <Tooltip title={intl.formatMessage(props.skill.label)}>
            <div className={styles.root}>
                <Image height="100%" />
            </div>
        </Tooltip>
    );
};

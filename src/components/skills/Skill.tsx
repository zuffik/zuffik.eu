import * as React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {Skill as SkillType} from "../../types/skills/Skill";
import {Typography} from "@material-ui/core";
import {Card} from "../elements/Card";

interface Props {
    skill: SkillType;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 130,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    image: {
        height: 100
    },
    title: (props: Props) => ({
        fontSize: theme.typography.pxToRem(props.skill.label.split(' ').length === 1 ? 26 : 18),
        paddingTop: props.skill.label.split(' ').length === 1 ? 0 : 6,
        paddingBottom: props.skill.label.split(' ').length === 1 ? 0 : 6,
        fontWeight: 500,
        whiteSpace: 'nowrap'
    }),
    description: {
        fontSize: theme.typography.pxToRem(12),
        height: 18,
        color: theme.palette.grey[400],
    },
    knowledge: {
    }
}));

export const Skill: React.FC<Props> = (props: Props): React.ReactElement => {
    const styles = useStyles(props);
    const Image = props.skill.image;
    return (
        <Card classes={{root: styles.root}}>
            <Image className={styles.image}/>
            <Typography classes={{root: styles.title}}>{props.skill.label}</Typography>
            <Typography classes={{root: styles.description}}>{props.skill.description || ''}</Typography>
            <Typography classes={{root: styles.knowledge}}>{props.skill.knowledge}%</Typography>
        </Card>
    );
};

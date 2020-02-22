import * as React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {Job as JobType} from "../../types/jobs/Job";
import {Card} from "../elements/Card";
import {Typography} from "@material-ui/core";

interface Props {
    job: JobType;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    image: {
        height: 100
    },
    title: (props: Props) => ({
        fontSize: theme.typography.pxToRem(26),
        paddingTop: props.job.label.split(' ').length === 1 ? 0 : 6,
        paddingBottom: props.job.label.split(' ').length === 1 ? 0 : 6,
        fontWeight: 500,
        whiteSpace: 'nowrap'
    }),
    description: {
        fontSize: theme.typography.pxToRem(12),
        height: 18,
        color: theme.palette.grey[400]
    },
    imageWrapper: {
        height: 150,
    }
}));

export const Job: React.FC<Props> = (props: Props): React.ReactElement => {
    const styles = useStyles(props);
    const Image = props.job.image;
    return (
        <Card classes={{root: styles.root}}>
            <div className={styles.imageWrapper}>
                <Image className={styles.image}/>
            </div>
            <Typography classes={{root: styles.title}}>{props.job.label}</Typography>
            <Typography classes={{root: styles.description}}>{props.job.description || ''}</Typography>
        </Card>
    );
};

import * as React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Job as JobType} from "../../types/jobs/Job";
import {Card} from "../elements/Card";
import {Box, Typography} from "@material-ui/core";
import {JobSkill} from "./JobSkill";
import {School} from "../../types/jobs/School";
import {L} from "../../modules/i18n/Locale";
import {Company} from "../../types/jobs/Company";
import {DateRange} from "../date-range/DateRange";

interface Props {
    job: JobType;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    image: {
        height: "100%",
    },
    title: (props: Props) => ({
        fontSize: theme.typography.pxToRem(26),
        paddingTop: props.job.label.split(" ").length === 1 ? 0 : 6,
        paddingBottom: props.job.label.split(" ").length === 1 ? 0 : 6,
        fontWeight: 500,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    }),
    description: {
        fontSize: theme.typography.pxToRem(12),
        color: theme.palette.grey[400],
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
        height: theme.spacing(5),
        textAlign: "justify",
    },
    imageWrapper: {
        height: theme.spacing(6),
        textAlign: "right",
    },
    jobs: {
        overflowX: "auto",
        overflowY: "hidden",
        display: "flex",
        flexDirection: "row",
        "&::-webkit-scrollbar": {
            display: "none",
        },
    },
}));

export const Job: React.FC<Props> = (props: Props): React.ReactElement => {
    const styles = useStyles(props);
    const Image = props.job.image;
    return (
        <Card classes={{root: styles.root}} href={props.job.link}>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                <Typography classes={{root: styles.title}}>{props.job.label}</Typography>
                <div className={styles.imageWrapper}>
                    <Image className={styles.image} />
                </div>
            </Box>
            {(props.job instanceof Company || props.job instanceof School) && (
                <DateRange from={props.job.from} to={props.job.to} />
            )}
            <Typography classes={{root: styles.description}}>
                {(props.job instanceof School
                    ? L.get("Education level") + ": " + props.job.level
                    : props.job.description) || ""}
            </Typography>
            <div className={styles.jobs}>
                {props.job.skills.map((skill) => (
                    <JobSkill key={skill.id} skill={skill} />
                ))}
            </div>
        </Card>
    );
};

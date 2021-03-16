import * as React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Job as JobType} from "../../types/jobs/Job";
import {Card} from "../elements/Card";
import {Box, Typography} from "@material-ui/core";
import {JobSkill} from "./JobSkill";
import {School} from "../../types/jobs/School";
import {DateRange} from "../date-range/DateRange";
import {useIntl} from "react-intl";
import classNames from "classnames";

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
    title: {
        fontSize: theme.typography.pxToRem(26),
        fontWeight: 500,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        paddingTop: 6,
        paddingBottom: 6,
    },
    titleWithWhitespace: {
        paddingTop: 0,
        paddingBottom: 0,
    },
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
    const intl = useIntl();
    return (
        <Card classes={{root: styles.root}} href={props.job.link}>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                <Typography
                    classes={{
                        root: classNames(styles.title, {
                            [styles.titleWithWhitespace]: intl.formatMessage(props.job.label).includes(" "),
                        }),
                    }}
                >
                    {intl.formatMessage(props.job.label)}
                </Typography>
                <div className={styles.imageWrapper}>
                    <Image className={styles.image} />
                </div>
            </Box>
            {props.job.from && <DateRange from={props.job.from} to={props.job.to} />}
            <Typography classes={{root: styles.description}}>
                {(props.job instanceof School
                    ? intl.formatMessage({
                          defaultMessage: "Education level",
                          id: "general.educationLevel",
                      }) +
                      ": " +
                      intl.formatMessage(props.job.level)
                    : props.job.description
                    ? intl.formatMessage(props.job.description)
                    : undefined) || ""}
            </Typography>
            <div className={styles.jobs}>
                {props.job.skills.map((skill) => (
                    <JobSkill key={skill.id} skill={skill} />
                ))}
            </div>
        </Card>
    );
};

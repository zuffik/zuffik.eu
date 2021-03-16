import * as React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Person} from "../../types/person/Person";
import {Avatar, Grid, Typography} from "@material-ui/core";
import {SectionTitle} from "../section/SectionTitle";
import {useIntl} from "react-intl";

interface Props {
    person: Person;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        paddingBottom: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.grey[200]}`,
    },
    avatar: {
        width: theme.spacing(18),
        height: theme.spacing(18),
    },
    highlights: {
        color: theme.palette.grey[600],
        textAlign: "center",
    },
}));

export const PersonPrint: React.FC<Props> = (props: Props): React.ReactElement => {
    const styles = useStyles(props);
    const intl = useIntl();

    return (
        <Grid container justify="space-between" classes={{root: styles.root}}>
            <Grid item>
                <Avatar variant="square" src={props.person.photo} classes={{root: styles.avatar}} />
            </Grid>
            <Grid item>
                <SectionTitle>{props.person.fullName}</SectionTitle>
                <Typography classes={{root: styles.highlights}}>
                    {props.person.highlights ? intl.formatMessage(props.person.highlights) : ""}
                </Typography>
            </Grid>
        </Grid>
    );
};

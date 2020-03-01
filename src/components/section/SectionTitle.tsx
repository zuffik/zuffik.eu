import * as React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

interface Props {
    children: React.ReactNode;
    component?: "h2" | "h1";
}

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        fontWeight: "bold",
        fontSize: theme.typography.pxToRem(64),
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
}));

export const SectionTitle: React.FC<Props> = (props: Props): React.ReactElement => {
    const styles = useStyles(props);
    return (
        <Typography component={props.component || "h2"} classes={{root: styles.title}}>
            {props.children}
        </Typography>
    );
};

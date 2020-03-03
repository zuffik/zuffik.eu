import * as React from "react";
import {Grid, Theme} from "@material-ui/core";
import {PrintSectionTitle} from "./PrintSectionTitle";
import {makeStyles} from "@material-ui/core/styles";

interface Props {
    children: ([React.ReactNode, React.ReactNode] | [React.ReactNode])[];
    title?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
}));

export const PrintSection: React.FC<Props> = (props: Props): React.ReactElement => {
    const styles = useStyles(props);

    return (
        <Grid container spacing={1} classes={{root: styles.root}}>
            {props.title && (
                <Grid item xs={12}>
                    <PrintSectionTitle fontSize={24}>{props.title}</PrintSectionTitle>
                </Grid>
            )}
            {props.children.map(([label, value], i) => (
                <React.Fragment key={i}>
                    <Grid item xs={value ? 4 : 12}>
                        {label}
                    </Grid>
                    <Grid item xs={value ? 8 : 12}>
                        {value}
                    </Grid>
                </React.Fragment>
            ))}
        </Grid>
    );
};

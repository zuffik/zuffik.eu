import * as React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

interface Props {
    children: React.ReactText | React.ReactText[];
    fontSize?: number;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: (props: Props) => ({
        fontWeight: "bold",
        fontSize: theme.typography.pxToRem(props.fontSize || 18),
    }),
}));

export const PrintSectionTitle: React.FC<Props> = (props: Props): React.ReactElement => {
    const styles = useStyles(props);
    return <Typography classes={{root: styles.root}}>{props.children}</Typography>;
};

import * as React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Moment} from "moment";
import {Typography} from "@material-ui/core";
import {L} from "../../modules/i18n/Locale";

interface Props {
    from: Moment;
    to?: Moment;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        fontSize: theme.typography.pxToRem(13),
        fontWeight: "bold",
        color: theme.palette.grey[600],
    },
}));

export const DateRange: React.FC<Props> = (props: Props): React.ReactElement => {
    const styles = useStyles(props);
    return (
        <Typography classes={{root: styles.root}}>
            {props.from.format("MM.YYYY")}
            {" - "}
            {props.to ? props.to.format("MM.YYYY") : L.get("now")}
        </Typography>
    );
};

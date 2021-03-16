import * as React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Moment} from "moment";
import {Typography} from "@material-ui/core";
import {useIntl} from "react-intl";

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
    const intl = useIntl();
    return (
        <Typography classes={{root: styles.root}}>
            {props.from.format("MM.YYYY")}
            {" - "}
            {props.to
                ? props.to.format("MM.YYYY")
                : intl.formatMessage({defaultMessage: "now", id: "general.now"})}
        </Typography>
    );
};

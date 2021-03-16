import * as React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Person as PersonType} from "../../types/person/Person";
import {Person} from "../profile/Person";
import {Typography} from "@material-ui/core";
import {useIntl} from "react-intl";

interface Props {
    person: PersonType;
}

const useStyles = makeStyles((theme: Theme) => ({
    copyright: {
        textAlign: "center",
        color: theme.palette.grey[500],
        fontSize: theme.typography.pxToRem(12),
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2),
    },
}));

export const Footer: React.FC<Props> = (props: Props): React.ReactElement => {
    const styles = useStyles(props);
    const intl = useIntl();
    return (
        <>
            <Person person={props.person} />
            <Typography classes={{root: styles.copyright}}>
                Copyright &copy; zuffik.eu{" "}
                {intl.formatMessage({defaultMessage: "All rights reserved.", id: "general.copyright"})}
            </Typography>
        </>
    );
};

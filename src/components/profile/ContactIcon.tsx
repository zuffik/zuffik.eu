import * as React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {Card} from "../elements/Card";
import {Link} from "../../types/person/Link";
import {Tooltip} from "@material-ui/core";

interface Props {
    link: Link | string;
    children: React.ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(1),
        lineHeight: 0,
        color: theme.palette.common.white,
    },
}));

export const ContactIcon: React.FC<Props> = (props: Props): React.ReactElement => {
    const styles = useStyles(props);
    const href = typeof props.link === "string" ? props.link : props.link.link;
    const title = typeof props.link !== "string" && props.link.label;
    return (
        <Card background="gradient" classes={{action: styles.root}} href={href}>
            <Tooltip title={title || href}>{props.children as any}</Tooltip>
        </Card>
    );
};

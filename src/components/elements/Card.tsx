import * as React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import {PaperProps} from "@material-ui/core/Paper";
import {Card as Paper, CardActionArea} from "@material-ui/core";

interface Props extends Omit<PaperProps, "elevation" | "classes"> {
    background?: "white" | "primary" | "secondary" | "gradient";
    href?: string;
    classes?: Partial<PaperProps["classes"] & Record<"action", string>>;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: (props: Props) => {
        let background = theme.palette.common.white;
        if (["primary", "secondary"].includes(props.background as string)) {
            background = theme.palette[props.background as "primary" | "secondary"].main;
        } else if (props.background === "gradient") {
            background = `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`;
        }
        return {
            background,
            padding: 0,
        };
    },
    action: {
        padding: theme.spacing(2),
    },
}));

export const Card: React.FC<Props> = (props: Props): React.ReactElement => {
    const styles = useStyles(props);
    return (
        <Paper elevation={4} {...props} classes={{root: styles.root}}>
            {props.href ? (
                <CardActionArea href={props.href} classes={{root: styles.action}} target="_blank">
                    {props.children}
                </CardActionArea>
            ) : (
                props.children
            )}
        </Paper>
    );
};

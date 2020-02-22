import * as React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {PaperProps} from '@material-ui/core/Paper';
import {Paper} from "@material-ui/core";
import classNames from "classnames";

interface Props extends Omit<PaperProps, 'elevation'> {
    background?: 'white' | 'primary' | 'secondary' | 'gradient';
}

const useStyles = makeStyles((theme: Theme) => ({
    root: (props: Props) => {
        let background = theme.palette.common.white;
        if (['primary', 'secondary'].includes(props.background as string)) {
            background = theme.palette[props.background as 'primary' | 'secondary'].main;
        } else if (props.background === 'gradient') {
            background = `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`;
        }
        return {
            background,
            padding: theme.spacing(2)
        };
    },
}));

export const Card: React.FC<Props> = (props: Props): React.ReactElement => {
    const styles = useStyles(props);
    return <Paper elevation={4} {...props} classes={{root: classNames(props.classes?.root, styles.root)}}/>;
};

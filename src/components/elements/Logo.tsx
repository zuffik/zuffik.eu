import * as React from "react";
import {makeStyles, Theme} from "@material-ui/core/styles";
import logo from "../../static/img/logo.svg";

interface Props {
    size?: number;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: (props: Props) => ({
        height: theme.spacing(props.size || 16),
    }),
}));

export const Logo: React.FC<Props> = (props: Props): React.ReactElement => {
    const styles = useStyles(props);
    return <img alt="zuffik.eu" src={logo} className={styles.root} />;
};

import * as React from 'react';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {Redirect, Route, Switch} from "react-router";

interface Props {
}

export const RouterLayout: React.FC<Props> = (props: Props): React.ReactElement => (
    <Switch>
        <Route path="/">
            <>10 super áut</>
        </Route>
        <Redirect to="/"/>
    </Switch>
);

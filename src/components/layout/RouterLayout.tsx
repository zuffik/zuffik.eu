import * as React from "react";
import {Redirect, Route, Switch} from "react-router";
import {Page} from "../page/Page";

interface Props {}

export const RouterLayout: React.FC<Props> = (props: Props): React.ReactElement => (
    <Switch>
        <Route path="/">
            <Page />
        </Route>
        <Redirect to="/" />
    </Switch>
);

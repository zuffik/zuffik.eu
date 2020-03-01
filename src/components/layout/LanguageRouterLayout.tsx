import * as React from "react";
import {Redirect, Route, Switch} from "react-router";
import {defaultShortLanguage, shorthands} from "../../modules/i18n/Language";
import {RouterLayout} from "./RouterLayout";

interface Props {}

export const LanguageRouterLayout: React.FC<Props> = (props: Props): React.ReactElement => {
    return (
        <Switch>
            <Route path={shorthands.map((path) => `/${path}`)}>
                <RouterLayout />
            </Route>
            <Redirect to={`/${defaultShortLanguage}`} />
        </Switch>
    );
};

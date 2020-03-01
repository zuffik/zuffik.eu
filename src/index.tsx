import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {theme} from "./modules/Theme";
import {BrowserRouter} from "react-router-dom";
import {DatabaseProvider} from "./components/context/DatabaseContext";
import {database} from "./modules/database/Database";
import {LanguageRouterLayout} from "./components/layout/LanguageRouterLayout";

const App = (props: {}) => (
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <CssBaseline />
            <DatabaseProvider value={database}>
                <LanguageRouterLayout />
            </DatabaseProvider>
        </BrowserRouter>
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();

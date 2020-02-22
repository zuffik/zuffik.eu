import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from "./modules/Theme";
import {BrowserRouter} from "react-router-dom";
import {RouterLayout} from "./components/layout/RouterLayout";
import {DatabaseProvider} from "./components/context/DatabaseContext";
import {database} from "./modules/database/Database";

const App = (props: {}) => (
    <MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <DatabaseProvider value={database}>
                <RouterLayout/>
            </DatabaseProvider>
        </BrowserRouter>
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

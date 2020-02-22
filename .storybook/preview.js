import React from "react";
import {addDecorator} from '@storybook/react';
import {MuiThemeProvider} from "@material-ui/core";
import {DatabaseProvider} from "../src/components/context/DatabaseContext";
import {theme} from "../src/modules/Theme";
import {database} from "../src/modules/database/Database";
import {withKnobs} from "@storybook/addon-knobs";

addDecorator(story => (
    <div style={{padding: '20px'}}>
        <MuiThemeProvider theme={theme}>
            <DatabaseProvider value={database}>
                {story()}
            </DatabaseProvider>
        </MuiThemeProvider>
    </div>
));
addDecorator(withKnobs);

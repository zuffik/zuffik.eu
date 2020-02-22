import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
    shape: {
        borderRadius: 20
    },
    typography: {
        fontFamily: [
            'quicksand',
            'Roboto',
            'sans-serif'
        ].join(','),
    },
    palette: {
        primary: {
            main: '#56CCF2',
        },
        secondary: {
            main: '#2F80ED',
        }
    }
});

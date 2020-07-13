import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    direction: 'rtl',
    typography: {
        "fontFamily": `"Arial", "Helvetica", sans-serif`,
    },
    palette: {
        primary: {
            main: '#3F51B5',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
      contrastText: '#fff',
    },
    secondary: {
      main: green[500],
    },
    error: {
      main: red[500]
    }
  }
});

export default theme;
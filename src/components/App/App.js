import AppHeader from '../AppHeader/AppHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme } from '../../styles/themes';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppHeader />
    </ThemeProvider>
  );
}

export default App;

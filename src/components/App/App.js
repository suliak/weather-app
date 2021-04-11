import AppHeader from 'components/AppHeader/AppHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme } from 'styles/themes';
import CurrentWX from 'components/CurrentWX/CurrentWX';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppHeader />
      <CurrentWX />
    </ThemeProvider>
  );
}

export default App;

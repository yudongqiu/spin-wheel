import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SpinWheel from './components/SpinWheel';
import './App.css';


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          secondary: {
            main: prefersDarkMode? '#f48fb1': '#f50057',
          },
        },
      }),
    [prefersDarkMode],
  );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <SpinWheel />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

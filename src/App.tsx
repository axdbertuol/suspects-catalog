import React from 'react';
import MainRouter from './routes/MainRouter';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import usePersistedState from './utils/usePersistedState';
import main from './styles/themes/main';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', main);

  const toggleTheme = () => {
    setTheme(theme.title === 'main' ? main : dark);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainRouter />
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import MainRouter from './routes/MainRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DefaultTheme, ThemeProvider } from 'react-jss';
import { Jss, JssOptions, JssStyle, JssValue } from 'jss';

export interface ITheme extends DefaultTheme {
  color: {
    primary: string;
    secondary: string;
    tertiary: string;
    gray05: string;
    gray01: string;
  };
}

const lightTheme: ITheme = {
  color: {
    primary: 'black',
    secondary: 'white',
    tertiary: 'darkblue',
    gray05: 'rgba(0,0,0,.05)',
    gray01: 'rgba(0,0,0,.01)'
  }
};

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <MainRouter />
    </ThemeProvider>
  );
}

export default App;

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: {
        light: string;
        main: string;
        dark: string;
      };
      secondary: string;
      lightGray: string;
      darkGray: string;
      background: string;
      text: string;
    };
  }
}

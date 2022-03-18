import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme.colors.background};
    /*14px = 0.875rem.*/
    /*16px = 1rem (base)*/
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.text};
    font-family: sans-serif;
  }
`;

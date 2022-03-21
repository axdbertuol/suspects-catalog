import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    background: ${(props) => props.theme.colors.primary.light};
    color: ${(props) => props.theme.colors.text};
    font-size: 0.875rem;
    font-family: Raleway, sans-serif;
  }
`;

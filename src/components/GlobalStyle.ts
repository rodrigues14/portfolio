import { createGlobalStyle } from 'styled-components';
import { bgLight, fontText } from './UI/variaveis';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin:0;
    box-sizing: border-box;
    font-family: ${fontText};
  }

  body {
    background-color: ${bgLight};
  }
`
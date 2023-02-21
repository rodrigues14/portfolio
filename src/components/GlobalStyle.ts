import { createGlobalStyle } from 'styled-components';
import { bgLight, black, fontText } from './UI/variaveis';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin:0;
    box-sizing: border-box;
    font-family: ${fontText};
    text-decoration: none;
    color: ${black};
  }

  body {
    background-color: ${bgLight};
  }

`
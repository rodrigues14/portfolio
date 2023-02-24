import { createGlobalStyle } from 'styled-components';
import { bgLight, black, blue, blueLight, fontText } from './UI/variaveis';

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

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${bgLight};
  }

  ::-webkit-scrollbar-thumb {
    background: ${blueLight};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${blue};
  }

`
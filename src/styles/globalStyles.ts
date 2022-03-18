import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--background);
    height: 100vh;
  }

  #root {
    height: 100%
  }

  :root {
    --background: #EFEFEF;
    --mega-sena: #6BEFA3;
    --corner: #8666EF;
    --easyLotto: #DD7AC6;
    --lotoMania: #FFAB64;
    --teamMania: #5AAD7D;
    --luckDay: #BFAF83;
  }`;
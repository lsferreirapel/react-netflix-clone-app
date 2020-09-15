import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --bg-primary: #111;
    --bg-lighter: #141414;

    --netflix-red: #E50914;
    --netflix-green: #46d369;

    --gray: #999;
    --white: #fff;

  }
  /* Box sizing rules */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    background-color: #111;
    color: var(--white);
    font-size: 10px;
  }
  html, body, #root {
    
    height: 100%
    line-height: 1.2;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
  }


  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }
  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    cursor: pointer;
    color: var(--white);
  }

  button:focus {
      outline-offset: 0px;
      outline: 0px auto -webkit-focus-ring-color;
  }

  /* dialog reset */
  .MuiPaper-root {
        background-color: var(--bg-lighter) !important;
    }
    .MuiDialog-paperWidthSm {
        max-width: 850px !important;
        min-width: 850px !important;
    }

    .MuiPaper-rounded { 
        border-radius: 10px !important;
    }

    .MuiDialogTitle-root {
        padding: 0 !important;
        height: 38vw !important;
    }

    .MuiTypography-root {
        width: 100%;
        height: 100%;
`;
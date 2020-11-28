import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${colors.background};
  }

  body, input, button, textarea {
    font-family: 'Nunito', sans-serif;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 700px) {
    :root {
      font-size: 60%;
    }
  }
`;

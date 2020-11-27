import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f5f5f5;
  }

  body, input, button, textarea {
    font-family: 'Nunito', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

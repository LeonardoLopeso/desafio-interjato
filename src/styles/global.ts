import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    scroll-behavior: smooth;
  }
  
  :root {
    --bg-color: #EFFCF6;
    --bg-header-top: #27AB83;
    
    --placeholder-color: #C6F7E2;
    --btn-primary: #4D3DF7;
    --trash-color: #8E2C2C;

    --text-section: #102A43;

    --bold-green: #014D40;

  }
  body {
    background: var(--bg-color);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  html, body, #root {
    height: 100%;
  }
`;
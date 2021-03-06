import { createGlobalStyle } from "styled-components";

import normalize from "../styles/normalize"

const GlobalStyles = createGlobalStyle`
    ${normalize};

    :root {
        --red: #880E4F;
        --white: #fff;
        --black: #222;
        --blue: #2fa6ff;
        --grey: #D7D7D7;
    }

    body {
        min-height: 100vh;
        width: 100%;
        font-size: 18px;
        line-height: 24px;
        font-family: 'Cairo', sans-serif;
        color: var(--black);
    }

    @-webkit-keyframes fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
`

export default GlobalStyles
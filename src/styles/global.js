import { createGlobalStyle } from "styled-components";

import normalize from "../styles/normalize"

const GlobalStyles = createGlobalStyle`
    ${normalize};

    :root {
        --red: #880E4F;
        --white: #fff;
    }

    body {
        min-height: 100vh;
        width: 100%;
        font-family: 'Cairo', sans-serif;
    }

`

export default GlobalStyles
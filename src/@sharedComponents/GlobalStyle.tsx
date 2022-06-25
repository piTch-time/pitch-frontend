import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        width:100%;
        height:100%;
    }

    * {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
        width:100%;
        height:100%;
       
    }

    #root {
        width: 100%;
        height: 100%;
    }

    body{
        font-family: 'Pretendard';
        font-style: normal;
        width: 100%;
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

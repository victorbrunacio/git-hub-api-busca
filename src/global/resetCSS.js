import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`
body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: var(--branco);
}
*{
    list-style: none;
}
:root{
    --background:#3A4454;
    --background2:#;
    --verde:#00BD9D;
    --branco:#FFFBFA;
}
`
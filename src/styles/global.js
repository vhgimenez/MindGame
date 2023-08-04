import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    .root {
        font-size: 62.5%;
    }

    body {
        width: 100vh;
        height: 100vh;
        background-image: linear-gradient(40deg, rgb(113, 1, 91) 0%, rgb(113, 1, 91) 50%, #08007d 100%);
        font-family: "Agdasima";
        overflow-x: hidden;
    }

    button:hover {
        transform: scale(1.05);
        background-color: rgb(148, 0, 118);
    }

    a:hover {
        color: rgb(0, 208, 255);
    }

    hr {
        border-color: #CCCCCC;
    }
`;
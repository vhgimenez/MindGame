import styled from "styled-components";

export const Container = styled.div`

    width: 96rem;
    height: 100vh;
    background-color: #171717;

    main {
        padding: 1rem 10rem;
        display: flex;
        width: 100%;
        gap: 2rem;
    }

    .LeftScreen {
        width: 22%;
        background-color: black;
        height: 100%;
        border-radius: 1rem;
    }

    .Settings {
        padding:.5rem;
    }

    .LeftScreen .Settings h2 {
        color: #CCCCCC;
    }

    #selected {
        background-color: #494949;
    }

    .Setting {
        margin-top: .5rem;
        display: flex;
        align-items: center;
        gap: .3rem;
        cursor: pointer;
        transition: background-color .3s;
    }

    .Setting:hover {
        background-color: #494949;
    }

    .Settings .Setting p {
        color: #CCCCCC;
        font-size: 1rem;
    }

    .Setting img {
        width: 1rem;
        height: 1rem;
    }

    .Settings hr {
        margin: .5rem 0;
    }

    .Settings p {
        text-align: center;
        color: #910075;
        cursor: pointer;
    }
    
    .CenterScreen {
        width: 55%;
        height: 100%;
        background-color: black;
        border-radius: 1rem;
        padding: 0 1.5rem 1rem;
    }

    .CenterScreen h2 {
        margin-top: 1rem;
        color: #CCCCCC;
    }

    .Config {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
    }

    .Config p {
        color: #CCCCCC;
        font-size: 1rem;
    }

    .SelectedConfig {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .SelectedConfig p {
        color: #494949;
    }

    .Config img {
        width: 1rem;
        height: 1rem;
    }

`;
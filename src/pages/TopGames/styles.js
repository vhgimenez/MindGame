import styled from "styled-components";

export const Container = styled.div`

    width: 96rem;
    height: 100vh;
    background-color: #171717;

    main {
        width: 100%;
        padding: 1rem 10rem;
        display: flex;
        gap: 1rem;
    }

    .LeftScreen {
        width: 77%;
        border-radius: 1rem;
        background-color: black;
    }

    .LeftScreen hr {
        margin: 0 1rem;
    }

    .Box {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .DivGames {
        padding: 1rem;
    }

    .DivGames h2 {
        color: #CCCCCC;
    }

    .Games {
        width: 25rem;
        margin-top: .5rem;
        display: flex;
        align-items: center;
        gap: .3rem;
    }

    section {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    .DivGames .Games h2 {
        color: #910075;
        font-size: 1.4rem;
    }

    .Games section img {
        width: 1.4rem;
        height: 1.4rem;
    }

    .Games p {
        color: #CCCCCC;
        font-size: .8rem;
    }

    .Buttons {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .DivGames .Buttons button {
        margin-top: .5rem;
        margin-bottom: 1.5rem;
        padding: .2rem;
        width: 25rem;
        border: none;
        border-radius: .4rem;
        font-family: "Agdasima";
        transition: transform .3s;
        cursor: pointer;
    }

`;
import styled from "styled-components";

export const Container = styled.div`

    width: 96rem;
    height: 100vh;
    background-color: #171717;

    main {
        margin-top: 1rem;
        padding: 0 10rem;
        display: flex;
        gap: 1rem;
    }

    .LeftScreen {
        width: 23%;
        background-color: black;
        height: 10rem;
        border-radius: 1rem;
    }

    .CenterScreen {
        width: 54%;
        height: 100%;
        background-color: black;
        border-radius: 1rem;
    }

    .CenterScreen h2 {
        margin: 1rem 1.5rem 0;
        color: #CCCCCC;
    }

    .CenterScreen hr {
        margin: 0 1.5rem;
    }

    .Notification {
        padding: .5rem 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: background-color .3s;
    }

    .Notification:hover {
        cursor: pointer;
        background-color: #171717;
    }

    .Perfil {
        padding: 1rem 0;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .Perfil img {
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
    }

    .Perfil span {
        color: #910075;
        cursor: pointer;
    }

    .Perfil p {
        color: #CCCCCC;
        width: 15rem;
        font-size: 1rem;
    }

    .Settings p {
        color: #CCCCCC;
        font-size: .8rem;
    }

    .Settings img {
        width: .8rem;
        height: .8rem;
        cursor: pointer;
    }

    .Settings img:hover {
        background-color: #CCCCCC;
    }

`;
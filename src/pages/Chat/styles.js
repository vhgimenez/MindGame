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
        width: 27%;
        background-color: black;
        height: 30rem;
        border-radius: 1rem;
        padding: 0 0 1rem;
        position: relative;
    }

    .CenterScreen {
        width: 50%;
        height: 30rem;
        background-color: black;
        border-radius: 1rem;
        position: relative;
    }

    .LeftScreen h2 {
        margin-top: .5rem;
        color: #CCCCCC;
        text-align: center;
    }

    .LeftScreen hr {
        margin: 0 .5rem;
    }

    .Conversation {
        padding: 1rem .5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        transition: background-color .3s;
    }

    .Conversation:hover {
        background-color: #171717;
    }

    .Data {
        display: flex;
        gap: .5rem;
        align-items: center;
    }

    .ImageProfile img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
    }

    .Name h2 {
        font-size: 1.2rem;
        color: #910075;
    }

    .Name p {
        color: #CCCCCC;
        font-size: 1rem;
    }

    .X img {
        width: 1rem;
        height: 1rem;
        cursor: pointer;
        transition: background-color .3s;
    }

    .X img:hover {
        background-color: #CCCCCC;
    }

    .More {
        position: absolute;
        bottom: 0;
        width: 100%;
        margin-bottom: .5rem;
    }

    .More p {
        color: #CCCCCC;
        text-align: center;
        cursor: pointer;
    }

    .CenterScreen hr {
        margin: 0 .5rem;
    }

    .Chat {
        width: 100%;
        height: 72%;
        position: relative;
    }

    .Message {
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        gap: .5rem;
        padding: .5rem .5rem 0;
    }

    .Message img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        cursor: pointer;
    }

    .Message p {
        background-color: #CCCCCC;
        padding: .3rem;
        border-radius: .4rem;
    }

    .FooterChat {
        width: 100%;
        padding: .5rem;
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    .FooterChat img {
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
    }

    .FooterChat input {
        background-color: #CCCCCC;
        width: 100%;
        border: none;
        padding: .5rem;
        font-family: "Agdasima";
        border-radius: .4rem;
    }

`;
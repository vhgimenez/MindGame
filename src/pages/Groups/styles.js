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
        padding: 1rem;
    }   

    .CenterScreen h2 {
        color: #CCCCCC;
    }

    .GroupsSearch {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .Content {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    .Image img {
        cursor: pointer;
    }

    .Name h2 {
        color: #910075;
        font-size: 1.2rem;
        cursor: pointer;
    }

    .Name p {
        color: #CCCCCC;
        font-size: .8rem;
        width: 23rem;
    }

    span {
        color: #910075;
    }

    .Join button {
        border: none;
        font-family: "Agdasima";
        border-radius: .4rem;
        padding: .3rem;
        width: 10rem;
        cursor: pointer;
        transition: transform .3s;
    }

`;
import styled from "styled-components";

export const Container = styled.div`

    .Feed {
        width: 100%;
        margin: 1rem 0;
        background-color: black;
        border-radius: 1rem;
        padding: 1rem 1.5rem;
    }

    .Post {
        justify-content: space-between;
    }

    .HeaderPublication, .DataPrivacy, .EditPublication, .Post {
        display: flex;
        align-items: center;
    }

    .HeaderPublication {
        gap: .5rem;
    }

    .DataPrivacy {
        gap: .2rem;
    }

    .PerfilImage img {
        width: 2.8rem;
        height: 3rem;
        border-radius: 50%;
        cursor: pointer;
    }

    .NameData h2 {
        color: #910075;
        font-size: 1.2rem;
        cursor: pointer;
    }

    .DataPrivacy p {
        font-size: .8rem;
        color: #CCCCCC;
    }

    .DataPrivacy img {
        width: .8rem;
        height: .8rem;
    }

    .EditPublication {
        gap: .8rem;
    }

    .EditPublication img {
        width: .8rem;
        height: .8rem;
        cursor: pointer;
        transition: background-color .3s;
    }

    .EditPublication img:hover {
        background-color: #494949;
    }

    .LegendPost {
        margin-top: 1rem;
    }

    .LegendPost p {
        color: #CCCCCC;
    }

    .LegendPost span {
        color: #910075;
        cursor: pointer;
    }

    .ImagePublicate {
        margin-top: 1rem;
        width: 100%;
        background-color: #CCCCCC;
        height: 15rem;
    }

`
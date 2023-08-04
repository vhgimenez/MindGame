import styled from "styled-components";

export const Container = styled.div`
    .NewPublication {
        background-color: black;
        border-radius: 1rem;
        padding: 1rem 1.5rem;
    }

    .Publicate {
        display: flex;
        align-items: center;
        gap: .7rem;
    }

    .Publicate img {
        width: 2.8rem;
        height: 3rem;
        border-radius: 50%;
        cursor: pointer;
    }

    .Publicate input {
        border: none;
        width: 29rem;
        border-radius: .8rem;
        padding: .9rem;
        background-color: #CCCCCC;
        font-family: "Agdasima";
        font-size: 1rem;
        cursor: pointer;
    }

    .FunctionsPublicate {
        margin-top: .5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .Live, .ImageOrVideo, .Achievements {
        display: flex;
        align-items: center;
        gap: .5rem;
        cursor: pointer;
        transition: background-color .3s;
    }

    .Live:hover, .ImageOrVideo:hover, .Achievements:hover {
        background-color: #494949;
    }

    .FunctionsPublicate .Live img {
        width: 1.5rem;
        height: 1.5rem;
    }

    .FunctionsPublicate .ImageOrVideo img {
        width: 1.2rem;
        height: 1.2rem;
    }

    .FunctionsPublicate .Achievements img {
        width: 1rem;
        height: 1rem;
    }

    .FunctionsPublicate p {
        font-family: "Agdasima";
        color: #CCCCCC;
    }
`;
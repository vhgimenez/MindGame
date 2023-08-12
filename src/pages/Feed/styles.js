import styled from "styled-components";

export const Container = styled.div`
   
    width: 96rem;
    height: 100%;
    background-color: #171717;

    main {
        margin-top: 1rem;
        padding: 0 10rem;
        display: flex;
        gap: 2rem;
    }

    .LeftScreen {
        width: 17rem;
    }

    .PerfilNumbers {
        padding: .5rem .5rem;
        background-color: black;
        padding-bottom: 1rem;
        border-radius: 0 0 1rem 1rem;
    }

    .Numbers1, .Numbers2, .Numbers3 {
        display: flex;
        justify-content: space-between;
    }

    .Statics1, .Statics2, .Statics3 {
        display: flex;
        align-items: center;
        gap: .3rem;
    }

    .StaticsNumber1, .StaticsNumber2, .StaticsNumber3 {
        display: flex;
        align-items: center;
        gap: .3rem;
    }

    .StaticsNumber3 {
        margin-bottom: .5rem;
    }

    .PerfilNumbers img {
        width: 1.5rem;
        height: 1.5rem;
    }

    .PerfilNumbers h2 {
        font-family: "Agdasima";
        color: #910075;
        font-size: .8rem;
    }

    .PerfilNumbers p {
        font-family: "Agdasima";
        color: #CCCCCC;
    }

    .ContentFavorites {
        margin-top: .5rem;
        display: flex;
        align-items: center;
        gap: .2rem;
        border-radius: 1rem 1rem 1rem 1rem;
    }

    .ContentFavorites img, 
    .ContentFavorites p {
        cursor: pointer;
    }

    .Groups {
        margin-top: 1rem;
        background-color: black;
        width: 100%;
        padding: 0 .5rem;
        border-radius: 1rem;
    }

    .Groups h2 {
        text-align: center;
        padding: .5rem 0;
        font-family: "Agdasima";
        color: #CCCCCC;
    }

    .Group1 {
        padding-top: .5rem;
    }

    .Group1, .Group2, .Group3 {
        display: flex;
        justify-content: space-between;
    }

    .Group3 {
        padding-bottom: .5rem;
    }

    .Group1 p,
    .Group2 p,
    .Group3 p {
        font-family: "Agdasima";
        color: #910075;
    }

    .Group1 .ButtonMore,
    .Group2 .ButtonMore,
    .Group3 .ButtonMore {
        color: #CCCCCC;
        cursor: pointer;
    }

    .DivDiscover p {
        padding: .5rem 0;
        color: #CCCCCC;
        cursor: pointer;
    }

    .CenterScreen {
        width: 38rem;
    }

`;
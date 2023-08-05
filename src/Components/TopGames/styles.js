import styled from "styled-components";

export const Container = styled.div`

    .TopGames {
        background-color: black;
        border-radius: 1rem;
        padding: 1rem .5rem;
        width: 17rem;
    }

    .TopGames h2 {
        color: #CCCCCC;
        padding-bottom: .5rem;
    }

    .RankingGame1 {
        padding-top: .5rem;
    }

    .RankingGame1, .RankingGame2, .RankingGame3 {
        display: flex;
        justify-content: space-between;
    }

    .Game1, .Game2, .Game3 {
        display: flex;
        align-items: center;
        gap: .3rem;
    }

    .Game1 img, .Game2 img, .Game3 img {
        width: 2rem;
        height: 2rem;
        cursor: pointer;
    }

    .Game1 p, .Game2 p, .Game3 p {
        color: #910075;
        cursor: pointer;
    }

    .Top1 img, .Top2 img, .Top3 img {
        width: 2rem;
        height: 2rem;
    }

`;
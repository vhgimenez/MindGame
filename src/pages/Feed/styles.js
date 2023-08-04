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

    .Infos {
        width: 100%;
    }

    .Wallpaper {
        border-radius: 1rem 1rem 0 0;
        width: 100%;
        height: 4rem;
        background-color: #CCCCCC;
    }

    .Data {
        width: 100%;
        background-color: black;
        text-align: center;
        align-items: center;
    }

    .Data img {
        margin-top: -2.5rem;
        border-radius: 50%;
        width: 4.8rem;
        height: 5rem;
        cursor: pointer;
    }

    .Data {
        padding: 0 .5rem;
    }

    .Data h2 {
        margin-top: 1rem;
        font-family: "Agdasima";
        color: #910075;
    }

    .Data p {
        margin-top: .3rem;
        font-family: "Agdasima";
        color: #CCCCCC;
        padding-bottom: .6rem;
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

    .DivAchievements {
        margin-top: 1rem;
        background-color: black;
        border-radius: 1rem;
        padding: 1rem .5rem;
        width: 17rem;
    }

    .DivAchievements h2 {
        color: #CCCCCC;
        padding-bottom: .5rem;
    }

    .TitleAchievement1 {
        padding-top: .5rem;
    }

    .TitleAchievement1, .TitleAchievement2, .TitleAchievement3 {
        display: flex;
        align-items: center;
        gap: .3rem;
    }

    .TitleAchievement1 img, .TitleAchievement2 img, .TitleAchievement3 img {
        width: 2rem;
        height: 2rem;
    }

    .TitleAchievement1 h3, .TitleAchievement2 h3, .TitleAchievement3 h3 {
        color: #910075;
        font-size: 1rem;
    }

    .ContentAchievement1 p, .ContentAchievement2 p, .ContentAchievement3 p {
        color: #CCCCCC;
        font-size: .8rem;
    }

    .ProgressBar1, .ProgressBar2, .ProgressBar3 {
        margin-top: .5rem;
        display: flex;
        justify-content: center;
    }

    .ProgressBar1, .ProgressBar2 {
        margin-bottom: .5rem;
    }

    .ProgressBar1 p, .ProgressBar2 p, .ProgressBar3 p {
        background-color: #CCCCCC;
        border-radius: 1rem;
        text-align: center;
        font-size: .8rem;
        width: 10rem;
        color: #CA0000;
    }

`;
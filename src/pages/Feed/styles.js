import styled from "styled-components";

export const Container = styled.div`
   
    width: 96rem;
    height: 100%;
    background-color: #171717;

    header {
        background-color: black;
        padding: 1rem 10rem;
        display: flex;
        justify-content: space-between;
        border-bottom: .01rem solid #CCCCCC;
    }

    .LogoSearch {
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    .LogoSearch img {
        width: 3rem;
        height: 3rem;
        cursor: pointer;
        transition: transform .3s;
    }

    .LogoSearch img:hover {
        transform: rotate(360deg);
    }

    .LogoSearch input {
        background-color: #CCCCCC;
        font-family: 'Agdasima';
        font-size: 1rem;
        border: none;
        border-radius: .6rem;
        width: 13rem;
        height: 2rem;
        padding: .5rem;
    }

    .LogoSearch input:hover {
        border: .05rem solid rgb(113, 1, 91);
    }

    .HeaderRight {
        display: flex;
        align-items: center;
    }

    .MenuIcons {
        display: flex;
        align-items: center;
        gap: .8rem;
        border-right: .01rem solid #CCCCCC;
        padding-right: 2rem;
    }

    .MenuIcons img {
        width: 1.8rem;
        height: 1.8rem;
        cursor: pointer;
    }

    .PerfilConfigs {
        position: relative;
        margin-left: 2rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .PerfilConfigs img {
        border-radius: 50%;
        width: 1.7rem;
        height: 1.9rem;
        cursor: pointer;
    }

    #setaperfil {
        margin-top: 1.1rem;
        margin-left: 4rem;
        width: .7rem;
        height:.7rem;
        position: absolute;
        z-index: 1;
    }

    #settings {
        width: 1.9rem;
        height: 1.9rem;
    }

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
        color: rgb(113, 1, 91);
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
        color: rgb(113, 1, 91);
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
        color: rgb(113, 1, 91);
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

    .Feed {
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
        color: rgb(113, 1, 91);
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
        color: rgb(113, 1, 91);
        cursor: pointer;
    }

    .ImagePublicate {
        margin-top: 1rem;
        width: 100%;
        background-color: #CCCCCC;
        height: 15rem;
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
        color: rgb(113, 1, 91);
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
        color: rgb(113, 1, 91);
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
import styled from "styled-components";

export const Container = styled.div`

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
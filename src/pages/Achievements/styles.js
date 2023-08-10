import styled from "styled-components";

export const Container = styled.div`

    width: 96rem;
    height: 100%;
    background-color: #171717;

    main {
        width: 100%;
        padding: 1rem 10rem;
        display: flex;
        gap: 1rem;
    }

    .LeftScreen {
        width: 77%;
        border-radius: 1rem;
        background-color: black;
    }

    .LeftScreen hr {
        margin: 0 1rem;
    }

    .Achievements {
        display: flex;
        align-items: center;
        gap: 3rem;
    }

    .DoubleAchievements {
        padding: 1rem;
    }

    .DoubleAchievements h2 {
        color: #CCCCCC;
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }

    .About {
        display: flex;
        gap: .3rem;
    }

    .Achievement {
        width: 26rem;
        margin-bottom: 1rem;
    }

    .AchievementImage img {
        width: 3rem;
        height: 3rem;
    }

    .Achievement h2 {
        font-size: 1.2rem;
        color: #910075;
        margin: 0;
    }

    .Achievement p {
        color: #CCCCCC;
    }

    .Achievement .tip {
        width: 19rem;
        font-size: .8rem;
        color: #A4A4A4;
    }

    .Achievement .tip2 {
        width: 21rem;
        font-size: .8rem;
        color: #A4A4A4;
    }

    .ProgressBar {
        margin-top: .5rem;
        width: 100%;
        text-align: center;
    }

    .ProgressBar p {
        background-color: #CCCCCC;
        border-radius: 1rem;
        color: red;
    }

`;
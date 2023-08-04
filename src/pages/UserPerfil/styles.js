import styled from "styled-components";

export const Container = styled.div`

    width: 96rem;
    height: 100%;
    background-color: #171717;

    main {
        padding: 1rem 10rem;
        display: flex;
        gap: 1rem;
        width: 100%;
    }

    .LeftContent {
        width: 70%;
    }

    .DivHeader {
        background-color: black;
        border-radius: 1rem;
        margin-bottom: 1rem;
    }

    .Wallpaper {
        width: 100%;
        height: 12rem;
        background-color: #CCCCCC;
        border-radius: 1rem 1rem 0 0;
        position: relative;
    }

    .EditWallpaper {
        margin: 0 .5rem .5rem 0;
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        gap: .3rem;
        background-color: #910075;
        border-radius: 1rem;
        padding: .5rem;
        cursor: pointer;
    }

    .EditWallpaper img {
        width: 1.5rem;
        height: 1.5rem;
    }

    .EditWallpaper p {
        font-family: "Agdasima";
        color: #CCCCCC;
    }

    .InfoProfile {
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        height: 8rem;
    }

    .Data {
        display: flex;
        gap: .6rem;
        position: relative;
    }

    .ImageProfile #camera {
        width: 1.8rem;
        height: 1.8rem;
        background-color: #910075;
        bottom: 0;
        margin-left: 7rem;
        padding: .2rem;
    }

    .ImageProfile img {
        margin-top: -3rem;
        width: 9.8rem;
        height: 10rem;
        border-radius: 50%;
        position: absolute;
        cursor: pointer;
        transition: filter .3s;
    }

    .ImageProfile img:hover {
        filter: brightness(0.75);
    }

    .NameBio {
        margin-left: 10rem;
    }

    .NameBio h2 {
        font-size: 1.6rem;
        color: #910075;
    }

    .NameBio p {
        color: #CCCCCC;
    }

    .EditProfile {
        display: flex;
        align-items: end;
        gap: .3rem;
    }

    .EditProfile button {
        border-radius: .4rem;
        padding: .2rem .8rem;
        border: none;
        font-family: "Agdasima";
        font-size: 1rem;
        cursor: pointer;
        transition: background-color .3s;
        display: flex;
        align-items: center;
        gap: .2rem;
    }

    .EditProfile button img {
        width: 1rem;
        height: 1rem;
    }

    .LeftContent hr {
        margin: 0 2rem .5rem;
    }

    .MenuPerfil {
        padding: 0 2rem .5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .Menu {
        display: flex;
        align-items: center;
        gap: .8rem;
    }

    .Menu p {
        padding: .5rem;
        font-size: 1rem;
        color: #CCCCCC;
        cursor: pointer;
        transition: background-color .3s;
    }

    .Menu p:hover {
        background-color: #494949;
    }

    .Settings img {
        padding: .5rem;
        width: 2rem;
        height: 2rem;
        cursor: pointer;
        transition: background-color .3s;
    }

    .Settings img:hover {
        background-color: #494949;
    }

    .ContentCenter {
        display: flex;
        gap: 1rem;
    }

    .DivBiography {
        padding: .5rem 2rem 1rem;
        width: 50%;
        background-color: black;
        border-radius: 1rem;
    }

    .Level {
        display: flex;
        align-items: center;
        gap: .3rem;
    }

    .Level img {
        width: 1.4rem;
        height: 1.4rem;
    }

    .Level h2 {
        font-size: 1.4rem;
        color: #CCCCCC;
    }

    .DivBiography p {
        margin-top: .3rem;
        color: #CCCCCC;
    }

    .ButtonEdit {
        margin-top: .7rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .ButtonEdit button,
    .DataPrivate button { 
        width: 100%;       
        padding: .2rem;
        border-radius: .4rem;
        border: none;
        font-family: "Agdasima";
        font-size: 1rem;
        cursor: pointer;
        transition: transform .3s;
    }

    .DataPrivate {
        margin-top: .5rem;
    }

    .Infos {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    .Infos img {
        width: 1rem;
        height: 1rem;
    }

    .Infos p {
        color: #CCCCCC;
    }

    .DataPrivate button {
        margin-top: .7rem;
    }

    .FeedProfile {
        width: 50%;
        height: 15rem;
        border-radius: 1rem;
        background-color: black;
    }

    .NewPublication {
        width: 25.6rem;
    }


`;
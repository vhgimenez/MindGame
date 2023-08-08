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

    .visibilityon {
        opacity: 1;
        visibility: visible;
        display: block;
    }

    .PublishingArea {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background-color: black;
        width: 30rem;
        height: 19.2rem;
        border-radius: 1rem;
        z-index: 1;
        opacity: 0;
        visibility: hidden;
        display: none;
    }

    .TopPublishing {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    }

    .DataPublishing {
        display: flex;
        align-items: center;
        gap: .3rem;
    }

    .NameAndPrivate h2 {
        font-size: 1.2rem;
        color: #910075;
    }

    .ImagePrivate {
        display: flex;
        align-items: center;
        gap: .3rem;
    }

    .ImagePrivate img {
        width: .8rem;
        height: .8rem;
    }

    .ImagePrivate p {
        font-size: .8rem;
        color: #CCCCCC;
    }

    .PerfilPublishing img {
        border-radius: 50%;
        width: 2.8rem;
        height: 3rem;
        cursor: pointer;
    }

    .ClosePublishing img {
        width: .8rem;
        height: .8rem;
        cursor: pointer;
        transition: background-color .3s;
    }

    .ClosePublishing img:hover {
        background-color: #CCCCCC;
    }

    .TextArea {
        width: 100%;
    }

    .TextArea textarea {
        background-color: black;
        width: 100%;
        height: 8.5rem;
        border: none;
        padding: .5rem 1rem 0;
        font-family: "Agdasima";
        font-size: 1.2rem;
        resize: none;
        color: #CCCCCC;
    }

    .AddComponents {
        margin: .5rem 0;
        padding: 0 1rem;
        display: flex;
        gap: .3rem;
    }

    .AddComponents img {
        width: 1.3rem;
        height: 1.3rem;
        cursor: pointer;
        transition: background-color .3s;
    }

    .AddComponents img:hover {
        background-color: #CCCCCC;
    }

    .PublishingArea hr {
        margin: 0 1rem;
    }

    .ButtonPublish {
        padding: .5rem 1rem;
        width: 100%;
        align-items: right;
    }

    .ButtonPublish button {
        border: none;
        border-radius: .4rem;
        padding: .3rem;
        width: 100%;
        cursor: pointer;
        font-family: "Agdasima";
        font-size: 1rem;
        transition: transform .3s;
    }

    .ButtonPublish button:hover {
        transform: scale(1.05);
    }

    .LeftContent {
        width: 77%;
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
        width: 100%;
        display: flex;
        gap: 1rem;
    }

    .DivBiography {
        padding: .5rem 2rem 1rem;
        width: 100%;
        background-color: black;
        border-radius: 1rem;
        height: 100%;
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
    }

    .NewPublication {
        width: 100%;
    }

    .Feed {
        margin-top: 1rem;
        width: 100%;
        background-color: black;
        border-radius: 1rem;
    }

`;
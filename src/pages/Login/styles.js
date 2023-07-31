import styled from "styled-components";

export const Container = styled.div`
    .off {
    visibility: hidden;
    opacity: 0;
    }

    main {
        width: 92.5rem;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        animation: topdown 1000ms;
    }

    .Welcome {
        position: relative;
        margin-top: 10rem;
        border-radius: 1rem 0 0 1rem;
        background-color: rgb(0, 0, 0);
        height: 25rem;
        width: 30rem;
        text-align: center;
        padding: 0 4rem;
    }

    .Apresentacao {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 2.5rem;
    }

    .Apresentacao img {
        margin-top: 3rem;
        margin-bottom: 1rem;
        width: 6rem;
        height: 6rem;
        cursor: pointer;
        transition: transform .3s;
    }

    .Apresentacao img:hover {
        transform: rotate(0.9turn);
    }


    .Apresentacao p {
        width: 25rem;
    }

    .Welcome h1 {
        margin-left: 1.5rem;
        margin-top: 6rem;
        font-size: 2.8rem;
        font-family: "Righteous";
        color: rgb(209, 209, 209);
        margin-bottom: .7rem;
        border-right: .2rem solid rgb(209, 209, 209);
        white-space: nowrap;
        overflow: hidden;
    }

    .typing-animation {
        animation: blinkCursor 700ms steps(40) infinite normal,
            typing 1.5s steps(40) 1s normal both;
    }

    .Welcome p {
        font-family: "Agdasima";
        font-size: 1.4rem;
        color: rgb(178, 178, 178);
        line-height: 1rem;
        margin-bottom: 1.5rem;
    }

    button {
        background-color: rgb(113, 1, 91);
        font-family: "Agdasima";
        font-size: 1rem;
        color: black;
        border: none;
        width: 7rem;
        padding: .8rem;
        border-radius: 2rem;
        cursor: pointer;
        margin-bottom: 1rem;
        transition: transform .3s;
    }

    .Login {
        position: relative;
        margin-top: 10rem;
        height: 25rem;
        width: 20rem;
        border-radius: 0 1rem 1rem 0;
        background-color: white;
        padding-top: 4.5rem;
        text-align: center;
    }

    .Login .Campos h1 {
        text-align: left;
        margin-left: 3.9rem;
        font-family: "Belanosima";
        margin-bottom: 1rem;
    }

    .Campos input {
        font-family: "Agdasima";
        font-size: 1rem;
        width: 12.5rem;
        border-radius: 1rem;
        border: .01rem solid rgb(178, 178, 178);
        padding: .5rem;
        margin-bottom: .5rem;
    }

    .Login input:hover {
        border: .05rem solid rgb(0, 208, 255);
    }

    .Dados {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .Dados p {
        margin-left: 1rem;
    }

    .Dados a {
        color: black;
        text-decoration: none;
    }

    .Dados a:hover {
        color: rgb(0, 208, 255);
    }

    .submit {
        display: flex;
        justify-content: center;
    }

    .submit button {
        background-color: rgb(113, 1, 91);
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Agdasima";
        font-size: 1rem;
        border: none;
        height: 2rem;
        width: 12.5rem;
        border-radius: 2rem;
        cursor: pointer;
        margin-bottom: 1rem;
        transition: transform .3s;
    }

    .submit button:hover {
        transform: scale(1.05);
        background-color: rgb(148, 0, 118);
    }

    .Create {
        display: flex;
        justify-content: center;
    }

    .Create span {
        text-decoration: none;
        color: rgb(0, 208, 255);
        cursor: pointer;
    }

    .Register {
        position: absolute;
        top: 0;
    }

    .Register h1 {
        margin-top: 1rem;
        margin-left: 1rem;
        text-align: left;
        font-family: "Belanosima";
    }

    .name {
        display: flex;
        justify-content: start;
    }

    .name input {
        margin-left: 1rem;
        font-family: "Agdasima";
        font-size: 1rem;
        width: 8rem;
        border-radius: 1rem;
        border: .01rem solid rgb(178, 178, 178);
        padding: .5rem;
        margin-bottom: .5rem;
    }

    .usuario {
        margin-top: 1rem;
        display: flex;
    }

    .usuario input {
        margin-left: 1rem;
        font-family: "Agdasima";
        font-size: 1rem;
        width: 8rem;
        border-radius: 1rem;
        border: .01rem solid rgb(178, 178, 178);
        padding: .5rem;
        margin-bottom: .5rem;
    }

    .email {
        display: flex;
    }

    .email input {
        margin-left: 1rem;
        font-family: "Agdasima";
        font-size: 1rem;
        width: 17rem;
        border-radius: 1rem;
        border: .01rem solid rgb(178, 178, 178);
        padding: .5rem;
        margin-bottom: .5rem;
    }

    .password {
        display: flex;
    }

    .password input {
        margin-left: 1rem;
        font-family: "Agdasima";
        font-size: 1rem;
        width: 8rem;
        border-radius: 1rem;
        border: .01rem solid rgb(178, 178, 178);
        padding: .5rem;
        margin-bottom: .5rem;
    }

    .about textarea {
        margin-left: 1rem;
        font-family: "Agdasima";
        font-size: 1rem;
        width: 17rem;
        height: 5rem;
        border-radius: 1rem;
        border: .01rem solid rgb(178, 178, 178);
        padding: .5rem;
    }

    .about p {
        margin-left: 1rem;
        text-align: left;
        margin-bottom: 1rem;
    }

    .about span {
        text-decoration: none;
        color: rgb(0, 208, 255);
        cursor: pointer;
    }

    .about textarea:hover {
        border-color: rgb(0, 208, 255);
    }

    .buttons {
        display: flex;
        justify-content: end;
        gap: 1rem;
        margin-left: 1rem;
    }

    .buttons button {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: rgb(113, 1, 91);
        font-family: "Agdasima";
        font-size: 1rem;
        border: none;
        height: 2rem;
        width: 5rem;
        border-radius: 2rem;
        cursor: pointer;
        margin-bottom: 1rem;
        transition: transform .3s;
    }

    .buttons button:hover {
        transform: scale(1.05);
        background-color: rgb(148, 0, 118);
    }

    .buttons button img {
        width: 1rem;
        height: 1rem;
    }

    .End {
        margin-top: 5rem;
    }

    .logo {
        margin-left: 2rem;
        cursor: pointer;
        transition: transform .3s;
    }

    .logo:hover {
        transform: rotate(0.9turn);
    }

    @keyframes topdown {
        0% {
        opacity: 0;
        transform: translateY(-15px);
        }
    
        100% {
        opacity: 1;
        transform: translateY(0);
        }
    }

    @keyframes typing {
        from {
            width: 0;
        }
        to {
            width: 19rem;
        }
    }

    @keyframes blinkCursor {
        from {
            border-right-color: rgb(209, 209, 209);
        }
        to {
            border-right-color: transparent;
        }
    }
`;
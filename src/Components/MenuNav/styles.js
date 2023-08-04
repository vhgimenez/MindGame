import styled from "styled-components";

export const Container = styled.div`

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

`;
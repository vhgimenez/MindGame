import styled from "styled-components";

export const Container = styled.div`

    .TopDiv {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
    }

    .Data {
        display: flex;
        align-items: center;
        gap: .3rem;
    }

    .ImagePerfil img {
        width: 4.8rem;
        height: 5rem;
        border-radius: 50%;
        cursor: pointer;
    }

    .NameLevel h2 {
        color: #910075;
    }

    .NameLevel p {
        color: #CCCCCC;
    }

    .Back img {
        width: 1.5rem;
        height: 1.5rem;
        cursor: pointer;
    }

`;
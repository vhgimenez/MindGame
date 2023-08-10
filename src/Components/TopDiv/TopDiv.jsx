import { React } from "react";
import { Container } from "./styles";

export function TopDiv() {

    return (
        <Container>
            <div className="TopDiv">
                <div className="Data">
                    <div className="ImagePerfil">
                        <img src="perfil.jpeg"></img>
                    </div>
                    <div className="NameLevel">
                        <h2>Victor Gimenez</h2>
                        <p>Lv 1 - Begineer</p>
                    </div>
                </div>
                <div className="Back">
                    <img src="setaesquerda.png"></img>
                </div>
            </div>
        </Container>
    )
};
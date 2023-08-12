import { React } from "react";
import { Container } from "./styles";

export function TopPerfil() {

    return (
        <Container>
            <div className="Infos">
                <div className="Wallpaper">

                </div>
                <div className="Data">
                    <img src="perfil.jpeg"></img>
                    <h2>Victor Gimenez</h2>
                    <p>Amante de Games | Estudante | Desenvolvedor Web Full-Stack</p><hr></hr>
                </div>
            </div>
        </Container>
    )
}
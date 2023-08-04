import { React } from "react";
import { Container } from "./styles";

export function MenuNav() {

    return (
        <Container>
            <header>
                <div className="LogoSearch">
                    <img src="logo.png"></img>
                    <input type="text" placeholder="Explore the World"></input>
                </div>
                <div className="HeaderRight">    
                    <div className="MenuIcons">
                        <img src="homeselected.png" id="home"></img>
                        <img src="friends.png"></img>
                        <img src="comunidade.png"></img>
                        <img src="message.png"></img>
                        <img src="notifications.png"></img>
                    </div>
                    <div className="PerfilConfigs">
                        <img src="settings.png" id="settings"></img>
                        <img src="perfil.jpeg"></img>
                        <img src="setaperfil.png" id="setaperfil"></img>
                    </div>
                </div>
            </header>
        </Container>
    );
}
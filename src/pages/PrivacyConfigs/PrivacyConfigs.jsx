import { React } from "react";
import { Container } from "./styles";
import { MenuNav } from "../../Components/MenuNav/MenuNav";
import { DivTopGames } from "../../Components/DivTopGames/DivTopGames";
import { DivAchievements } from "../../Components/DivAchievements/DivAchievements";
import { TopPerfil } from "../../Components/TopPerfil/TopPerfil";

export function PrivacyConfigs() {

    return (
        <Container>
            <MenuNav></MenuNav>
            <main>
                <div className="LeftScreen">
                    <TopPerfil></TopPerfil>
                    <div className="Settings">
                        <h2>Settings</h2>
                        <div className="Setting">
                            <img src="perfilconfig.png"></img>
                            <p>Perfil</p>
                        </div>
                        <div className="Setting" id="selected">
                            <img src="privacidade.png"></img>
                            <p>Privacy</p>
                        </div>
                        <div className="Setting">
                            <img src="noticonfigs.png"></img>
                            <p>Notifications </p>
                        </div>
                        <div className="Setting">
                            <img src="block.png"></img>
                            <p>Blocked Accounts</p>
                        </div>
                        <hr></hr>
                        <p>Home</p>
                    </div>
                </div>
                <div className="CenterScreen">
                    <h2>Privacy</h2>
                    <div className="Config">
                        <p>E-mail address</p>
                        <div className="SelectedConfig">
                            <p>impressaogimenez@gmail.com</p>
                            <img src="setadireita.png"></img>
                        </div>
                    </div>
                    <div className="Config">
                        <p>Phone Number</p>
                        <img src="setadireita.png"></img>
                    </div>
                    <div className="Config">
                        <p>Active sessions</p>
                        <img src="setadireita.png"></img>
                    </div>
                </div>
                <div className="RightScreen">
                    <DivTopGames></DivTopGames>
                    <DivAchievements></DivAchievements>
                </div>
            </main>
        </Container>
    )
}
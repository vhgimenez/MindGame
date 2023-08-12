import { React } from "react";
import { Container } from "./styles";
import { MenuNav } from "../../Components/MenuNav/MenuNav";
import { DivTopGames } from "../../Components/DivTopGames/DivTopGames";
import { DivAchievements } from "../../Components/DivAchievements/DivAchievements";
import { TopPerfil } from "../../Components/TopPerfil/TopPerfil";

export function Configs() {

    return (
        <Container>
            <MenuNav></MenuNav>
            <main>
                <div className="LeftScreen">
                    <TopPerfil></TopPerfil>
                    <div className="Settings">
                        <h2>Settings</h2>
                        <div className="Setting" id="selected">
                            <img src="perfilconfig.png"></img>
                            <p>Perfil</p>
                        </div>
                        <div className="Setting">
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
                    <h2>Profile Information</h2>
                    <div className="Config">
                        <p>Name, username and bio</p>
                        <img src="setadireita.png"></img>
                    </div>
                    <div className="Config">
                        <p>Personal Information</p>
                        <img src="setadireita.png"></img>
                    </div>
                    <div className="Config">
                        <p>Manage profile</p>
                        <img src="setadireita.png"></img>
                    </div>
                    <h2>General</h2>
                    <div className="Config">
                        <p>Language</p>
                        <div className="SelectedConfig">
                            <p>English - EN</p>
                            <img src="setadireita.png"></img>
                        </div>
                    </div>
                    <div className="Config">
                        <p>Friendship request</p>
                        <div className="SelectedConfig">
                            <p>All</p>
                            <img src="setadireita.png"></img>
                        </div>
                    </div>
                    <div className="Config">
                        <p>E-mail</p>
                        <div className="SelectedConfig">
                            <p>Only me</p>
                            <img src="setadireita.png"></img>
                        </div>
                    </div>
                    <div className="Config">
                        <p>Phone number</p>
                        <div className="SelectedConfig">
                            <p>Only me</p>
                            <img src="setadireita.png"></img>
                        </div>
                    </div>
                    <h2>Account Management</h2>
                    <div className="Config">
                        <p>Deactivate account</p>
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
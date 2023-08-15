import { React } from "react";
import { Container } from "./styles";
import { MenuNav} from "../../Components/MenuNav/MenuNav";
import { DivAchievements} from "../../Components/DivAchievements/DivAchievements";
import { DivTopGames} from "../../Components/DivTopGames/DivTopGames";
import { TopPerfil } from "../../Components/TopPerfil/TopPerfil";
import { NumberGroups } from "../../Components/NumberGroups/NumberGroups";

export function Notifications() {

    return (
        <Container>
            <MenuNav></MenuNav>
            <main>
                <div className="LeftScreen">
                    <TopPerfil></TopPerfil>
                    <NumberGroups></NumberGroups>
                </div>
                <div className="CenterScreen">
                    <h2>Notifications</h2>
                    <hr></hr>
                    <div className="Notification">
                        <div className="Perfil">
                            <img src="akihito.jpg"></img>
                            <p><span>Guilherme Akihito</span> added a post: My name is akihito, 
                            I love women and i go to the gym <span>...</span></p>
                        </div>
                        <div className="Settings">
                            <p>3 h</p>
                            <img src="pontos.png"></img>
                        </div>
                    </div>
                    <div className="Notification">
                        <div className="Perfil">
                            <img src="akihito.jpg"></img>
                            <p><span>Guilherme Akihito</span> commented on your publication: Wow, 
                            how hot you are <span>...</span></p>
                        </div>
                        <div className="Settings">
                            <p>3 h</p>
                            <img src="pontos.png"></img>
                        </div>
                    </div>
                    <div className="Notification">
                        <div className="Perfil">
                            <img src="lol.png"></img>
                            <p><span>Legue of Legends</span> have new updates for you to check out <span>...</span></p>
                        </div>
                        <div className="Settings">
                            <p>3 h</p>
                            <img src="pontos.png"></img>
                        </div>
                    </div>
                    <div className="Notification">
                        <div className="Perfil">
                            <img src="mine.png"></img>
                            <p><span>Minecraft</span> have new updates for you to check out <span>...</span></p>
                        </div>
                        <div className="Settings">
                            <p>3 h</p>
                            <img src="pontos.png"></img>
                        </div>
                    </div>
                    <div className="Notification">
                        <div className="Perfil">
                            <img src="akihito.jpg"></img>
                            <p><span>Guilherme Akihito</span> and 10 more people reacted to your post <span>...</span></p>
                        </div>
                        <div className="Settings">
                            <p>3 h</p>
                            <img src="pontos.png"></img>
                        </div>
                    </div>
                </div>
                <div className="RightScreen">
                    <DivTopGames></DivTopGames>
                    <DivAchievements></DivAchievements>
                </div>
            </main>
        </Container>
    )
};
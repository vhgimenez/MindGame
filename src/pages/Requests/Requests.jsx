import { React } from "react";
import { Container } from "./styles";
import { MenuNav} from "../../Components/MenuNav/MenuNav";
import { DivAchievements} from "../../Components/DivAchievements/DivAchievements";
import { DivTopGames} from "../../Components/DivTopGames/DivTopGames";
import { TopPerfil } from "../../Components/TopPerfil/TopPerfil";
import { NumberGroups } from "../../Components/NumberGroups/NumberGroups";

export function Requests() {
    
    return (
        <Container>
            <MenuNav></MenuNav>
            <main>
                <div className="LeftScreen">
                    <TopPerfil></TopPerfil>
                    <NumberGroups></NumberGroups>
                </div>
                <div className="CenterScreen">
                    <h2>Invitations</h2>
                    <hr></hr>
                    <div className="Requests">
                        <div className="Notification">
                            <div className="Perfil">
                                <img src="akihito.jpg"></img>
                                <p><span>Guilherme Akihito</span> started following you, follow 
                                back to become friends! <span>...</span></p>
                            </div>
                            <div className="Settings">
                                <p>3 h</p>
                                <img src="pontos.png"></img>
                            </div>
                        </div>
                        <div className="Buttons">
                            <button>Follow Back</button>
                            <button>No</button>
                        </div>
                    </div>
                    <h2>Suggestions</h2>
                    <hr></hr>
                    <div className="Requests">
                        <div className="Notification">
                            <div className="Perfil">
                                <img src="lol.png"></img>
                                <p><span>League of Legends</span> It's one of the hottest games 
                                of the moment, you can follow <span>...</span></p>
                            </div>
                            <div className="Settings">
                                <p>3 h</p>
                                <img src="pontos.png"></img>
                            </div>
                        </div>
                        <div className="Buttons">
                            <button>Follow</button>
                            <button>No</button>
                        </div>
                    </div>
                    <div className="Requests">
                        <div className="Notification">
                            <div className="Perfil">
                                <img src="valorant.png"></img>
                                <p><span>Valorant</span> It's one of the hottest games 
                                of the moment, you can follow <span>...</span></p>
                            </div>
                            <div className="Settings">
                                <p>3 h</p>
                                <img src="pontos.png"></img>
                            </div>
                        </div>
                        <div className="Buttons">
                            <button>Follow</button>
                            <button>No</button>
                        </div>
                    </div>
                    <div className="Requests">
                        <div className="Notification">
                            <div className="Perfil">
                                <img src="mine.png"></img>
                                <p><span>Minecraft</span> It's one of the hottest games 
                                of the moment, you can follow <span>...</span></p>
                            </div>
                            <div className="Settings">
                                <p>3 h</p>
                                <img src="pontos.png"></img>
                            </div>
                        </div>
                        <div className="Buttons">
                            <button>Follow</button>
                            <button>No</button>
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
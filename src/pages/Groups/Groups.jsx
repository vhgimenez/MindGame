import { React } from "react";
import { Container } from "./styles";
import { MenuNav } from "../../Components/MenuNav/MenuNav";
import { DivAchievements} from "../../Components/DivAchievements/DivAchievements";
import { DivTopGames} from "../../Components/DivTopGames/DivTopGames";
import { TopPerfil } from "../../Components/TopPerfil/TopPerfil";
import { NumberGroups } from "../../Components/NumberGroups/NumberGroups";

export function Groups() {

    return (
        <Container>
            <MenuNav></MenuNav>
            <main>
                <div className="LeftScreen">
                    <TopPerfil></TopPerfil>
                    <NumberGroups></NumberGroups>
                </div>
                <div className="CenterScreen">
                    <h2>Groups</h2>
                    <hr></hr>
                    <div className="GroupsSearch">
                        <div className="Content">
                            <div className="Image">
                                <img src="lol.png"></img>
                            </div>
                            <div className="Name">
                                <h2>Lol da Depressão</h2>
                                <p>Ao fazer parte do "LOL da Depressão", você está se juntando a uma 
                                    comunidade de pessoas que abraçam a complexidade da experiência humana <span>...</span>
                                    </p>
                            </div>
                        </div>
                        <div className="Join">
                            <button>Join</button>
                        </div>
                    </div>
                    <div className="GroupsSearch">
                        <div className="Content">
                            <div className="Image">
                                <img src="fortnite.png"></img>
                            </div>
                            <div className="Name">
                                <h2>Fortnáticos</h2>
                                <p>O lugar onde os verdadeiros fãs de Fortnite se reúnem para compartilhar, 
                                    competir e celebrar a incrível jornada pelo mundo virtual de batalhas e construções  <span>...</span>
                                    </p>
                            </div>
                        </div>
                        <div className="Join">
                            <button>Join</button>
                        </div>
                    </div>
                    <div className="GroupsSearch">
                        <div className="Content">
                            <div className="Image">
                                <img src="among.png"></img>
                            </div>
                            <div className="Name">
                                <h2>Amongzada</h2>
                                <p>É mais do que um grupo; é um centro de investigação virtual, onde jogadores ávidos 
                                    de Among Us se reúnem para desvendar mistérios  <span>...</span>
                                    </p>
                            </div>
                        </div>
                        <div className="Join">
                            <button>Join</button>
                        </div>
                    </div>
                    <div className="GroupsSearch">
                        <div className="Content">
                            <div className="Image">
                                <img src="gta.png"></img>
                            </div>
                            <div className="Name">
                                <h2>GTA Forever</h2>
                                <p>Aqui, a paixão pelo Grand Theft Auto une os jogadores, independentemente de estarem 
                                    explorando as ruas de Liberty City, os desertos de San Andreas ou as praias de Vice City  <span>...</span>
                                    </p>
                            </div>
                        </div>
                        <div className="Join">
                            <button>Join</button>
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
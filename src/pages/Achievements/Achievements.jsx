import { React } from "react";
import { Container } from "./styles";
import { MenuNav } from "../../Components/MenuNav/MenuNav";
import { TopGames } from "../../Components/TopGames/TopGames";
import { DivAchievements } from "../../Components/DivAchievements/DivAchievements";

export function Achievements() {

    return (
        <Container>
            <MenuNav></MenuNav>
            <main>
                <div className="LeftScreen">
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
                    <hr></hr>
                    <div className="DoubleAchievements">
                        <h2>Achievements (00)</h2>
                        <div className="Achievements">
                            <div className="Achievement">
                                <div className="About">
                                    <div className="AchievementImage">
                                        <img src="friendsforever.png"></img>
                                    </div>
                                    <div className="AchievementText">
                                        <h2>Friends Forever</h2>
                                        <p>To get this achievement you need to have at least 5 friends</p>
                                        <p className="tip">TIP: They focus on various aspects such as social skills, health, quality 
                                            of life and longevity. The findings point to a great relevance of 
                                            friendship relationships in human development.</p>
                                    </div>
                                </div>
                                <div className="ProgressBar">
                                    <p>00%</p>
                                </div>
                            </div>
                            <div className="Achievement">
                                <div className="About">
                                    <div className="AchievementImage">
                                        <img src="trofeu.png"></img>
                                    </div>
                                    <div className="AchievementText">
                                        <h2>Conqueror</h2>
                                        <p>To get this achievement you must have at least 5 other achievements</p>
                                        <p className="tip2">TIP: Valuing our achievements is fundamental to our 
                                        emotional well-being and to keep our motivation high. Often, we try so 
                                        hard to reach our goals that when we finally reach them, we end up 
                                        underestimating our achievement.</p>
                                    </div>
                                </div>
                                <div className="ProgressBar">
                                    <p>00%</p>
                                </div>
                            </div>
                        </div>
                        <div className="Achievements">
                            <div className="Achievement">
                                <div className="About">
                                    <div className="AchievementImage">
                                        <img src="seguidores.png"></img>
                                    </div>
                                    <div className="AchievementText">
                                        <h2>SuperStar</h2>
                                        <p>To get this achievement you need to have at least 100 followers</p>
                                        <p className="tip">TIP: When a person has external recognition, they 
                                        can better build their self-esteem and strengthen their own confidence. 
                                        Confidence in oneself will increase courage in the face of new situations 
                                        that must be faced daily.</p>
                                    </div>
                                </div>
                                <div className="ProgressBar">
                                    <p>00%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="RightScreen">
                    <TopGames></TopGames>
                    <DivAchievements></DivAchievements>
                </div>
            </main>
        </Container>
    )
};
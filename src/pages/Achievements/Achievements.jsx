import { React } from "react";
import { Container } from "./styles";
import { MenuNav } from "../../Components/MenuNav/MenuNav";
import { DivTopGames } from "../../Components/DivTopGames/DivTopGames";
import { DivAchievements } from "../../Components/DivAchievements/DivAchievements";
import { TopDiv } from "../../Components/TopDiv/TopDiv";

export function Achievements() {

    return (
        <Container>
            <MenuNav></MenuNav>
            <main>
                <div className="LeftScreen">
                    <TopDiv></TopDiv>
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
                            <div className="Achievement">
                                <div className="About">
                                    <div className="AchievementImage">
                                        <img src="controleachi.png"></img>
                                    </div>
                                    <div className="AchievementText">
                                        <h2>Games Lovers</h2>
                                        <p>To get this achievement you need to play at least 5 games</p>
                                        <p className="tip">TIP: Online games develop teamwork, concentration, 
                                        communication and problem-solving skills. They are also a great opportunity 
                                        to work on communication and conflict resolution.</p>
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
                                        <img src="share.png"></img>
                                    </div>
                                    <div className="AchievementText">
                                        <h2>Explorer</h2>
                                        <p>To get this achievement you need to have at least 5 publications</p>
                                        <p className="tip">TIP: Sharing experiences, tastes, needs and 
                                        sensations is a natural human mechanism. For this reason, being able 
                                        to share moments, feelings and experiences with friends is a way to 
                                        improve mental health..</p>
                                    </div>
                                </div>
                                <div className="ProgressBar">
                                    <p>00%</p>
                                </div>
                            </div>
                            <div className="Achievement">
                                <div className="About">
                                    <div className="AchievementImage">
                                        <img src="maos.png"></img>
                                    </div>
                                    <div className="AchievementText">
                                        <h2>Strong Friendship</h2>
                                        <p>To get this achievement you need to have reacted to 50 friend posts</p>
                                        <p className="tip">TIP: In addition to serving as a foundation in your 
                                        daily life, friendships serve to break barriers of prejudice, regardless 
                                        of race, gender, nationality and connecting people from all over the world.</p>
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
                                        <img src="liveachi.png"></img>
                                    </div>
                                    <div className="AchievementText">
                                        <h2>Streaming Master</h2>
                                        <p>To get this achievement you need to have performed 10 lives</p>
                                        <p className="tip">TIP: The streaming service works by transmitting 
                                        audio and video data over the internet continuously and in real time, 
                                        allowing users to consume the content without having to download it beforehand.</p>
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
                    <DivTopGames></DivTopGames>
                    <DivAchievements></DivAchievements>
                </div>
            </main>
        </Container>
    )
};
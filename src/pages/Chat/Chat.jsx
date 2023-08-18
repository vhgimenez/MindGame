import { React } from "react";
import { Container } from "./styles";
import { MenuNav } from "../../Components/MenuNav/MenuNav";
import { DivAchievements } from "../../Components/DivAchievements/DivAchievements";
import { DivTopGames } from "../../Components/DivTopGames/DivTopGames";

export function Chat() {

    return (
        <Container>
            <MenuNav></MenuNav>
            <main>
                <div className="LeftScreen">
                    <h2>Game Chat</h2>
                    <hr></hr>
                    <div className="Conversation">
                        <div className="Data">
                            <div className="ImageProfile">
                                <img src="akihito.jpg"></img>
                            </div>
                            <div className="Name">
                                <h2>Guilherme Akihito</h2>
                                <p>Hey, bro!</p>
                            </div>
                        </div>
                        <div className="X">
                            <img src="x.png"></img>
                        </div>
                    </div>
                    <div className="More">
                        <p>Start more conversations</p>
                    </div>
                </div>
                <div className="CenterScreen">
                    <div className="Conversation">
                        <div className="Data">
                            <div className="ImageProfile">
                                <img src="akihito.jpg"></img>
                            </div>
                            <div className="Name">
                                <h2>Guilherme Akihito</h2>
                                <p>☼ Online</p>
                            </div>
                        </div>
                        <div className="X">
                            <img src="x.png"></img>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="Chat">
                        <div className="Message">
                            <img src="akihito.jpg"></img>
                            <p>Hey, bro!</p>
                        </div>
                    </div>
                    <div className="FooterChat">
                        <img src="images.png"></img>
                        <input type="text" placeholder="Send a Message"></input>
                        <img src="send.png"></img>
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
import { React } from "react";
import { Container } from "./styles";

export function NumberGroups() {

    return (
        <Container>
            <div className="PerfilNumbers">
                        <div className="Numbers1">
                            <div className="Statics1">
                                <img src="controle.png"></img>
                                <h2>Achievements</h2>
                            </div>
                            <div className="StaticsNumber1">
                                <p>00</p>
                                <img src="sad.png"></img>
                            </div>
                        </div>
                        <div className="Numbers2">
                            <div className="Statics2">
                                <img src="controle.png"></img>
                                <h2>Games</h2>
                            </div>
                            <div className="StaticsNumber2">
                                <p>00</p>
                                <img src="sad.png"></img>
                            </div>
                        </div>
                        <div className="Numbers3">
                            <div className="Statics3">
                                <img src="controle.png"></img>
                                <h2>Groups</h2>
                            </div>
                            <div className="StaticsNumber3">
                                <p>00</p>
                                <img src="sad.png"></img>
                            </div>
                        </div>
                        <div className="DivFavorites">
                            <hr></hr>
                            <div className="ContentFavorites">
                                <img src="favorites.svg"></img>
                                <p>Favorites</p>
                            </div>
                        </div>
                    </div>
                    <div className="Groups">
                        <h2>Groups (00)</h2><hr></hr>
                        <div className="Group1">
                        <p>League of Legends</p>
                        <p className="ButtonMore">+</p>
                    </div>
                    <div className="Group2">
                        <p>Valorant</p>
                        <p className="ButtonMore">+</p>
                    </div>
                    <div className="Group3">
                        <p>Fortnite</p>
                        <p className="ButtonMore">+</p>
                    </div>
                    <div className="DivDiscover">
                        <hr></hr>
                        <p>Find out More +</p>
                    </div>
                    </div>
        </Container>
    )
};
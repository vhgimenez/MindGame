import { React, useState, useEffect } from "react";
import { Container } from "./styles";
import { MenuNav } from "../../Components/MenuNav/MenuNav";
import { NewPublication } from "../../Components/NewPublication/NewPublication.";
import { PublicationFeed } from "../../Components/Feed/PublicationFeed";
import { TopGames } from "../../Components/TopGames/TopGames";
import { DivAchievements } from "../../Components/DivAchievements/DivAchievements";

export function Feed() {

    return (
        <Container>
            <MenuNav></MenuNav>
            <main>
                <div className="LeftScreen">
                    <div className="Infos">
                        <div className="Wallpaper">

                        </div>
                        <div className="Data">
                            <img src="perfil.jpeg"></img>
                            <h2>Victor Gimenez</h2>
                            <p>Amante de Games | Estudante | Desenvolvedor Web Full-Stack</p><hr></hr>
                        </div>
                    </div>
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
                </div>
                <div className="CenterScreen">
                    <NewPublication>

                    </NewPublication>
                    <PublicationFeed>

                    </PublicationFeed>
                </div>
                <div className="RightScreen">
                    <TopGames>

                    </TopGames>
                    <DivAchievements>
                        
                    </DivAchievements>
                </div>
            </main>
        </Container>
    )
}
import { React } from "react";
import { Container } from "./styles";
import { MenuNav } from "../../Components/MenuNav/MenuNav";
import { TopDiv } from "../../Components/TopDiv/TopDiv";
import { DivAchievements } from "../../Components/DivAchievements/DivAchievements";
import { DivTopGames } from "../../Components/DivTopGames/DivTopGames";

export function TopGames() {

    return (
        <Container>
            <MenuNav></MenuNav>
            <main>    
                <div className="LeftScreen">
                    <TopDiv></TopDiv>
                    <hr></hr>
                    <div className="DivGames">
                        <h2>Top Games</h2>
                        <div className="Box">  
                            <div className="Games">
                                <div className="GameImage">
                                    <img src="lol.png"></img>
                                </div>
                                <div className="GameText">
                                    <section><h2>League of Legends</h2><img src="ouro.png"></img></section>
                                    <p>League of Legends is a multiplayer online battle arena video game
                                                developed and published by Riot Games. It was released in October 
                                                2009 for Microsoft Windows and March 2013 for macOS.</p>
                                </div>
                            </div>
                            <div className="Games">
                                <div className="GameImage">
                                    <img src="valorant.png"></img>
                                </div>
                                <div className="GameText">
                                    <section><h2>Valorant</h2><img src="prata.png"></img></section>
                                    <p>Valorant is a free-to-play multiplayer first-person shooter video game 
                                        developed and published by Riot Games. It is the first game of its kind
                                         developed by the company, being first announced under the codename Project 
                                         A in October 2019,</p>
                                </div>
                            </div>
                        </div>
                        <div className="Buttons">
                            <button>View More</button>
                            <button>View More</button>
                        </div>
                        <div className="Box">  
                            <div className="Games">
                                <div className="GameImage">
                                    <img src="fortnite.png"></img>
                                </div>
                                <div className="GameText">
                                    <section><h2>Fortnite</h2><img src="bronze.png"></img></section>
                                    <p>Fortnite is an online multiplayer electronic game originally revealed 
                                        in 2011, developed by Epic Games and released with different game modes 
                                        that obey the same gameplay and game engine.</p>
                                </div>
                            </div>
                            <div className="Games">
                                <div className="GameImage">
                                    <img src="mine.png"></img>
                                </div>
                                <div className="GameText">
                                    <h2>Minecraft</h2>
                                    <p>Minecraft is a survival sandbox video game created by Swedish developer 
                                        Markus "Notch" Persson and later developed and published by Mojang 
                                        Studios, whose intellectual property was obtained by Microsoft in 2014.</p>
                                </div>
                            </div>
                        </div>
                        <div className="Buttons">
                            <button>View More</button>
                            <button>View More</button>
                        </div>
                        <div className="Box">  
                            <div className="Games">
                                <div className="GameImage">
                                    <img src="gta.png"></img>
                                </div>
                                <div className="GameText">
                                    <h2>GTA V</h2>
                                    <p>Grand Theft Auto V for PC offers players the option to explore the massive, 
                                        award-winning world of Los Santos and Blaine County in cropping up to 4K 
                                        and beyond, as well as the chance to experience the game running at 60 FPS 
                                        (frames per second).</p>
                                </div>
                            </div>
                            <div className="Games">
                                <div className="GameImage">
                                    <img src="among.png"></img>
                                </div>
                                <div className="GameText">
                                    <h2>Among Us</h2>
                                    <p>Among Us is an online video game of the group and survival game genres, 
                                        developed and published by the American game studio InnerSloth.</p>
                                </div>
                            </div>
                        </div>
                        <div className="Buttons">
                            <button>View More</button>
                            <button>View More</button>
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
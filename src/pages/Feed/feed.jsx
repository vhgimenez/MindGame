import { React, useState, useEffect } from "react";
import { Container } from "./styles";

export function Feed() {

    return (
        <Container>
            <header>
                <div className="LogoSearch">
                    <img src="logo.png"></img>
                    <input type="text" placeholder="Explore the World"></input>
                </div>
                <div className="HeaderRight">    
                    <div className="MenuIcons">
                        <img src="homeselected.png" id="home"></img>
                        <img src="friends.png"></img>
                        <img src="comunidade.png"></img>
                        <img src="message.png"></img>
                        <img src="notifications.png"></img>
                    </div>
                    <div className="PerfilConfigs">
                        <img src="settings.png" id="settings"></img>
                        <img src="perfil.jpeg"></img>
                        <img src="setaperfil.png" id="setaperfil"></img>
                    </div>
                </div>
            </header>
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
                    <div className="NewPublication">
                        <div className="Publicate">
                            <img src="perfil.jpeg"></img>
                            <input type="text" placeholder="Have achievements to share?"></input>
                        </div>
                        <div className="FunctionsPublicate">
                            <div className="Live">
                                <img src="live.png"></img>
                                <p>Live</p>
                            </div>
                            <div className="ImageOrVideo">
                                <img src="images.png"></img>
                                <p>Photo / Video</p>
                            </div>
                            <div className="Achievements">
                                <img src="star.png"></img>
                                <p>Achievements</p>
                            </div>
                        </div>
                    </div>
                    <div className="Feed">
                        <div className="Post">
                            <div className="HeaderPublication">   
                                <div className="PerfilImage">
                                    <img src="perfil.jpeg"></img>
                                </div>
                                <div className="NameData">
                                    <h2>Victor Gimenez</h2>
                                    <div className="DataPrivacy">
                                        <p>3 h ·</p>
                                        <img src="public.png"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="EditPublication">
                                <img src="pontos.png"></img>
                                <img src="x.png"></img>
                            </div>
                        </div>
                        <div className="LegendPost">
                                <p>🧠🎮 MindGame - Unlock Your Mental Potential! 🎯🌟</p><br></br>
                                <p>🔥 Ready to level up your brainpower? 🔥 </p><br></br><p>Dive into the world of MindGame and unleash the full potential of your mind! 🚀🌌
                                🧠 Challenge your intellect with an array of mind-bending puzzles, brain teasers, and cognitive games designed to push your 
                                cognitive abilities to new heights. 🤯💡 Whether you're a seasoned puzzler or a curious beginner, MindGame has something 
                                exciting for everyone! 🤩🔓 <span>... View More</span></p>
                        </div>
                        <div className="ImagePublicate">

                        </div>
                    </div>
                </div>
                <div className="RightScreen">
                    <div className="TopGames">
                        <h2>Top Games</h2><hr></hr>
                        <div className="RankingGame1">  
                            <div className="Game1">
                                <img src="lol.png"></img>
                                <p>League of Legends</p>
                            </div>
                            <div className="Top1">
                                <img src="ouro.png"></img>
                            </div>
                        </div>
                        <div className="RankingGame2">  
                            <div className="Game2">
                                <img src="valorant.png"></img>
                                <p>Valorant</p>
                            </div>
                            <div className="Top2">
                                <img src="prata.png"></img>
                            </div>
                        </div>
                        <div className="RankingGame3">  
                            <div className="Game3">
                                <img src="fortnite.png"></img>
                                <p>Fortnite</p>
                            </div>
                            <div className="Top3">
                                <img src="bronze.png"></img>
                            </div>
                        </div>
                    </div>
                    <div className="DivAchievements">
                        <h2>Achievements</h2><hr></hr>
                        <div className="TitleAchievement1">
                            <img src="friendsforever.png"></img>
                            <div className="ContentAchievement1">
                                <h3>Friends Forever</h3>
                                <p>To get this achievement you need to have at least 5 friends</p>
                            </div>    
                        </div>
                        <div className="ProgressBar1">
                            <p>00%</p>
                        </div>
                        <div className="TitleAchievement2">
                            <img src="trofeu.png"></img>
                            <div className="ContentAchievement2">
                                <h3>Conqueror</h3>
                                <p>To get this achievement you must have at least 5 other achievements</p>
                            </div>
                        </div>
                        <div className="ProgressBar1">
                            <p>00%</p>
                        </div>
                        <div className="TitleAchievement3">
                            <img src="seguidores.png"></img>
                            <div className="ContentAchievement3">
                                <h3>SuperStar</h3>
                                <p>To get this achievement you need to have at least 100 followers</p>
                            </div>
                        </div>
                        <div className="ProgressBar3">
                            <p>00%</p>
                        </div>
                    </div>
                </div>
            </main>
        </Container>
    )
}
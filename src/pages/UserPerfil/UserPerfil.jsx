import { React, useState, useEffect } from "react";
import { Container } from "./styles";
import { MenuNav } from "../../Components/MenuNav/MenuNav";
import { NewPublication } from "../../Components/NewPublication/NewPublication.";
import { DivTopGames } from "../../Components/DivTopGames/DivTopGames";
import { DivAchievements } from "../../Components/DivAchievements/DivAchievements";
import { PublicationFeed } from "../../Components/Feed/PublicationFeed";

export function UserPerfil() {

    return (
        <Container>
            <MenuNav></MenuNav>
            <main>
                <div className="PublishingArea">
                    <div className="TopPublishing">
                        <div className="DataPublishing">
                            <div className="PerfilPublishing">
                                <img src="perfil.jpeg"></img>
                            </div>
                            <div className="NameAndPrivate">
                                <h2>Victor Gimenez</h2>
                                <div className="ImagePrivate">
                                    <img src="public.png"></img><p>Public</p>
                                </div>
                            </div>
                        </div>
                        <div className="ClosePublishing">
                            <img src="x.png"></img>
                        </div>
                    </div>
                    <div className="TextArea">
                        <textarea placeholder="Have Achievements to share?"></textarea>
                    </div>
                    <div className="AddComponents">
                        <img src="images.png"></img>
                        <img src="friends.png"></img>
                        <img src="controle.png"></img>
                        <img src="star.png"></img>
                        <img src="pontos.png"></img>
                    </div>
                    <hr></hr>
                    <div className="ButtonPublish">
                        <button>Publish</button>
                    </div>
                </div>
                <div className="LeftContent">
                    <div className="DivHeader"> 
                        <div className="Wallpaper">
                            <div className="EditWallpaper">   
                                <img src="camera.png"></img>
                                <p>Edit Wallpaper</p>
                            </div>
                        </div>
                        <div className="InfoProfile">
                            <div className="Data">
                                <div className="ImageProfile">
                                    <img src="perfil.jpeg"></img>
                                    <img src="camera.png" id="camera"></img>
                                </div>
                                <div className="NameBio">
                                    <h2>Victor Gimenez</h2>
                                    <p> 00 Followers</p>
                                </div>
                            </div>
                            <div className="EditProfile">
                                <button>+ New Post</button>
                                <button><img src="mouse.png"></img> Edit Profile</button>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="MenuPerfil">
                            <div className="Menu">
                                <p>Publications</p>
                                <p>Followers</p>
                                <p>Achievements</p>
                                <p>Games</p>
                                <p>More</p>
                            </div>
                            <div className="Settings">
                                <img src="pontos.png"></img>
                            </div>
                        </div>
                    </div>
                    <div className="ContentCenter">
                        <div className="DivBiography">
                            <div className="Start">
                                <div className="Level">
                                    <img src="cavaleiro.png"></img>
                                    <h2>Level 01</h2>
                                </div>
                                <p>Amante de Games | Estudante | Desenvolvedor Web Full-Stack</p>
                                <div className="ButtonEdit">
                                    <button>Edit Biography</button>
                                </div>
                            </div>
                            <div className="DataPrivate">
                                <div className="Infos">
                                    <img src="diploma.png"></img>
                                    <p>Studying at UNIP - Universidade Paulista</p>
                                </div>
                                <div className="Infos">
                                    <img src="mapa.png"></img>
                                    <p>Lives in Santos, SP - Brazil</p>
                                </div>
                                <div className="Infos">
                                    <img src="loc.png"></img>
                                    <p>Born in Santos, SP - Brazil</p>
                                </div>
                                <div className="Infos">
                                    <img src="controle.png"></img>
                                    <p>Beginner</p>
                                </div>
                                <button>Edit Information</button>
                            </div>
                        </div>
                        <div className="FeedPerfil">
                            <NewPublication></NewPublication>
                            <PublicationFeed></PublicationFeed>
                        </div>
                    </div>
                </div>
                <div className="RightContent">
                    <DivTopGames>

                    </DivTopGames>
                    <DivAchievements>

                    </DivAchievements>
                </div>
            </main>
        </Container>
    )
};
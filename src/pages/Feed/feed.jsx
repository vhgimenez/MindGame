import { React, useState, useEffect } from "react";
import { Container } from "./styles";
import { MenuNav } from "../../Components/MenuNav/MenuNav";
import { NewPublication } from "../../Components/NewPublication/NewPublication.";
import { PublicationFeed } from "../../Components/Feed/PublicationFeed";
import { DivTopGames } from "../../Components/DivTopGames/DivTopGames";
import { DivAchievements } from "../../Components/DivAchievements/DivAchievements";
import { TopPerfil } from "../../Components/TopPerfil/TopPerfil";
import { NumberGroups } from "../../Components/NumberGroups/NumberGroups";

export function Feed() {

    return (
        <Container>
            <MenuNav></MenuNav>
            <main>
                <div className="LeftScreen">
                    <TopPerfil></TopPerfil>
                    <NumberGroups></NumberGroups>
                </div>
                <div className="CenterScreen">
                    <NewPublication>

                    </NewPublication>
                    <PublicationFeed>

                    </PublicationFeed>
                </div>
                <div className="RightScreen">
                    <DivTopGames>

                    </DivTopGames>
                    <DivAchievements>
                        
                    </DivAchievements>
                </div>
            </main>
        </Container>
    )
}
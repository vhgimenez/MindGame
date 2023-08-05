import { React } from "react";
import { Container } from "./styles";

export function DivAchievements() {

    return (
        <Container>
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
        </Container>
    )
}
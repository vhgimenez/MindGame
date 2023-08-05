import { React} from "react";
import { Container } from "./styles";

export function TopGames() {

    return (
        <Container>
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
        </Container>
    )
}
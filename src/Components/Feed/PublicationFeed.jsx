import { React } from "react";
import { Container } from "./styles";

export function PublicationFeed() {

    return (
        <Container>
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
        </Container>
    )
}
import { React, useState, useEffect } from "react";
import { Container } from "./styles";

export function NewPublication() {

    const [mounted,setMounted] = useState(false)
    
    
    useEffect(() => {
        
        if(mounted){
            const PublishingArea = document.querySelector(".PublishingArea");

            const OpenPublish = () => {
                PublishingArea.classList.add("visibilityon");
            }
        }

        else{
            setMounted(true);
        }

    },[mounted])

    return (
        <Container>
            
            <div className="NewPublication">
                <div className="Publicate">
                    <img src="perfil.jpeg"></img>
                    <input type="text" placeholder="Have achievements to share?" id="Publish"></input>
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
        </Container>
    )
}
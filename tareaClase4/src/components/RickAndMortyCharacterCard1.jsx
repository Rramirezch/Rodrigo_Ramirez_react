import React from "react";
import CharacterCards from "./CharacterCard";
import { useEffect, useState } from "react";
//import Image from "./Imagen";

function RickaAndMortyCharacterCard(props) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [genre, setGenre] = useState("");
    const [status, setStatus] = useState("");
    const rickAndMortyCharacterId = props.id;

        useEffect( () => {
            fetch("https://rickandmortyapi.com/api/character/"+rickAndMortyCharacterId)
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                setName(result.name);
                setImage(result.image);
                setGenre(result.gender);
                setStatus(result.status);
                
                    
            });
        }, [])

    return (
        <div>
            <CharacterCards
            name={name}
            image={image}
            genre={genre}
            status={status}
            />
            
        </div>
    );
}

export default RickaAndMortyCharacterCard;
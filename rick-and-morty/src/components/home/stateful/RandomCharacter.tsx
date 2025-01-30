import { useEffect, useState } from "react";
import { Character } from "../../../types/Character";
import { CharacterCard } from "../stateless/CharacterCard";

export const RandomCharacter = () => {
    const randomNumber = Math.floor(Math.random() * 826);
    const url = `https://rickandmortyapi.com/api/character/${randomNumber}`;
    
    const [character, setCharacter] = useState<Character | null>(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch character");
                }
                return response.json();
            })
            .then((data: Character) => setCharacter(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            {character && <CharacterCard character={character} />}
        </>
    );
};

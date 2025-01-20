import { useEffect, useState } from "react";

interface Character {
    id: number;
    name: string;
    image: string;
    gender: string;
    status: string;
    episode: string[];
}

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
        <article className="random-character-card">
            {character ? (
                <>
                    <img src={character.image} alt={character.name} className="character-image" />
                    <div>
                        <h3 className="character-name">{character.name}</h3>
                        <p className="character-appearances">
                            Appeared in <span>{character.episode.length}</span> episodes
                        </p>
                        <p> Gender: {character.gender}</p>
                        <p> Status: {character.status}</p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </article>
    );
};

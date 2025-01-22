import { useState, useEffect } from "react";
import { SingleCharacter } from "./SingleCharacter";

interface SingleCharacter {
    id: number;
    name: string;
    image: string;
    gender: string;
    status: string;
    episode: string[];
}

export const CharacterSection = () => {
    const [characters, setCharacters] = useState<SingleCharacter[]>([]);
    const [page, setPage] = useState(1);

    const hdlNextPage = () => {
        page <= 42 ? setPage(page + 1) : page;
    }

    const hdlPrevPage = () => {
        page >= 2 ? setPage(page - 1) : page;
    }
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(response => response.json())
            .then(data => { 
                setCharacters(data.results); 
                console.log(data.results);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [page]);

    return (
        <main id="main-character">
            {characters.length > 0 ? (
                characters.map((character) => (
                    <SingleCharacter key={character.id} character={character} />
                ))
            ) : (
                <p>Loading...</p>
            )}
            <section className="pagination-section">
                <button onClick={hdlPrevPage}>Prev Page</button>
                <button onClick={hdlNextPage}>Next Page</button>
            </section>
        </main>
    );
};

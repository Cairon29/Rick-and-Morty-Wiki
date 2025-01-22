import { useState, useEffect, useContext } from "react";
import { SingleCharacter } from "./SingleCharacter";
import { CharacterFilterContext } from "../../contexts/CharacterFilterContext";

interface SingleCharacter {
    id: number;
    name: string;
    image: string;
    gender: string;
    status: string;
    episode: string[];
}

export const CharacterSection = () => {
    const { filterUrl, filter, setFilter } = useContext(CharacterFilterContext);
    const [characters, setCharacters] = useState<SingleCharacter[]>([]);

    useEffect(() => {
        fetch(filterUrl)
            .then(response => response.json())
            .then(data => { 
                if (data.results.length > 0 ) {
                    setCharacters(data.results)
                } else {
                    setFilter((prev) => ({...prev, page: prev.page}))
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [filter]);

    const hdlNextPage = () =>{
        if (filter.page <= 42) {
            setFilter((prev) => ({...prev, page: prev.page + 1}))
            document.documentElement.scrollTop = 0        
        }
    }
    const hdlPrevPage = () => {
        if (filter.page > 1) {
            setFilter((prev) => ({ ...prev, page: prev.page - 1 }))
            document.documentElement.scrollTop = 0
        }    
    };

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

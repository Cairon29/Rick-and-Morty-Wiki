import { useState, useEffect, useContext } from "react";
import { Character } from "../../../types/Character";
import { CharacterFilterContext } from "../../../contexts/CharacterFilterContext";
import { SingleCharacterStructure } from "../stateless/SingleCharacterStructure";
import { Pagination } from "../../pagination/Pagination";
import { NoMatchingResults } from "../../NoMatchingResults/NoMatchingResults";

export const CharacterSection = () => {
    const { filterUrl, filter, setFilter } = useContext(CharacterFilterContext);
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        fetch(filterUrl)
            .then(response => response.json())
            .then(data => { 
                if (data.results.length > 0 ) {
                    setCharacters(data.results)
                    setFilter((prev) => ({ ...prev, totalPages: data.info.pages }))
                } else {
                    setFilter((prev) => ({...prev, page: prev.page - 1}))
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [filter]);

    const hdlFunctions = {
        hdlNextPage: () =>{
            if (filter.page <= 42) {
                setFilter((prev) => ({...prev, page: prev.page + 1}))
                document.documentElement.scrollTop = 0        
            }
        },
        hdlPrevPage: () =>{
            if (filter.page > 1) {
                setFilter((prev) => ({ ...prev, page: prev.page - 1 }))
                document.documentElement.scrollTop = 0
            }   
        }
    }

    return (
        <main id="main-character">
            {
                characters.length > 0
                ? 
                    <ul>
                        {characters.map((character) => (
                            <SingleCharacterStructure key={character.id} character={character} />
                        ))}
                    </ul>
                : 
                    <NoMatchingResults/>
            }
            <Pagination HdlFunctions={hdlFunctions} PageFilter={filter} />
        </main>
    );
};

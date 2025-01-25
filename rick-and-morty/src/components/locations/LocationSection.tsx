import { useState, useEffect } from 'react';

export const LocationSection = () => {

    interface Location {
        id: number;
        name: string;
        type: string;
        dimension: string;
        residents: string[];
        url: string;
        created: string;
    }

    const [locations, setLocations] = useState<Location[]>([])
    const [page, setPage] = useState(1)

    const url = `https://rickandmortyapi.com/api/location?page=${page}`

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setLocations(data.results))
    }, [page])

    const hdlNextPage = () => {
        setPage(page + 1)
    }
    const hdlPrevPage = () => {
        setPage(page - 1)
    }
    return (
        <main id='main'>
            Here the locations
            <ul>
                {   
                    locations.length > 0 
                        ? locations.map((locatiohn) => (
                            <li key={locatiohn.id}>{locatiohn.name}</li>
                        ))
                        : <p>
                            Loading ...
                        </p>
                }
            </ul>

            <section>
                <button onClick={hdlPrevPage}>Previous</button>
                <button onClick={hdlNextPage}>Next</button>
            </section>
        </main>
    )
}

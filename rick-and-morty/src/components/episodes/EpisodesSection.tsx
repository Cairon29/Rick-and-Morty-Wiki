import { useState, useEffect } from 'react';

export const EpisodeSection = () => {

    interface Episode {
        id: number;
        name: string;
        airDate: string;
        episode: string;
        characteres: string[];
        url: string;
        created: string;
    }

    const [episodes, setEpisodes] = useState<Episode[]>([])
    const [page, setPage] = useState(1)

    const url = `https://rickandmortyapi.com/api/episode?page=${page}`

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setEpisodes(data.results))
    }, [page])

    const hdlNextPage = () => {
        setPage(page + 1)
    }
    const hdlPrevPage = () => {
        setPage(page - 1)
    }
    return (
        <main id='main'>
            Here the Episodes
            <ul>
                {   
                    episodes.length > 0 
                        ? episodes.map((episode) => (
                            <li key={episode.id}>{episode.name}</li>
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

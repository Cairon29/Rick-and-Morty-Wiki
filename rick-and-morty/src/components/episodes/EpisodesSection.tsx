import { useState, useEffect, useContext } from 'react';
import { SingleEpisode } from './SingleEpisode';
import { EpisodeFilterContext } from '../../contexts/EpisodeFiltterContext';

export const EpisodeSection = () => {

    interface Episode {
        id: number;
        name: string;
        air_date: string;
        episode: string;
        characteres: string[];
        url: string;
        created: string;
    }

    const [episodes, setEpisodes] = useState<Episode[]>([])
    const [page, setPage] = useState(1)
    const { filter } = useContext(EpisodeFilterContext)

    const baseUrl = `https://rickandmortyapi.com/api/episode?page=${page}`
    const filterUrl = `https://rickandmortyapi.com/api/episode?name=${filter.episode}`
    useEffect(() => {
        console.log(filter)
        if (!filter.episode && !filter.release_year && !filter.season) {
            fetch(baseUrl)
                .then(response => response.json())
                .then(data => setEpisodes(data.results))
        } else if (filter.episode && !filter.release_year && !filter.season) {
            fetch(filterUrl)
                .then(response => response.json())
                .then(data => setEpisodes(data.results))
        } else {
            fetch(baseUrl)
                .then(response => response.json())
                .then(data => {
                    console.log(data.results)
                    const filteredEpisodes = data.results.filter((rawEpisode: Episode) => {
                        if (rawEpisode.name.includes(filter.episode) 
                            && rawEpisode.air_date.includes(filter.release_year) 
                            && rawEpisode.episode.includes(filter.season)) {
                            return rawEpisode
                        }
                })
                    console.log(filteredEpisodes)
                    setEpisodes(filteredEpisodes)
                })
        }
    }, [page, filter])

    const hdlNextPage = () => {
        setPage(page + 1)
    }
    const hdlPrevPage = () => {
        setPage(page - 1)
    }
    return (
        <main id='main-episode'>
            <ul>
                {   
                    episodes.length > 0 
                        ? episodes.map((episode) => (
                            <SingleEpisode key={episode.id} episode={episode} />
                        ))
                        : <p>
                            Loading ...
                        </p>
                }
            </ul>

            <section id='pagination'>
                <button onClick={hdlPrevPage}>Previous</button>
                <button onClick={hdlNextPage}>Next</button>
            </section>
        </main>
    )
}

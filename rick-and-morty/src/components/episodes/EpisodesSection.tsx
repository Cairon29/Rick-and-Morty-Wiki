import { useState, useEffect, useContext } from 'react';
import { SingleEpisode } from './SingleEpisode';
import { EpisodeFilterContext } from '../../contexts/EpisodeFiltterContext';
import { Pagination } from '../pagination/Pagination';

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
    const { filter, setFilter, filterUrl } = useContext(EpisodeFilterContext)

    useEffect(() => {
        fetch(filterUrl)
            .then(response => response.json())
            .then(data => { 
                if (data.results.length > 0 ) {
                    setEpisodes(data.results)
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
            <Pagination HdlFunctions={hdlFunctions} PageFilter={filter} />
        </main>
    )
}

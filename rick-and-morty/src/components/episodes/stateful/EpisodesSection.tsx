import { useState, useEffect, useContext } from 'react';
import { SingleEpisode } from '../stateless/SingleEpisode';
import { EpisodeFilterContext } from '../../../contexts/EpisodeFilterContext';
import { Pagination } from '../../pagination/Pagination';
import { NoMatchingResults } from '../../NoMatchingResults/NoMatchingResults';

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
        const fetchData = async () => {
            try {
                if (filter.release_year === 'all' && filter.season === 'all') {
                    const response = await fetch(filterUrl);
                    const data = await response.json();
                    if (data.results.length > 0) {
                        setEpisodes(data.results);
                        setFilter((prev) => ({ ...prev, totalPages: data.info.pages }));
                    } else {
                        setFilter((prev) => ({ ...prev, page: prev.page - 1 }));
                    }
                } else {
                    setFilter((prev) => ({ ...prev, page: 1, totalPages: 1 }));
                    const allEpisodes = [];
                    for (let i = 1; i <= 3; i++) {
                        const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${i}`);
                        const data = await response.json();
                        const filteredEpisodes = data.results.filter((episode: Episode) => {
                            if (filter.release_year !== 'all' && filter.season === 'all') {
                                return episode.air_date.includes(filter.release_year);
                            } else if (filter.release_year === 'all' && filter.season !== 'all') {
                                return episode.episode.includes(filter.season);
                            } else {
                                return episode.air_date.includes(filter.release_year) && episode.episode.includes(filter.season);
                            }
                        });
                        allEpisodes.push(...filteredEpisodes);
                    }
                    setEpisodes(allEpisodes);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [filter.release_year, filter.season, filter.page, filterUrl]);

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
            {
                episodes.length > 0 
                ?
                    <ul>
                        {episodes.map((episode) => (
                            <SingleEpisode key={episode.id} episode={episode} />
                        ))}
                    </ul>
                : 
                    <NoMatchingResults/>
            }
            <Pagination HdlFunctions={hdlFunctions} PageFilter={filter} />
        </main>
    )
}

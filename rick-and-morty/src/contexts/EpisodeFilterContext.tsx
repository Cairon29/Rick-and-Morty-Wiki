import { useState, createContext } from 'react';

interface Props {
    children: React.ReactNode;
}

interface Filters {
    page: number;
    episode: string;
    season: string;
    release_year: string;
    totalPages: number;
}

interface EpisodeFiltterContextType {
    filter: Filters;
    setFilter: React.Dispatch<React.SetStateAction<Filters>>;
    filterUrl: string;
}

export const EpisodeFilterContext = createContext<EpisodeFiltterContextType>({
    filter: { episode: '', season: '', release_year: '', page: 0 ,totalPages: 0 },
    setFilter: () => { },
    filterUrl: '',
});

export const EpisodeFiltterProvider = ({ children }: Props) => {

    const [filter, setFilter] = useState<Filters>({
        episode: '',
        season: 'all',
        release_year: 'all',
        page: 1,
        totalPages: 0
    })

    const filterUrl = `https://rickandmortyapi.com/api/episode?page=${filter.page}&name=${filter.episode}`

    return (
        <EpisodeFilterContext.Provider value={{ filter, setFilter, filterUrl }}>
            { children }
        </EpisodeFilterContext.Provider>
    )
}
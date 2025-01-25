import { useState, createContext } from 'react';

interface Props {
    children: React.ReactNode;
}

interface Filters {
    episode: string;
    season: string;
    release_year: string;
}

interface EpisodeFiltterContextType {
    filter: Filters;
    setFilter: React.Dispatch<React.SetStateAction<Filters>>;
}

export const EpisodeFilterContext = createContext<EpisodeFiltterContextType>({
    filter: { episode: '', season: '', release_year: '' },
    setFilter: () => { }
});

export const EpisodeFiltterProvider = ({ children }: Props) => {

    const [filter, setFilter] = useState<Filters>({
        episode: '',
        season: '',
        release_year: ''
    })

    return (
        <EpisodeFilterContext.Provider value={{ filter, setFilter }}>
            { children }
        </EpisodeFilterContext.Provider>
    )
}
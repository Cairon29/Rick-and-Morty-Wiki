import { createContext, useState } from "react";

interface Props {
    children: React.ReactNode;
}

interface Filters {
    page: number;
    name: string;
    status:'all' | 'alive' | 'dead' | 'unknown';
    species: string;
    gender: 'all' | 'male' | 'female' | 'unknown';
}

interface CharacterFilterContextType {
    filter: Filters;
    setFilter: React.Dispatch<React.SetStateAction<Filters>>;
    filterUrl: string;
}

export const CharacterFilterContext = createContext<CharacterFilterContextType>({
    filter: {
        page: 1,
        name: '',
        status: 'all',
        species: '',
        gender: 'all',
    },
    setFilter: () => {},
    filterUrl: '',
});

export const CharacterFilterProvider = ({ children }: Props) => {
    const [filter, setFilter] = useState<Filters>({
        page: 1,
        name: '',
        status: 'all',
        species: '',
        gender: 'all',
    });
     
    const filterUrl = `https://rickandmortyapi.com/api/character/?page=${filter.page}&name=${filter.name}&status=${filter.status === 'all' ? '' : filter.status}&species=${filter.species}&gender=${filter.gender === 'all' ? '' : filter.gender}`;

    return (
        <CharacterFilterContext.Provider  value={{ filter, setFilter, filterUrl }}>
            { children }
        </CharacterFilterContext.Provider >
    );
}
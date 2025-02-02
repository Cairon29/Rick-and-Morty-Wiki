import { createContext, useState } from "react";
import { Gender, Status } from "../types/SelectorFilters";

interface Props {
    children: React.ReactNode;
}

interface Filters {
    page: number;
    name: string;
    status: Status;
    species: string;
    gender: Gender;
    totalPages: number;
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
        totalPages: 0
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
        totalPages: 0
    });
     
    const filterUrl = `https://rickandmortyapi.com/api/character/?page=${filter.page}&name=${filter.name}&status=${filter.status === 'all' ? '' : filter.status}&species=${filter.species}&gender=${filter.gender === 'all' ? '' : filter.gender}`;

    return (
        <CharacterFilterContext.Provider  value={{ filter, setFilter, filterUrl }}>
            { children }
        </CharacterFilterContext.Provider >
    );
}
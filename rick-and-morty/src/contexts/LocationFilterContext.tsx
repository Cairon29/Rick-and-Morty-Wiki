import { useState, createContext } from 'react';
import { DimensionType, Type } from '../types/SelectorFilters';

interface Props {
    children: React.ReactNode;
}

interface Filters {
    name: string;
    type: Type;
    dimension: DimensionType;
    page: number;
    totalPages: number;
}

interface LocationFiltterContextType {
    filter: Filters;
    setFilter: React.Dispatch<React.SetStateAction<Filters>>;
    filterUrl: string;
}

export const LocationFilterContext = createContext<LocationFiltterContextType>({
    filter: { name: '', type: "", dimension: "", page: 0 ,totalPages: 0 },
    setFilter: () => { },
    filterUrl: '',
});

export const LocationFiltterProvider = ({ children }: Props) => {

    const [filter, setFilter] = useState<Filters>({
        name: '',
        type: "",
        dimension: "",
        page: 1,
        totalPages: 0
    })

    const filterUrl = `https://rickandmortyapi.com/api/location?page=${filter.page}&name=${filter.name}&type=${filter.type === 'others' ? '' : filter.type}&dimension=${filter.dimension === 'unknown' ? 'unknown' : ''}`;

    return (
        <LocationFilterContext.Provider value={{ filter, setFilter, filterUrl }}>
            { children }
        </LocationFilterContext.Provider>
    )
}
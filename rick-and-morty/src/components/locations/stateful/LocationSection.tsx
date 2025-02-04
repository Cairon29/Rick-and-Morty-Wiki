import { useState, useEffect, useContext } from 'react';
import { Pagination } from '../../pagination/Pagination';
import { LocationFilterContext } from '../../../contexts/LocationFilterContext';
import { NoMatchingResults } from '../../NoMatchingResults/NoMatchingResults';
import { SingleLocation } from '../stateless/SingleLocation';

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
    const { filter, setFilter, filterUrl } = useContext(LocationFilterContext)

    useEffect(() => {
        fetch(filterUrl)
        .then(response => response.json())
        .then(data => {
            setFilter((prev) => ({ ...prev, totalPages: data.info.pages }))
            setLocations(data.results);
        })
    }, [filter.page, filter.type, filter.dimension, filter.name])

    const hdlFunctions = {
        hdlPrevPage : () => {
            if (filter.page > 1) {
                setFilter((prev) => ({ ...prev, page: prev.page - 1 }))
                document.documentElement.scrollTop = 0;
            }   
        },        
        hdlNextPage : () => {
            setFilter((prev) => ({ ...prev, page: prev.page + 1 }))
            document.documentElement.scrollTop = 0;
        }
    }
    
    return (
        <main id='main-location'>
            {
                locations.length > 0 
                ? 
                    <ul>
                        {
                            locations.map((location) => (
                                <SingleLocation key={location.id} location={location} />
                            ))
                        }
                    </ul>
                : 
                    <NoMatchingResults/>
            }
            <Pagination HdlFunctions={hdlFunctions} PageFilter={filter}/>
        </main>
    )
}

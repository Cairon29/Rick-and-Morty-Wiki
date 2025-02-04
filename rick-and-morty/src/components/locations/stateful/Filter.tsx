import { useContext, useState } from 'react'
import { FilterStructure } from '../stateless/FilterStructure';
import { DimensionType, Type } from '../../../types/SelectorFilters';
import { LocationFilterContext } from '../../../contexts/LocationFilterContext';

export const Filter = () => {

    interface Filters {
        location: string;
        type: Type;
        dimension: DimensionType;
    }

    const { setFilter } = useContext(LocationFilterContext)
    const [ rawFilter, setRawFilter ] = useState<Filters>({
        location: '',
        type: "",
        dimension: "",
    })

      const hdlFunctions = {
        hdlLocation: (e: React.ChangeEvent<HTMLInputElement>) => {
            setRawFilter((prev) => ({ ...prev, location: e.target.value }));
        },
        hdlType : (e: React.ChangeEvent<HTMLSelectElement>) => {
            setRawFilter((prev) => ({ ...prev, type: e.target.value as Type}));
        },
        hdlDimension : (e: React.ChangeEvent<HTMLSelectElement>) => {
          setRawFilter((prev) => ({ ...prev, dimension: e.target.value as DimensionType}));
        },
        hdlSubmit: (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setFilter((prev) => ({ ...prev, 
            location: rawFilter.location,
            type: rawFilter.type,
            dimension: rawFilter.dimension
        }));
        }
      }
    return (
        <FilterStructure hdlFunctions={hdlFunctions} rawFilter={rawFilter} />
    )
}

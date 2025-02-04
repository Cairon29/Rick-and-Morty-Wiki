import { IoSearch } from 'react-icons/io5'
import { DimensionType, Type } from '../../../types/SelectorFilters';

interface HdlFunctions {
    hdlLocation: (event: React.ChangeEvent<HTMLInputElement>) => void;
    hdlType: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    hdlDimension: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    hdlSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface RawFilter {
    location: string;
    type: Type;
    dimension: DimensionType;
}


interface Props {
    hdlFunctions : HdlFunctions;
    rawFilter: RawFilter;
}
export const FilterStructure = ({ hdlFunctions, rawFilter }: Props) => {

    return (
        <aside id="sideBar-locations">
            <form onSubmit={hdlFunctions.hdlSubmit} id='location-form'>
                <section id='search-location-section'>
                    <input type="text" placeholder="e.j. Earth" value={rawFilter.location} onChange={hdlFunctions.hdlLocation}/>
                    <button type='submit'>
                        <IoSearch />
                    </button>
                </section>
                <section id='category-location-section'>
                    <div>
                        <label htmlFor="type-select">Type:</label>
                        <select name="type-select" id="type-select" value={rawFilter.type} onChange={hdlFunctions.hdlType}>
                            <option value="all">All</option>
                            <option value="planet">Planets</option>
                            <option value="space station">SpaceStations</option>
                            <option value="verse">Verses</option>
                            <option value="dimension">Dimensions</option>
                            <option value="others">others</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="dimension-type-select">Dimension type:</label>
                        <select name="dimension-type-select" id="dimension-type-select" value={rawFilter.dimension} onChange={hdlFunctions.hdlDimension}>
                            <option value="all">All</option>
                            <option value="known"> Known</option>
                            <option value="unknown"> Unknown</option>
                        </select>
                    </div>
                </section>
            </form>
        </aside>
    )
}

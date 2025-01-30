import { IoSearch } from "react-icons/io5";
import { Gender, Status } from "../../../types/CharacterFilters";

interface HdlFunctions {
  hdlName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hdlStatus: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  hdlGender: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  hdlSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface RawFilter {
  gender: Gender;
  status: Status;
  name: string;
}

interface FilterStructureProps {
  hdlFunctions: HdlFunctions;
  rawFilter: RawFilter;
}

export const FilterStructure = ({ hdlFunctions, rawFilter } : FilterStructureProps) => {

    return (
        <aside id="sideBar-characters">
          <form onSubmit={hdlFunctions.hdlSubmit} id="form-filter">
            <section id="filter-name">
              <input type="text" placeholder="e.j. Morty Smith" value={rawFilter.name} onChange={hdlFunctions.hdlName} />
              <button type="submit">
                <IoSearch />
              </button>
            </section>
            <section id="filter-categories">
              <div>
                <label htmlFor="status-select">Status:</label>
                <select name="status-select" id="status-select" onChange={hdlFunctions.hdlStatus} value={rawFilter.status}>
                  <option value="all">All</option>
                  <option value="dead">Dead</option>
                  <option value="alive">Alive</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>
              <div>
                <label htmlFor="gender-select">Gender:</label>
                <select name="gender-select" id="gender-select" onChange={hdlFunctions.hdlGender} value={rawFilter.gender}>
                  <option value="all">All</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>
            </section>
          </form>
        </aside>   
    )
}

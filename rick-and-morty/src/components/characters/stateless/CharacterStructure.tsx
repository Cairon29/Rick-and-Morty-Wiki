import { useContext } from "react";
import { CharacterFilterContext } from "../../../contexts/CharacterFilterContext";
import { IoSearch } from "react-icons/io5";

interface HdlFunctions {
  hdlName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hdlStatus: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  hdlGender: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface CharacterStructureProps {
  hdlFunctions: HdlFunctions;
}

export const CharacterStructure = ({ hdlFunctions } : CharacterStructureProps) => {

    const { filter } = useContext(CharacterFilterContext);
    
    return (
        <aside id="sideBar-characters">
              <section>
                <input type="text" placeholder="e.j. Morty Smith" value={filter.name} onChange={hdlFunctions.hdlName} />
                <button>
                  <IoSearch />
                </button>
              </section>
              <section>
                <div>
                  <label htmlFor="status-select">Status:</label>
                  <select name="status-select" id="status-select" onChange={hdlFunctions.hdlStatus} value={filter.status}>
                    <option value="all">All</option>
                    <option value="dead">Dead</option>
                    <option value="alive">Alive</option>
                    <option value="unknown">Unknown</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="gender-select">Gender:</label>
                  <select name="gender-select" id="gender-select" onChange={hdlFunctions.hdlGender} value={filter.gender}>
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unknown">Unknown</option>
                  </select>
                </div>
              </section>
        </aside>   
    )
}

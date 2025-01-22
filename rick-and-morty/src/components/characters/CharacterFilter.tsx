import { useContext } from "react";
import { CharacterFilterContext } from "../../contexts/CharacterFilterContext";
import { IoSearch } from "react-icons/io5";

export const CharacterFilter = () => {
  const { filter, setFilter } = useContext(CharacterFilterContext);

  const hdlGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter((prev) => ({ ...prev, gender: e.target.value as "all" | "male" | "female" | "unknown"}));
  };

  const hdlStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter((prev) => ({ ...prev, status: e.target.value as "all" | "alive" | "dead" | "unknown" }));
  };

  const hdlName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => ({ ...prev, name: e.target.value }));
  }
  return (
    <aside id="sideBar">
      <section>
        <input type="text" placeholder="e.j. Morty Smith" value={filter.name} onChange={hdlName} />
        <button>
          <IoSearch />
        </button>
      </section>
      <section>
        <div>
          <label htmlFor="status-select">Status:</label>
          <select name="status-select" id="status-select" onChange={hdlStatus} value={filter.status}>
            <option value="all">All</option>
            <option value="dead">Dead</option>
            <option value="alive">Alive</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div>
          <label htmlFor="gender-select">Gender:</label>
          <select name="gender-select" id="gender-select" onChange={hdlGender} value={filter.gender}>
            <option value="all">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </section>
      
    </aside>
  );
};

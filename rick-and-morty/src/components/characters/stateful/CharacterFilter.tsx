import { useContext } from "react";
import { CharacterFilterContext } from "../../../contexts/CharacterFilterContext";
import { CharacterStructure } from "../stateless/CharacterStructure";

export const CharacterFilter = () => {
  const { setFilter } = useContext(CharacterFilterContext);

  const hdlFunctions = {
    hdlGender : (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilter((prev) => ({ ...prev, gender: e.target.value as "all" | "male" | "female" | "unknown"}));
    },
    hdlStatus : (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFilter((prev) => ({ ...prev, status: e.target.value as "all" | "alive" | "dead" | "unknown" }));
    },
    hdlName: (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilter((prev) => ({ ...prev, name: e.target.value }));
    }
  }
  return (
    <CharacterStructure hdlFunctions={hdlFunctions}/>
  );
};

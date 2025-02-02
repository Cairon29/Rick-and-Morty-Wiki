import { useState, useContext } from "react";
import { CharacterFilterContext } from "../../../contexts/CharacterFilterContext";
import { FilterStructure } from "../stateless/FilterStructure";
import { Gender, Status } from "../../../types/SelectorFilters";


export const Filter = () => {
  const { setFilter } = useContext(CharacterFilterContext);
  const [rawFilter, setRawFilter] = useState<{
    gender: Gender;
    status: Status;
    name: string
  }>({
    gender: "all",
    status: "all",
    name: ""
  });

  const hdlFunctions = {
    hdlGender : (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRawFilter((prev) => ({ ...prev, gender: e.target.value as Gender}));
    },
    hdlStatus : (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRawFilter((prev) => ({ ...prev, status: e.target.value as Status}));
    },
    hdlName: (e: React.ChangeEvent<HTMLInputElement>) => {
      setRawFilter((prev) => ({ ...prev, name: e.target.value }));
    },
    hdlSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setFilter((prev) => ({ ...prev, 
        gender: rawFilter.gender,
        status: rawFilter.status,
        name: rawFilter.name
       }));
    }
  }
  return (
    <FilterStructure hdlFunctions={hdlFunctions} rawFilter={rawFilter} />
  );
};

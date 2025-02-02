import { useContext, useState } from 'react'
import { FilterStructure } from '../stateless/FilterStructure';
import { ReleaseYear, Season } from '../../../types/SelectorFilters';
import { EpisodeFilterContext } from '../../../contexts/EpisodeFilterContext';

export const Filter = () => {

    interface Filters {
        episode: string;
        season: Season;
        release_year: ReleaseYear;
    }

    const { setFilter, filterUrl } = useContext(EpisodeFilterContext)
    const [ rawFilter, setRawFilter ] = useState<Filters>({
        episode: '',
        season: "all",
        release_year: "all",
    })

      const hdlFunctions = {
        hdlReleaseYear : (e: React.ChangeEvent<HTMLSelectElement>) => {
          setRawFilter((prev) => ({ ...prev, release_year: e.target.value as ReleaseYear}));
        },
        hdlSeason : (e: React.ChangeEvent<HTMLSelectElement>) => {
          setRawFilter((prev) => ({ ...prev, season: e.target.value as Season}));
        },
        hdlEpisode: (e: React.ChangeEvent<HTMLInputElement>) => {
          setRawFilter((prev) => ({ ...prev, episode: e.target.value }));
        },
        hdlSubmit: (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setFilter((prev) => ({ ...prev, 
            episode: rawFilter.episode,
            season: rawFilter.season,
            release_year: rawFilter.release_year
          }));
        }
      }
    return (
        <FilterStructure hdlFunctions={hdlFunctions} rawFilter={rawFilter} />
    )
}

import { IoSearch } from 'react-icons/io5'
import { ReleaseYear, Season } from '../../../types/SelectorFilters';

interface HdlFunctions {
    hdlEpisode: (event: React.ChangeEvent<HTMLInputElement>) => void;
    hdlReleaseYear: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    hdlSeason: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    hdlSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface RawFilter {
    episode: string;
    season: Season;
    release_year: ReleaseYear;
}


interface Props {
    hdlFunctions : HdlFunctions;
    rawFilter: RawFilter;
}
export const FilterStructure = ({ hdlFunctions, rawFilter }: Props) => {

    return (
        <aside id="sideBar-episodes">
            <form onSubmit={hdlFunctions.hdlSubmit} id='episode-form'>
                <section id='search-episode-section'>
                    <input type="text" placeholder="e.j. Anatomy Park" value={rawFilter.episode} onChange={hdlFunctions.hdlEpisode}/>
                    <button type='submit'>
                        <IoSearch />
                    </button>
                </section>
                <section id='category-episode-section'>
                    <div>
                        <label htmlFor="season-select">Season:</label>
                        <select name="season-select" id="season-select" value={rawFilter.season} onChange={hdlFunctions.hdlSeason}>
                            <option value="all">All</option>
                            <option value="S01">Season 1</option>
                            <option value="S02">Season 2</option>
                            <option value="S03">Season 3</option>
                            <option value="S04">Season 4</option>
                            <option value="S05">season 5</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="release-year-select">Release Year:</label>
                        <select name="release-year-select" id="release-year-select" value={rawFilter.release_year} onChange={hdlFunctions.hdlReleaseYear}>
                            <option value="all">All</option>
                            <option value="2015"> 2015</option>
                            <option value="2016"> 2016</option>
                            <option value="2017"> 2017</option>
                            <option value="2018"> 2018</option>
                            <option value="2019"> 2019</option>
                            <option value="2020"> 2020</option>
                            <option value="2021"> 2021</option>
                        </select>
                    </div>
                </section>
            </form>
        </aside>
    )
}

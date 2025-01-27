import { IoSearch } from 'react-icons/io5'
import { useContext, useState } from 'react'
import { EpisodeFilterContext } from '../../contexts/EpisodeFiltterContext'

export const EpisodeFilter = () => {

    interface Filters {
        episode: string;
        season: string;
        release_year: string;
    }

    const { filter, setFilter } = useContext(EpisodeFilterContext)
    const [ search, setSearch ] = useState<Filters>({
        episode: '',
        season: '',
        release_year: '',
    })

    const hdlEpisode = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch((prev) => ({ ...prev, episode: e.target.value.trim() }))
    }

    const hdlSeason = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearch((prev) => ({ ...prev, season: e.target.value.trim() }))
    }

    const hdlReleaseYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearch((prev) => ({ ...prev, release_year: e.target.value.trim()}))
    }

    const hdlSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFilter((prev) => ({ ...prev, ...search }))
    }
    return (
        <aside id="sideBar-episodes">
            <form onSubmit={hdlSubmit}>
                <section>
                    <input type="text" placeholder="e.j. Anatomy Park" onChange={hdlEpisode} value={search.episode}/>
                    <button type='submit'>
                    <IoSearch />
                    </button>
                </section>
                <section>
                    <div>
                    <label htmlFor="season-select">Season:</label>
                    <select name="season-select" id="season-select" value={search.season} onChange={hdlSeason}>
                        <option value="">All</option>
                        <option value="S01">Season 1</option>
                        <option value="S02">Season 2</option>
                        <option value="S03">Season 3</option>
                        <option value="S04">Season 4</option>
                        <option value="S05">season 5</option>
                    </select>
                    </div>
                    <div>
                    <label htmlFor="release-year-select">Release Year:</label>
                    <select name="release-year-select" id="release-year-select" value={search.release_year} onChange={hdlReleaseYear}>
                        <option value="">All</option>
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

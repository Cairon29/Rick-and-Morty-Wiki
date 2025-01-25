import { IoSearch } from 'react-icons/io5'
import { useContext } from 'react'

export const EpisodeFilter = () => {
    return (
        <aside id="sideBar-episodes">
            <section>
                <input type="text" placeholder="e.j. Anatomy Park" />
                <button>
                <IoSearch />
                </button>
            </section>
            <section>
                <div>
                <label htmlFor="season-select">Season:</label>
                <select name="season-select" id="season-select" >
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
                <select name="release-year-select" id="release-year-select">
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
        </aside>
    )
}

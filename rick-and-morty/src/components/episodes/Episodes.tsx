import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import { Filter } from "./stateful/Filter"
import { EpisodeSection } from "./stateful/EpisodesSection"
import './styles/episodes-styles.css'
import './styles/filter-styles.css'
export const Episodes = () => {
  return (
    <>
        <Header/>
        <Filter/>
        <EpisodeSection/>
        <Footer/>
    </>
  )
}

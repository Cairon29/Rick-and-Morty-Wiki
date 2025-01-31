import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import { EpisodeFilter } from "./EpisodeFilter"
import { EpisodeSection } from "./EpisodesSection"
import './episodes-styles.css'
import './filter-styles.css'
export const Episodes = () => {
  return (
    <>
        <Header/>
        <EpisodeFilter/>
        <EpisodeSection/>
        <Footer/>
    </>
  )
}

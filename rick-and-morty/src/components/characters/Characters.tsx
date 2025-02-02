import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import { Filter } from "./stateful/Filter"
import { CharacterSection } from "./stateful/CharacterSection"
import './styles/character-styles.css'
import './styles/filter-styles.css'

export const Characters = () => {
  return (
    <>
        <Header/>
        <Filter/>
        <CharacterSection/>
        <Footer/>
    </>
  )
}

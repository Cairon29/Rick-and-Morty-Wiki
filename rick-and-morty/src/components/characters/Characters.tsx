import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import { CharacterFilter } from "./stateful/CharacterFilter"
import { CharacterSection } from "./stateful/CharacterSection"
import './character-styles.css'
export const Characters = () => {
  return (
    <>
        <Header/>
        <CharacterFilter/>
        <CharacterSection/>
        <Footer/>
    </>
  )
}

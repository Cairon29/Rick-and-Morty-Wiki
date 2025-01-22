import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"
import { CharacterFilter } from "./CharacterFilter"
import { CharacterSection } from "./CharacterSection"
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

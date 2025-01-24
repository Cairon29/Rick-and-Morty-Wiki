import { Link } from "react-router-dom";
import { TiDocumentText } from "react-icons/ti";
import { MdOutlineMyLocation } from "react-icons/md";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { RiHome9Line } from "react-icons/ri";
import { GrYoga } from "react-icons/gr";

import './header-styles.css'

export const Header = () => {
  return (
    <header id="header">
        <div>
          <img src="https://i.pinimg.com/736x/88/b5/f6/88b5f6ab99941a7d071c11d27c4501c1.jpg" alt="" />
        </div>
        <h1>The Rick and Morty Wiki</h1>
        <nav>
            <Link to="/home">
              <ul className="nav-button"> <RiHome9Line/> Home </ul>
            </Link>
            <Link to="/characters">
              <ul className="nav-button"> <GrYoga/> Characters </ul>          
            </Link>
            <Link to="/episodes">
              <ul className="nav-button"> <IoPlaySkipForwardOutline/> Episodes </ul>
            </Link>
            <Link to="/locations">
              <ul className="nav-button"> <MdOutlineMyLocation/> Locations</ul>            
            </Link>
            <a href="https://rickandmortyapi.com/documentation" target="_blank">
              <ul className="nav-button"> <TiDocumentText/> Docs </ul>            
            </a>
        </nav>
    </header>
  )
}

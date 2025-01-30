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
        <div id="logo">
          <img src="https://i.pinimg.com/736x/88/b5/f6/88b5f6ab99941a7d071c11d27c4501c1.jpg" alt="" />
        </div>
        <div id="title">
          <h1>The Rick and Morty Wiki</h1>
        </div>
        <nav id="menu-bar">
            <ul>
              <li className="nav-button">
                <Link to="/home"> <RiHome9Line/> Home </Link>
              </li>
              <li className="nav-button">
                <Link to="/characters"> <GrYoga/> Characters </Link>
              </li>
              <li className="nav-button">
                <Link to="/episodes"> <IoPlaySkipForwardOutline/> Episodes </Link>
              </li>
              <li className="nav-button">
                <Link to="/locations"> <MdOutlineMyLocation/> Locations </Link>
              </li>
              <li className="nav-button">
                <a href="https://rickandmortyapi.com/documentation" target="_blank" rel="noopener noreferrer">
                  <TiDocumentText/> Docs
                </a>
              </li>
            </ul>
        </nav>
    </header>
  )
}

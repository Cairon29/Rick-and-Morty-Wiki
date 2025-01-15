import './header-styles.css'

export const Header = () => {
  return (
    <header id="header">
        <div>
          <img src="https://i.pinimg.com/736x/88/b5/f6/88b5f6ab99941a7d071c11d27c4501c1.jpg" alt="" />
        </div>
        <h1>The Rick and Morty Wiki</h1>
        <nav>
            <ul> Home </ul>
            <ul> Characters </ul>
            <ul> Episodes </ul>
            <ul> Locations</ul>
            <ul> Docs </ul>
        </nav>
    </header>
  )
}

import { RandomCharacter } from "../stateful/RandomCharacter"

export const HomeSection = () => {

    return (
        <main id="main-home">
            <section className="title-section">
                <h2 className="first-title">
                Look up for your favorite <b className="highlight-blue">ADULT SWIM</b> show!
                </h2>
            </section>
            <section className="page-general-information-section">
                <article>
                    <p>
                        Explore detailed data on <b className="highlight-blue">characters</b>, <b className="highlight-blue">episodes</b>, and <b className="highlight-blue">locations</b> featured in the show up to Season 5.
                        This service is powered by <a className="link-anchore highlight-green" href="https://rickandmortyapi.com" target="_blank">The Rick and Morty API</a>.
                    </p>
                </article>
                <article>
                    <img src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png" alt="ilustration" id="ilustration-image"/>
                </article>
            </section>

            <section className="how-it-works-section">
                <h2>How does it Works?</h2>
                <p>
                    By fetching real-time data from the API, the app displays a comprehensive collection of characters, locations, and episodes from the Rick and Morty universe. Users can seamlessly navigate through the content with features like advanced search, filters for specific criteria such as character status and gender, and a clean, user-friendly interface.
                </p>
                <ul>
                    <li className="listed-information-li">
                        <p>
                            Search for characters by their name or filter them by their status (e.g., Alive, Dead, or Unknown) and gender.
                        </p>
                        <RandomCharacter/>
                    </li>
                    <li className="listed-information-li">
                        <p>
                            Explore episodes to find summaries, air dates, and character appearances.
                        </p>
                        <RandomCharacter/>
                    </li>
                </ul>
            </section>
        </main>
    )
}

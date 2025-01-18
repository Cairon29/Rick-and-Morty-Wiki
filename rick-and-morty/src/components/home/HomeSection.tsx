export const HomeSection = () => {
  return (
    <main id="main">
        <section className="title-section">
            <h2 className="first-title">
            Look up for your favorite ADULT SWIM show!
            </h2>
        </section>
        <section className="page-general-information-section">
            <article>
                <p>
                    Explore detailed data on <b className="highlight-blue">characters</b>, <b className="highlight-green">episodes</b>, and <b className="highlight-yellow">locations</b> featured in the show up to Season 5.
                    This service is powered by the <a className="link-anchore" href="https://rickandmortyapi.com" target="_blank">Rick and Morty API</a>.
                </p>
            </article>
            <article>
                <img src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png" alt="ilustration" id="ilustration-image"/>
            </article>
        </section>

        <section>
            <h2>Features</h2>
            <ul>
                <li>Search and filter characters by name, gender, and status.</li>
                <li>Browse through episodes and view their details.</li>
                <li>Discover and explore various locations from the show.</li>
            </ul>
        </section>

        <section>
            <h2>How It Works</h2>
            <p>
                The app fetches data from the Rick and Morty API and dynamically displays it on the web page. Users can:
            </p>
            <ul>
                <li>Search for characters by their name or filter them by their status (e.g., Alive, Dead, or Unknown) and gender.</li>
                <li>Explore episodes to find summaries, air dates, and character appearances.</li>
                <li>Examine different locations, such as planets, dimensions, and other iconic settings from the show.</li>
            </ul>
        </section>

        <section>
            <h2>Start Exploring</h2>
            <p>
                Use the navigation menu to jump into your favorite section and start exploring the Rick and Morty universe!
            </p>
        </section>
    </main>
  )
}

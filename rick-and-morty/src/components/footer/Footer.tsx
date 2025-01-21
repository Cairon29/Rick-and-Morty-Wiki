import './footer-styles.css'

export const Footer = () => {
  return (
    <footer id="footer">
        <section className="footer-contact-section">
            <h3>Contact me:</h3>
            <article>
                <a href="https://www.linkedin.com/in/jose-david-junco-4540811b1/" target="_blank">
                    <b>LinkedIn</b>
                </a>
            </article>
            <article>
                <a href="https://github.com/Cairon29" target="_blank">
                    <b>GitHub</b>
                </a>
            </article>
            <article>
                <b>Email: josewjjunco@gmail.com</b>
            </article>
            <article>
                <b>Phone: +57 316-042-90-80</b>
            </article>
        </section>
        <section className='references-section'>
            <h3>References</h3>
            <article>
                <a href="https://rickandmortyapi.com">rickandmortyapi.com</a>
            </article>
            <article>
                <a href="https://midu.dev"> midu.dev</a>
            </article>
            <article>
                <a href="https://unbounce.com/landing-page-examples/best-landing-page-examples/"> unbounce.com/landin-page-examples</a>
            </article>
        </section>
    </footer>
  )
}

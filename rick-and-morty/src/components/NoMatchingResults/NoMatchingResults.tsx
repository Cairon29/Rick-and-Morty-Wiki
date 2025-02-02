import './NoMatchingResults-styles.css'

export const NoMatchingResults = () => {
    return (
        <article className='no-matching-results'>
            <div>
                <h2>Sorry, no matching results found.</h2>
                <p>Guess Rick hasn't fix this combination just yet. Please try a different search term or filter.</p>
            </div>
            <div>
                <img src="https://preview.redd.it/k8p6fg35pkj91.png?width=512&format=png&auto=webp&s=d4714a16f21f697b30578b6674a44e65d2b537ef" alt="morty-smith thinking" />
            </div>
        </article>
    )
}

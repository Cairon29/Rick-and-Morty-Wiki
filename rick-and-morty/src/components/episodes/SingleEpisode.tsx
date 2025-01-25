interface Episode {
    id: number;
    name: string;
    episode: string;
    air_date: string;
}

export const SingleEpisode = ({ episode }: { episode: Episode }) => {
  return (
    <li className="single-episode">
        <h3 id="episode-name">{episode.name}</h3>
        <div className="episode-details">
            <p><b>Code:</b> <span id="episode-code">{episode.episode}</span></p>
            <p><b>Air Date:</b> <span id="episode-date">{episode.air_date}</span></p>
        </div>
    </li>
  )
}

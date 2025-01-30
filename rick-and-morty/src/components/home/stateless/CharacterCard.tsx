import { Character } from "../../../types/Character"

export const CharacterCard = ({ character } : { character : Character }) => {
    return (
        <article className="random-character-card">
            {character ? (
                <>
                    <img src={character.image} alt={character.name} className="character-image" />
                    <div>
                        <h3 className="character-name">{character.name}</h3>
                        <p className="character-appearances">
                            <b>Appears:</b> <span>{character.episode.length}</span>
                        </p>
                        <p> <b>Gender:</b> {character.gender}</p>
                        <p> <b>Status:</b> {character.status}</p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </article>
    )
}

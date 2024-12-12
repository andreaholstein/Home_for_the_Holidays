// ---------- FXNALITY ----------

// ----------- STYLES -----------
import "./Recommendation.scss";

// WORKS!

function Recommendation({ movie }) {
    // TO DO: take props from CategoryPage Buttons! to render out different API obj elements based on genre, release year, etc.
    return (
        <>
            <article className="movie">
                <h2 className="movie__title">{movie.original_title}</h2>
                <img className="movie__poster" src={movie.poster_path} alt={`${movie.original_title} Theatrical Poster`}></img>
                <p className="movie__synopsis">{movie.overview}</p>
            </article >
        </>
    )
}

export default Recommendation
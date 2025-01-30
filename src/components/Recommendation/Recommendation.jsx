// ---------- FXNALITY ----------
import axios from "axios";
import { useState, useEffect } from "react";
// ----------- STYLES -----------
import "./Recommendation.scss";

function Recommendation() {

    // // API CALL STATES
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);

    // API CALL ELEMENTS
    const apiKey = "3768b0548f5c7a2c64a0475cb2bf95bf";
    const page = Math.floor(Math.random() * 147);
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_keywords=207317&api_key=${apiKey}`

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get(url);
                setMovies(response.data.results);
            } catch (error) {
                console.error(error);
                setError(error);
            }
        };
        // LOAD API DATA
        getMovies();
    }, []); // RUNS ON PAGE LOAD

    if (!movies) {
        return <>"Loading Movies"</>;
    }
    const randomMovie = movies[Math.floor(Math.random() * 20)];

    return (
        <>
            <article className="movie">
                <div className="movie__card">
                    <h2 className="movie__title">{randomMovie.original_title}</h2>
                    <div className="movie__poster-wrap">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original/${randomMovie.poster_path}`} alt={`${randomMovie.original_title} Theatrical Poster`}></img>
                    </div>
                    <p className="movie__synopsis">{randomMovie.overview}</p>
                </div>
            </article >
        </>
    )
}

export default Recommendation
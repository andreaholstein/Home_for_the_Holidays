// ---------- FXNALITY ----------
import axios from "axios";
import { useState, useEffect } from "react";
// ----------- STYLES -----------
import "./Recommendation.scss";

function Recommendation() {

    // API CALL STATES
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    // API CALL ELEMENTS
    const apiKey = "3768b0548f5c7a2c64a0475cb2bf95bf";
    const page = Math.floor(Math.random() * 147);
    // console.log(page); // page var working!
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_keywords=207317&api_key=${apiKey}`
    // hmm... API seems to load only one page at a time... may affect Generator OR need more logic to check if Genre ID !on Page, search new page === first match gets returned

    // I think Axios GETs need to be moved to each individual button component, filter there, and then pass down as a prop to RecoPage (pass movie title, movie poster, movie blurb and render in each component!)

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get(url);
                console.log(response.data);
                console.log(response.data.results);
                // console.log(response.data.results[#].original_title); // where # = a number between 0-19: Format for getting title from a specific index in the array of results! can do some matching to array indices by genre ID maybe?
                // console.log(response.data.results[#].genre_ids); // where # = a number between 0-19: Format for getting genre IDs from a specific index in the array of results! can do some matching to array indices by genre ID maybe?
                setMovies(response.data.results);
            } catch (error) {
                console.error(error);
                setError(error);
            }
        };
        // LOAD API DATA ONTO SCREEN 
        getMovies();
    }, []); // RUNS ON PAGE LOAD

    let movieList = [];
    movieList = movies;

    return (
        <>
            {movieList.map((movie) => {
                return (
                    <article className="movie">
                        <h2 className="movie__title">{movie.original_title}</h2>
                        <img className="movie__poster" src={movie.poster_path} alt={`${movie.original_title} Theatrical Poster`}></img>
                        <p className="movie__synopsis">{movie.overview}</p>
                    </article >
                )
            })}
        </>
    )
}

export default Recommendation
// ---------- FXNALITY ----------
import axios from "axios";
import { useState, useEffect } from "react";
// ----------- STYLES -----------
import "./Recommendation.scss";

// WORKS!

function Recommendation() {
    // TO DO: take props from CategoryPage Buttons! to render out different API obj elements based on genre, release year, etc.

    // // API CALL STATES
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    // const [randomMovie, setRandomMovie] = useState(null);

    // API CALL ELEMENTS
    const apiKey = "3768b0548f5c7a2c64a0475cb2bf95bf";
    const page = Math.floor(Math.random() * 147);
    // console.log(page); // page var working!
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_keywords=207317&api_key=${apiKey}`
    // const posterUrl = `https://api.themoviedb.org/3/movie/${movie_id}/images`
    // TO DO:
    // Additional logic to check if Genre ID !on Page > search new page === first match gets returned
    // then pass down as a prop to RecoPage > Recommendation (pass movie title, movie poster, movie blurb and render in each component!)
    // 2 options:
    // SIMPLE: .find() accepts a function and returns the first element that matches a specific condition
    // SOPHISTICATED: .filter() accepts a function and returns elements within the array that pass a specific condition

    useEffect(() => {
        // const handleSubmit = () => {

        const getMovies = async () => {
            try {
                const response = await axios.get(url);
                // console.log(response.data); { pg #, [20 films]}
                console.log(response.data.results); // [20 films]
                // console.log(response.data.results[17].original_title); // where # = a number between 0-19: Format for getting title from a specific index in the array of results! can do some matching to array indices by genre ID maybe?
                // console.log(response.data.results[17].genre_ids); // where # = a number between 0-19: Format for getting genre IDs from a specific index in the array of results! can do some matching to array indices by genre ID maybe?
                setMovies(response.data.results);
            } catch (error) {
                console.error(error);
                setError(error);
            }
        };
        // LOAD API DATA
        getMovies();
    }, []); // RUNS ON PAGE LOAD
    // }

    // let movieList = [];
    // movieList = movies;
    if (!movies) {
        return <>"Loading Movies"</>;
    }
    // else {
    // movieList = movies;
    // const randomMovie = movieList[Math.floor(Math.random() * 20)];
    // setRandomMovie(movieList[Math.floor(Math.random() * 20)]);
    // }

    const randomMovie = movies[Math.floor(Math.random() * 20)];
    console.log(randomMovie);

    // if we have time, do if/else logic to check if genre id is on page, el se run a pi call a gain with new page and re-check


    return (
        <>
            <article className="movie">
                <h2 className="movie__title">{randomMovie.original_title}</h2>
                <img className="movie__poster" src={`https://image.tmdb.org/t/p/original/${randomMovie.poster_path}`} alt={`${randomMovie.original_title} Theatrical Poster`}></img>
                <p className="movie__synopsis">{randomMovie.overview}</p>
            </article >
        </>
    )
}

export default Recommendation
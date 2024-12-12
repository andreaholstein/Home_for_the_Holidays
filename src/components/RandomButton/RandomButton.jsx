// ---------- FXNALITY ----------
// import axios from "axios";
// import { useState, useEffect } from "react";
// --------- COMPONENTS ---------
// prolly none, unless we make a separate button component, but I think styling would cover that just fine!
// ----------- STYLES -----------
import "./RandomButton.scss";

// // // API CALL STATES
// const [movies, setMovies] = useState([]);
// const [error, setError] = useState(null);
// // API CALL ELEMENTS
// const apiKey = "3768b0548f5c7a2c64a0475cb2bf95bf";
// const page = Math.floor(Math.random() * 147);
// // console.log(page); // page var working!
// const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_keywords=207317&api_key=${apiKey}`

// // TO DO:
// // need more logic to check if Genre ID !on Page, search new page === first match gets returned (method() for first matches!)
// // 2 options:
// // LAZY: .find() accepts a function and returns the first element that matches a specific condition
// // SOPHISTICATED: .filter() accepts a function and returns elements within the array that pass a specific condition

// // Make GET, filter results by genre id, and then pass down as a prop to RecoPage (pass movie title, movie poster, movie blurb and render in each component!)

// useEffect(() => {
//     const getMovies = async () => {
//         try {
//             const response = await axios.get(url);
//             console.log(response.data);
//             console.log(response.data.results);
//             // console.log(response.data.results[#].original_title); // where # = a number between 0-19: Format for getting title from a specific index in the array of results! can do some matching to array indices by genre ID maybe?
//             // console.log(response.data.results[#].genre_ids); // where # = a number between 0-19: Format for getting genre IDs from a specific index in the array of results! can do some matching to array indices by genre ID maybe?
//             setMovies(response.data.results);
//         } catch (error) {
//             console.error(error);
//             setError(error);
//         }
//     };
//     // LOAD API DATA ONTO SCREEN 
//     getMovies();
// }, []); // RUNS ON PAGE LOAD

// let movieList = [];
// movieList = movies;

function RandomButton() {

    return (
        <>
            <button className="random-button button">Surprise Me!
                <Link to="/MovieToWatch" >
                    <RecoPage movie={movie} />
                </Link>
            </button>
        </>
    )
}

export default RandomButton
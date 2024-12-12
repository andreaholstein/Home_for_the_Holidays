// ---------- FXNALITY ----------
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// --------- COMPONENTS ---------
import Header from './components/Header/Header';
// import Footer from "../../components/Footer";
// ------------ PAGES ------------
import HomePage from './components/HomePage/HomePage'
import RecoPage from "./Pages/RecoPage/RecoPage.jsx";
import CategoryPage from './Pages/CategoryPage/CategoryPage.jsx';
// ----------- STYLES -----------
import './App.scss'




function App() {

  // // API CALL STATES
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  // const [randomMovie, setRandomMovie] = useState(null);

  // API CALL ELEMENTS
  const apiKey = "3768b0548f5c7a2c64a0475cb2bf95bf";
  const page = Math.floor(Math.random() * 147);
  // console.log(page); // page var working!
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_keywords=207317&api_key=${apiKey}`

  // TO DO:
  // Additional logic to check if Genre ID !on Page > search new page === first match gets returned
  // then pass down as a prop to RecoPage > Recommendation (pass movie title, movie poster, movie blurb and render in each component!)
  // 2 options:
  // SIMPLE: .find() accepts a function and returns the first element that matches a specific condition
  // SOPHISTICATED: .filter() accepts a function and returns elements within the array that pass a specific condition

  // useEffect(() => {
  const handleSubmit = () => {

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
    // }, []); // RUNS ON PAGE LOAD
  }

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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/ChooseCategory" element={<CategoryPage />} /> */}
          <Route path="/ChooseCategory" element={<CategoryPage handleSubmit={handleSubmit} />} />
          <Route path="/MovieToWatch" element={<RecoPage movie={randomMovie} />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>

  )
}

export default App

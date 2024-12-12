// ---------- FXNALITY ----------
import axios from "axios";
// ----------- STYLES -----------
import "./Recommendation.scss";

function Recommendation() {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const apiKey = "3768b0548f5c7a2c64a0475cb2bf95bf";
    const page = Math.floor(Math.random() * 147);
    console.log(page);

    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_keywords=207317&api_key=${apiKey}`
    // hmm... API seems to load only one page at a time... may affect Generator OR need more logic to check if Genre ID !on Page, search new page === first match gets returned

    useEffect(() => {
        const getMovie = async () => {
            try {
                const response = await axios.get(url);
                console.log(response.data);
                setMovies(response.data);
            } catch (error) {
                console.error(error);
                setError(error);
            }
        }
    })


    const movieList = [];
    movieList = movies;

    return (
        <>
            {movieList.map((movie) => {
                return (
                    <article className="movie">
                        <h2 className="movie__title">{movie.original_title}</h2>
                        <img className="movie__poster">{movie.poster_path}</img>
                        <p className="movie__synopsis">{movie.overview}</p>
                    </article>
                )
            })}
        </>
    )
}

export default Recommendation
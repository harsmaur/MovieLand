import "./App.css";
import SearchIcon from "./Search.svg";
import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
const API_URL = "http://www.omdbapi.com/?apikey=7fdd7b87&";

const App = () => {
    const [movie, setMovie] = useState([]);
    const [searchTerm, setsearchTerm] = useState("");

    const SeachMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovie(data.Search);
    };
    useEffect(() => {
        SeachMovies("Harry Potter");
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    type="text"
                    onChange={(e) => setsearchTerm(e.target.value)}
                    value={searchTerm}
                    placeholder="Search for movies"
                />
                <img
                    src={SearchIcon}
                    alt="SearchIcon"
                    onClick={() => SeachMovies(searchTerm)}
                />
            </div>

            {
    movie.length > 0 ? (
        <div className="container">
            {movie.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
            ))}
        </div>
    ) : (
        <div className="container">
            <h2>No Movies Found</h2>
        </div>
    )
}

        </div>
    );
};
export default App;

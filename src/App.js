import { useEffect, useState } from "react";
import axios from "axios";
import MoviesCard from "./components/MoviesList/MoviesCard";

function App() {
  const [movies, setMovies] = useState();
  const [input, setInput] = useState();
  const [search, setSearch] = useState();

  useEffect(() => {
    if (search) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=2a7bc3506d9e237e752a6e713962fea0&query=${search}`
        )
        .then((resp) => setMovies(resp.data.results));
    }
  }, [search]);

  return (
    <div className="App">
      <h1>AlloMovies</h1>
      <div className="search">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearch(input);
          }}
        >
          <input
            className="inp-search"
            type="text"
            placeholder="Entrez un film"
            defaultValue=""
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit">Rechercher</button>
        </form>
      </div>

      <div className="result">
        {movies &&
          movies.map((movie, index) => (
            <MoviesCard key={index} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default App;

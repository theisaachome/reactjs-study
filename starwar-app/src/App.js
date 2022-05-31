import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const fetchMovieHandler = async () => {
    const response = await fetch("https://swapi.dev/api/films", {})
    const data = response.json();
    const transformedMovies = data.results.map((movie) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date,
      }
    })
    setMovies(transformedMovies);
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      {movies.length !== 0 && <section>
        <MoviesList movies={movies} />
      </section>}
    </React.Fragment>
  );
}

export default App;

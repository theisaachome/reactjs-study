import React, { useState,useEffect,useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("https://swapi.dev/api/films");
      if(!response.ok){
        throw  new Error("Something went wrong.");
      }

      const data = await response.json();
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
    catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  },[]);
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler])
  
  let contents = <p>Found no movies.</p>;
  if(movies.length > 0){
    contents=<MoviesList movies={movies} />;
  }
  if(error){
    contents = <p>{error}</p>
  }
  if(isLoading){
    contents = <p>Loading....</p>
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {contents}
      </section>
    </React.Fragment>
  );
}

export default App;

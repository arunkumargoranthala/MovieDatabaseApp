/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const getPopularMoviesURL =
  'https://api.themoviedb.org/3/movie/popular?api_key=aef96b9e5d7d8848e051689cf0b15ac8&language=en-US&page=1';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(getPopularMoviesURL);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="popular-movies">
      <h1>Popular</h1>
      <h1>movieDB</h1>
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.vote_average}</p>
          <Link to={`/movie/${movie.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PopularMovies;

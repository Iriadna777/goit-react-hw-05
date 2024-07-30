// import { useEffect, useState } from 'react';
// import { getTrendingMovies } from '../../api/tmdb';
// import MovieList from '../../components/MovieList/MovieList';
// import styles from './HomePage.module.css';

// const HomePage = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     getTrendingMovies().then(setMovies);
//   }, []);

//   return (
//     <div className={styles.container}>
//       <h1>Trending Movies</h1>
//       <MovieList movies={movies} />
//     </div>
//   );
// };

// export default HomePage;

// src/pages/HomePage/HomePage.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=6c89d25e3e4c16c61bb51a4cd8858854');
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending today</h1>
      <ul className={styles.movieList}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.movieItem}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className={styles.movieImage}
            />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;


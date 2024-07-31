// src/pages/MoviesPage/MoviesPage.jsx

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../api/tmdb';
import styles from './MoviesPage.module.css';
import MovieList from '../../components/MovieList/MovieList';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) return;

      try {
        const results = await searchMovies(query);
        setMovies(results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, [query]);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = event.target.elements.search.value.trim();
    if (searchQuery === '') return;

    setSearchParams({ query: searchQuery });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch} className={styles.form}>
        <input type="text" name="search" className={styles.input} defaultValue={query} />
        <button type="submit" className={styles.button}>Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;

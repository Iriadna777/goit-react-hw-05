import React, { useEffect, useState } from 'react';
import { useParams, Link, Routes, Route, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../api/tmdb';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return null;

  return (
    <div className={styles.container}>
      <GoBackButton />
      <div className={styles.movieDetails}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <div className={styles.info}>
          <h1>{movie.title} ({movie.release_date.split('-')[0]})</h1>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <h4>Additional information</h4>
        <ul className={styles.list}>
          <li>
            <Link to="cast" state={{ from: location.state?.from }}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from }}>Reviews</Link>
          </li>
        </ul>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </div>
    </div>
  );
};

export default MovieDetailsPage;

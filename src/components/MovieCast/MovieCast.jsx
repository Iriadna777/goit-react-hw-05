import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../api/tmdb';
import styles from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <div className={styles.cast}>
      {cast.map(actor => (
        <div key={actor.cast_id} className={styles.actor}>
          <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
          <p>{actor.name} as {actor.character}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCast;

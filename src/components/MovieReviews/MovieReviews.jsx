import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../api/tmdb';
import styles from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (reviews.length === 0) {
    return <p className={styles.noReviews}>We don't have any reviews for this movie.</p>;
  }

  return (
    <div className={styles.reviews}>
      {reviews.map(review => (
        <div key={review.id} className={styles.review}>
          <h4 className={styles.author}>Author: {review.author}</h4>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieReviews;

   import { useEffect, useState } from 'react';
   import { useParams } from 'react-router-dom';
   import { getMovieReviews } from '../../api/tmdb';
   import styles from './MovieReviews.module.css';

   const MovieReviews = () => {
     const { movieId } = useParams();
     const [reviews, setReviews] = useState([]);

     useEffect(() => {
       if (!movieId) return;
       getMovieReviews(movieId).then(setReviews);
     }, [movieId]);

     return (
       <div className={styles.container}>
         <h2>Reviews</h2>
         <ul>
           {reviews.map(review => (
             <li key={review.id}>
               <h3>{review.author}</h3>
               <p>{review.content}</p>
             </li>
           ))}
         </ul>
       </div>
     );
   };

   export default MovieReviews;

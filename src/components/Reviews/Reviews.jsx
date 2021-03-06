import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as api from '../../services/api';
import Loader from 'components/Loader';

export default function Reviews() {
  const [reviews, setReviows] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.fetchMovieReviews(movieId).then(setReviows);
  }, [ movieId]);
  
  const reviewsData = reviews.results;
  const totalPages = reviews.total_pages;
  const condition = totalPages > 0 && reviewsData

  return (
    <>
    {!reviews && <div><Loader/></div>}
    <section>
      {condition ? (
        <ul>
          {reviewsData.map(({ author, content }) => {
            return (
              <li key={author}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </section>
    </>
  );
}
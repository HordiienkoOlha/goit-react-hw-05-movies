import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as api from '../../services/api';

export default function Reviews() {
  const [reviews, setReviows] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (reviews === null) {
      return
    }
    api.fetchMovieReviews(movieId).then(setReviows);

  }, [reviews, movieId]);
  const reviewsData = reviews.results;

    return (
        <section>
            <h2>Review</h2>
            <ul>
            {reviewsData ? (reviewsData.map(({author, content})=> {
              return(
                <li key={author}>
                  <h3>{author}</h3>
                  <p>{content}</p>
                  </li>
              )
            })) : (<p>We don't any reviews for this movie</p>)}
                    
            </ul>

        </section>
    )
};


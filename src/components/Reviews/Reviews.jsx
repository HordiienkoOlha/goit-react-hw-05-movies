import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as api from '../../services/api';

export default function Reviews() {
    const [reviews, setReviows] = useState([]);
    const { movieId } = useParams;

      useEffect(() => {
    // if (reviews === null) {
    //   return setReviows([]);
    // }
    api.fetchMovieReviews(movieId).then(setReviows);
      }, [reviews, movieId]);

    return (
        <section>
            <h2>Review</h2>
            <p>We don't any reviews for this movie</p>

        </section>
    )
};


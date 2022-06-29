import { useState, useEffect } from 'react';
import { Link, useParams  } from 'react-router-dom';
import * as api from '../../services/api';

import Cast from '../Cast';
import Rewievs from '../Reviews/Reviews'
import { IMG_URL, ANOTHER_IMG } from 'constants/constants';
import styles from './MovieDetails.module.css';
import Loader from 'components/Loader';

export default function MovieDetails() {
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [loading, setLoading] = useState(false)
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true)
    if (moviesDetails === null) {
      return setMoviesDetails([]);
    }
    api.fetchMovieDetails(movieId).then(setMoviesDetails).finally(setLoading(false))
  }, [moviesDetails, movieId]);

  const {
    poster_path,
    original_title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = moviesDetails;
  const poster = IMG_URL + poster_path;

  const releaseTranform = () => {
        if (release_date === null) {
      return;
    }
    const releaseDate = String(release_date).slice(0, 4);
    const releaseYear = '(' + releaseDate + ')';
    return releaseYear;
  };
  const voteAverageTransform = ()=> {
    if (vote_average === null) {
      return;
    }
    const voteAverage = parseInt(vote_average*10)
    const votePercentage = String(voteAverage) + '%'
    return votePercentage;
  }

  return (
    <>
      <section className={styles.section}>
        {loading && <Loader/>}
        <div>
          {poster_path ? (
            <img src={poster} alt="Poster"width={200} />
          ) : (
            <img src={ANOTHER_IMG} alt="Poster" />
          )}
        </div>
        <ul>
          <li>
            <h3>
              {original_title} {name} {releaseTranform()}
            </h3>
            <p>{voteAverageTransform()}</p>
          </li>
          <li>
            <h3>Overviews</h3>
            <p>{overview}</p>
          </li>
          <li>
            <h3>Genres</h3>
            {genres && (
              <ul className={styles.listGenres}>
                {genres.map(({ id, name }) => {
                  return (
                    <li className={styles.itemGenres} key={id}>
                      {name}
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        </ul>
      </section>
      <section>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast}`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Rewievs</Link>
          </li>
        </ul>
        <Cast />
        <Rewievs/>
      </section>
    </>
  );
}


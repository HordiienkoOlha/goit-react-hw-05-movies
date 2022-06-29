import { useState, useEffect } from 'react';
import { NavLink, useParams  } from 'react-router-dom';
import * as api from '../../services/api';

import Cast from '../Cast';
import styles from './MovieDetails.module.css';

export default function MovieDetails() {
  const [moviesDetails, setMoviesDetails] = useState([]);
  const { movieId } = useParams();

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const ANOTHER_IMG =
    'https://michaelnakache.com/wp-content/uploads/2018/08/movie-poster-coming-soon-2.png';

  useEffect(() => {
    if (moviesDetails === null) {
      return setMoviesDetails([]);
    }
    api.fetchMovieDetails(movieId).then(setMoviesDetails);
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
            <NavLink to={`/movies/${movieId}/cast}`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${movieId}eviews`}>Rewievs</NavLink>
          </li>
        </ul>
        <Cast />
      </section>
    </>
  );
}


import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams, Link,  } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi"
import * as api from '../../services/api';

import { IMG_URL, ANOTHER_IMG } from 'constants/constants';
import styles from './MovieDetails.module.css';
import Loader from 'components/Loader';

export default function MovieDetails() {
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [loading, setLoading] = useState(false)
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true)
    api.fetchMovieDetails(movieId).then(setMoviesDetails).finally(setLoading(false))
  }, [ movieId]);

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
    <Link to="/"><BiArrowBack/>Go back</Link>
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
            <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </section>
    </>
  );
}


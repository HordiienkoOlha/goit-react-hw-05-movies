import { useState, useEffect } from 'react';
import {
  NavLink,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import * as api from '../../services/api';

import { IMG_URL, ANOTHER_IMG } from 'constants/constants';
import Loader from 'components/Loader';
import Container from 'components/Container';
import styles from './MovieDetails.module.css';

export default function MovieDetails() {
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    api
      .fetchMovieDetails(movieId)
      .then(setMoviesDetails)
      .finally(setLoading(false));
  }, [movieId]);

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
  const voteAverageTransform = () => {
    if (vote_average === null) {
      return;
    }
    const voteAverage = parseInt(vote_average * 10);
    const votePercentage = String(voteAverage) + '%';
    return votePercentage;
  };
  return (
    <Container>
      <div>
        <button
          className={styles.button}
          onClick={() => navigate(location?.state?.from ?? '/')}
        >
          <BiArrowBack />
          Go back
        </button>
      </div>
      <section className={styles.section}>
        {loading && <Loader />}
        <div className={styles.poster}>
          {poster_path ? (
            <img src={poster} alt="Poster" width={700} />
          ) : (
            <img src={ANOTHER_IMG} alt="Poster" />
          )}
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h2 className={styles.filmTitle}>
              {original_title} {name} {releaseTranform()}
            </h2>
            <p>Vote average: {voteAverageTransform()}</p>
          </li>
          <li className={styles.item}>
            <h3 className={styles.title}>Overviews</h3>
            <p>{overview}</p>
          </li>
          <li className={styles.item}>
            <h3 className={styles.title}>Genres</h3>
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
        <h3 className={styles.title}>Additional information</h3>
        <ul className={styles.listAdditionInfo}>
          <li className={styles.title}>
            <NavLink
              state={location.state}
              to={`/movies/${movieId}/cast`}
              className={({ isActive }) =>
                isActive ? styles['active-link'] : styles.link
              }
            >
              Cast
            </NavLink>
          </li>
          <li className={styles.title}>
            <NavLink
              state={location.state}
              to={`/movies/${movieId}/reviews`}
              className={({ isActive }) =>
                isActive ? styles['active-link'] : styles.link
              }
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </section>
    </Container>
  );
}

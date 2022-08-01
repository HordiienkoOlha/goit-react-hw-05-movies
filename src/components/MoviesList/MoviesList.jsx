import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as api from '../../services/api';
import Loader from 'components/Loader';
import { IMG_URL } from 'constants/constants';
import styles from './MoviesList.module.css';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    api.fetchTrendingMovies().then(setMovies);
  }, []);

  const moviesData = movies.results;
  
  return (
    <div className={styles.section}>

      <h2 className={styles.title} >Trending today</h2>
      {!moviesData && <div><Loader/></div>}
      {moviesData && (
        <ul className={styles.list}>
          {moviesData.map(({ id, original_title, name, backdrop_path }) => {
            const poster = IMG_URL + backdrop_path;
            return (
              <li key={id} className={styles.item}>
                <Link  to={`/movies/${id}`}>
                  <img src={poster} alt={original_title} />
                  <p className={styles.text}>{original_title} {name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}

    </div>
  );
};

export default MoviesList;

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

import Loader from 'components/Loader';

export default function HomeView() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    api.fetchTrendingMovies().then(setMovies);
  }, []);

  const moviesData = movies.results;
  return (
    <>
      <h2>Trending today</h2>
      {!moviesData && <div><Loader/></div>}
      {moviesData && (
        <ul>
          {moviesData.map(({ id, original_title, name }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`}>
                  <p>{original_title} {name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

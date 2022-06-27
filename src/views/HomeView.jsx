import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as api from '../services/api';

export default function HomeView() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    api.fetchTrendingMovies().then(setMovies);
    // console.log(movies.results);
  }, []);
  const moviesData = movies.results;
  return (
    <>
      <h2>Trending today</h2>
      {moviesData && (
        <ul>
          {moviesData.map(({ id, original_title, name }) => {
            return (
              <li key={id}>
                <NavLink to={`/movies/${id}`}>
                  <p>{original_title} {name}</p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
// <p>
//   {original_title} {name}
// </p>

/* <img {!poster_path ? (src = { poster }) : (src = { ANOTHER_IMG }}) alt="Poster" /> */
  // const ANOTHER_IMG =  'https://michaelnakache.com/wp-content/uploads/2018/08/movie-poster-coming-soon-2.png'
  
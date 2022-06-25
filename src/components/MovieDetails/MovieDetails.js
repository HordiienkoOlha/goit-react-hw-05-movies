import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import * as api from '../../services/api';

import styles from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.fetchMovieDetails(453395).then(setMovies);
  }, []);

  const {
    poster_path,
    original_title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = movies;
  return (
    <>
      <section>
        <img
          src={poster_path}
          //   src={`https://api.themoviedb.org/3/movie/453395/images?api_key=${API_KEY}/${poster_path}`}
          alt="poster"
        ></img>
        <ul>
          <li>
            <h3>
              {original_title} {name} {release_date}
            </h3>
            <p>{vote_average}</p>
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
            <NavLink to={`/movies/:{movieId}/cast}`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`/movies//movies/:{movieId}/reviews`}>Rewievs</NavLink>
          </li>
        </ul>
      </section>
    </>
  );
}
// export default function HomeView() {
//   const [movies, setMovies] = useState([]);
//   useEffect(() => {
//     api.fetchTrendingMovies().then(setMovies);
//     // console.log(movies.results);
//   }, []);
//   const moviesData = movies.results;
//   return (
//     <>
//       <h2>Trending today</h2>
//       {moviesData && (
//         <ul>
//           {moviesData.map(({ id, original_title, name }) => {
//             return (
//               <li key={id}>
//                 <NavLink to={`/movies/${moviesData.id}`}>
//                   {original_title} {name}
//                 </NavLink>
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </>
//   );
// }

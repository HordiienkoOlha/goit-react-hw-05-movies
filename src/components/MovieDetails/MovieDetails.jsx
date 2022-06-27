import { useState, useEffect } from 'react';
import { NavLink, useParams  } from 'react-router-dom';
import * as api from '../../services/api';

import styles from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const ANOTHER_IMG =  'https://michaelnakache.com/wp-content/uploads/2018/08/movie-poster-coming-soon-2.png'

  useEffect(() => {
    api.fetchMovieDetails(movieId).then(setMovies);
  }, [movieId]);

  const {
    poster_path,
    original_title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = movies;
  const poster = IMG_URL + poster_path
  return (
    <>
      <section>
        <div>
          {/* <img { ? (src = { poster }) : (src = { ANOTHER_IMG }}) alt="Poster" />  */}
          {poster_path ? (<img src={poster} alt="Poster"/> ):(<img src = { ANOTHER_IMG } alt="Poster"/>)}

          {/* <img src={poster} alt="Poster"/> */}
        </div>
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

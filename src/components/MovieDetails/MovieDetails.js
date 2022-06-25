import { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import * as api from '../../services/api';

export default function MovieDetails() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.fetchMovieDetails(453395).then(setMovies);
  }, []);
  return (
    <>
      <img src={movies.poster_path} alt="poster"></img>
      <ul>
        <li>
          <h3>
            {movies.original_title} {movies.name} {movies.release_date}
          </h3>
          <p>{movies.vote_average}</p>
        </li>
        <li>
          <h3>Overviews</h3>
          <p>{movies.overview}</p>
        </li>
        {/* <li>
          <h3>Genres</h3>
          {movies.genres.map(({ id, name }) => {
            <p key={id}>{name}</p>;
          })}
        </li> */}
      </ul>
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

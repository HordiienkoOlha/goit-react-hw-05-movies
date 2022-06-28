import { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { useParams  } from 'react-router-dom';
import * as api from '../../services/api';

import styles from './Cast.module.css';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export default function Cast() {
    const { movieId } = useParams();
  const [moviesCast, setMoviesCast] = useState([]);
//   const { movieId } = useParams();
  useEffect(() => {
    api.fetchMovieCredits(movieId).then(setMoviesCast);

  }, [movieId]);
  const cast = moviesCast.cast;

  return (
    <>
      <h2>Trending today</h2>
        {/* <p>{castData.cast_id}</p> */}
        {cast && (
              <ul className={styles.list}>
                {cast.map(({ id, name, character, profile_path }) => {
                    const poster = IMG_URL + profile_path;
                  return (
                    <li className={styles.item} key={id}>
                        <img src={poster} alt="Poster"width={80} />
                        <h3>{name}</h3>
                        <p>{character}</p>
                      
                    </li>
                  );
                })}
              </ul>
            )}


    </>
  )}


//     <ul>
//       {moviesData.map(({ id  }) => {
//         return (
//           <li key={id}>
//             {/* <NavLink to={`/movies/${id}`}>
//               <p>{original_title} {name}</p>
//             </NavLink> */}
//             <p>id </p>
            
//           </li>
//         );
//       })}
//     </ul>
//   )}
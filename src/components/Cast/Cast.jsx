import { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { useParams  } from 'react-router-dom';
import * as api from '../../services/api';

import styles from './Cast.module.css';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const ANOTHER_AVATAR = 'https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png'

export default function Cast() {
    const { movieId } = useParams();
  const [moviesCast, setMoviesCast] = useState([]);
//   const { movieId } = useParams();
  useEffect(() => {
    if (moviesCast === null) {
      return setMoviesCast([]);
    }
    api.fetchMovieCredits(movieId).then(setMoviesCast);

  }, [moviesCast, movieId]);
  const cast = moviesCast.cast;

  return (
    <>
      <h2>Trending today</h2>
        {cast && (
              <ul className={styles.list}>
                {cast.map(({ cast_id, name, character, profile_path }) => {
                    const poster = IMG_URL + profile_path;
                  return (
                    <li className={styles.item} key={cast_id}>
                        {profile_path ? (<img src={poster} alt="avatar"width={80} />) : (<img src={ANOTHER_AVATAR} alt="avatar"width={80} />)}
                        <h3>{name}</h3>
                        <p>Character: {character}</p>
                      
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
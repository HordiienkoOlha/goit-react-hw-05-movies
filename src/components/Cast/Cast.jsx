import { useState, useEffect } from 'react';
import { useParams  } from 'react-router-dom';

import * as api from '../../services/api';
import { IMG_URL, ANOTHER_AVATAR } from 'constants/constants';
import Loader from 'components/Loader';
import styles from './Cast.module.css';


export default function Cast() {

  const [moviesCast, setMoviesCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.fetchMovieCredits(movieId).then(setMoviesCast);
  }, [ movieId]);
  
  const cast = moviesCast.cast;

  return (
    <>
      {!cast && <div><Loader/></div>}
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
import { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import * as api from '../../services/api';

import Loader from 'components/Loader';
export default function MovieSearchList() {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
      api.fetchSearchMovies().then(setMovies);
    }, []);
    const moviesData = movies.results;
    return(
        <>

        {!moviesData && <div><Loader/></div>}
        {moviesData && (
          <ul>
            {moviesData.map(({ id, original_title, name}) => {
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
    )
}
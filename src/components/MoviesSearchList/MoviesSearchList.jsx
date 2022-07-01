import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import * as api from '../../services/api';

import Loader from 'components/Loader';

export default function MovieSearchList(query) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
      api.fetchSearchMovies(query).then(setMovies);
    }, [query]);
    const moviesData = movies.results;
    return(
        <>

        {!moviesData && <div><Loader/></div>}
        {moviesData && (
          <ul>
            {moviesData.map(({ id, original_title, name}) => {
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
    )
}
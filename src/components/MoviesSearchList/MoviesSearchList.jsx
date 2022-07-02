import { useState, useEffect } from 'react';


import { Link, useSearchParams } from 'react-router-dom';
import * as api from '../../services/api';

import Loader from 'components/Loader';

export default function MovieSearchList() {
  const [searchParams, setSearchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);

    const queryInput = searchParams.get("query")

    console.log(setSearchParams);

    useEffect(() => {
      api.fetchSearchMovies(queryInput).then(setMovies);
    }, [queryInput]);
    const moviesData = movies.results;
    return(
        <>

        {!moviesData && <div><Loader/></div>}
        {/* <h2>Movies</h2> */}
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
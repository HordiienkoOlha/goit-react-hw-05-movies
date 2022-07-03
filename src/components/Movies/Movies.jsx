import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

import * as api from '../../services/api';
import styles from './Movies.module.css';

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    const handleSubmit = event => {
        event.preventDefault();
        setSearchParams({query: event.currentTarget.elements.query.value})
        
    }
    const query = searchParams.get("query")
    useEffect(()=> {
        if(query){
            api.fetchSearchMovies(query).then(setMovies);
        }
    }, [query])
    const moviesData = movies.results;

    return (
    <>
        <section className={styles.searchbar}>
            
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
            type="text"
            name="query"
            className={styles.input}
            />
            <button type="submit" aria-label="Search" className={styles.button}>
            <span className={styles.buttonLabel}>
                <BsSearch />
            </span>
            </button>
        </form>
        </section>
        <section>
        {moviesData && (
            <ul>
            {moviesData.map(({ id, original_title, name}) => {
                return (
                <li key={id}>
                    <Link  state={{ from: location.pathname + location.search }} to={`/movies/${id}`}>
                    <p>{original_title} {name}</p>
                    </Link>
                </li>
                );
            })}
            </ul>
        )}

        </section>
    </>
    );
}

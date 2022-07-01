// import { useState} from 'react';
import { useSearchParams } from "react-router-dom";
// import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';

// import * as api from '../../services/api';
// import Loader from 'components/Loader';
import MoviesSearchList from "components/MoviesSearchList/MoviesSearchList";
import styles from './SearchMoviesBar.module.css';


export default function SearchMoviesBar() {
    let [searchParams, setSearchParams] = useSearchParams();
    const queryInput = searchParams.get("query")
    const onSearchHandle=(event) => {
        const query = event.target.value;
        if (query) {
            setSearchParams({ query });
        } else {
            setSearchParams({});
        }
        }
        console.log(queryInput)

    return (
    <>
        <section className={styles.searchbar}>
        <form className={styles.form} >
        <input
            className={styles.input}
            value={queryInput || ""}
            onChange={onSearchHandle}
        />
            <button type="submit" aria-label="Search" className={styles.button}>
            <span className={styles.buttonLabel}>
                <BsSearch />
            </span>
            </button>
        </form>
        </section>
        <section>
        <MoviesSearchList query={queryInput}/>
            {/* {query && <MoviesSearchList/> */}

            {/* } */}
        </section>
    </>
    );
}

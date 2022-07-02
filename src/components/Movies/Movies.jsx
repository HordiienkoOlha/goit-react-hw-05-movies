// import { useState} from 'react';
import { useSearchParams } from "react-router-dom";
// import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';

// import * as api from '../../services/api';
// import Loader from 'components/Loader';
import MoviesSearchList from "components/MoviesSearchList/MoviesSearchList";
import styles from './Movies.module.css';


export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryInput = searchParams.get("query")
  const onSearchHandle=(event) => {
      const query = event.target.value;
      if (query) {
          setSearchParams({ query });
      } else {
          setSearchParams({});
      }
      }
      const onSearch=()=>{

      }

  return (
  <>
      <section className={styles.searchbar}>
      {/* <form className={styles.form} onSubmit={onSearchHandle}> */}
      <form className={styles.form} onSubmit={onSearch}>
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
        {queryInput && <MoviesSearchList/>}
          {/* {query && <MoviesSearchList/> */}

          {/* } */}
      </section>
  </>
  );
}

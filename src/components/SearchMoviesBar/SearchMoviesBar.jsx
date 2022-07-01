// import { useState} from 'react';
import { useSearchParams } from "react-router-dom";
// import { toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';

// import * as api from '../../services/api';
// import Loader from 'components/Loader';
import styles from './SearchMoviesBar.module.css';


export default function SearchMoviesBar() {
    // const [queryInput, setQueryInput] = useState('');
    let [searchParams, setSearchParams] = useSearchParams();

    // const handleNameChange = event => {
    //   setQueryInput(event.currentTarget.value.toLowerCase());
      
    // };
  
    // const onChange = event => {
    //   event.preventDefault();
  
    //   if (queryInput.trim() === '') {
    //     toast('Please enter search query!', {
    //       position: 'top-right',
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });

  
    //   onSubmit(queryInput);
    //   setQueryInput('');
    // };
  return (
    <>
      <section className={styles.searchbar}>
        <div className={styles.form}>
        {/* <form className={styles.form} onSubmit={onChange}> */}
        <input
         className={styles.input}
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
          <button type="submit" aria-label="Search" className={styles.button}>
            <span className={styles.buttonLabel}>
              <BsSearch />
            </span>
          </button>
        {/* </form> */}
        </div>
      </section>
    </>
  );
}

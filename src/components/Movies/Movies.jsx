// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';

import { BsSearch } from 'react-icons/bs';
// import { toast } from 'react-toastify';

// import * as api from '../../services/api';
import styles from './Movies.module.css';

export default function Movies() {
//   const [queryInput, setQueryInput] = useState('');

//   const handleNameChange = event => {
//     setQueryInput(event.currentTarget.value.toLowerCase());
//   };

//   const onChange = event => {
//     event.preventDefault();

//     if (queryInput.trim() === '') {
//       toast('Please enter search query!', {
//         position: 'top-right',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
    //   return;
    // }

    // onSubmit(queryInput);
    // setQueryInput('');
//   };
  //     useEffect(() => {
//         // if (moviesDetails === null) {
//         //   return setMoviesDetails([]);
//         // }
//         // api.fetchMovieDetails(movieId).then(setMoviesDetails);
//       }, []);
const onChange=(event)=> {
    console.log(event.currentTarget.value)
}

  return (
    <header className={styles.searchbar}>
      <form className={styles.form} onSubmit={onChange}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search movies"
          autoComplete="off"
          autoFocus
        //   value={queryInput}
        //   onChange={handleNameChange}
        />
        <button type="submit" aria-label="Search" className={styles.button}>
          <span className={styles.buttonLabel}>
            <BsSearch />
          </span>
        </button>
      </form>
    </header>
  );
}

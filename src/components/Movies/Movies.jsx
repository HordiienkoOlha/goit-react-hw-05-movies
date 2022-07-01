// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';


import MoviesSearchList from 'components/MoviesSearchList';
import SearchMoviesBar from 'components/SearchMoviesBar';
// import { NavLink } from 'react-router-dom';
// import { toast } from 'react-toastify';

// import * as api from '../../services/api';
// import styles from './Movies.module.css';


export default function Movies() {


  return (
    <>
      <SearchMoviesBar/>
      <MoviesSearchList/>
    </>
    
  );
}

import { Route, Routes} from 'react-router-dom';
// import { useState} from 'react';

import Container from './Container';
import AppBar from './AppBar';
import HomeView from 'views/HomeView';
import MovieDetails from './MovieDetails';
import Movies from './Movies';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  // const [queryInput, setQueryInput] = useState('');
  // const [movies, setMovies] = useState([]);
  // const onSearch = queryInput => {
  //   setQueryInput(queryInput);
  //   setMovies([]);
  // };
  return (
    <Container>
      <AppBar />
      {/* <Cast /> */}
      {/* <HomeView /> */}
      {/* <MovieDetails /> */}
      <Routes>
        <Route path="/" element={<App />}/>
          <Route index  element={<HomeView />} />
          <Route path="movies" exact element={<Movies/>} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
              
          <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        <Route index  element={<p>There's nothing here!</p>} />
      </Routes>
    </Container>
  );
};

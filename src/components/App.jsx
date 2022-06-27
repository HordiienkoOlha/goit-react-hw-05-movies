import { Route, Routes} from 'react-router-dom';
// import { useState} from 'react';

import Container from './Container';
import AppBar from './AppBar';
import HomeView from 'views/HomeView';
import MovieDetails from './MovieDetails';
import Movies from './Movies';

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
      {/* <HomeView /> */}
      {/* <MovieDetails /> */}
      <Routes>
        <Route path="/" exact element={<HomeView />} />
        <Route path="/movies" exact element={<Movies/>} />
        {/* <Route path="/movies/453395" element={<MovieDetails />} /> */}
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        {/* <Route path="/movies/:movieId/cast" element={<Cast />} /> */}
        {/* <Route path="/movies/:movieId/reviews" element={<Reviews />} />{' '} */}
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Routes>
    </Container>
  );
};

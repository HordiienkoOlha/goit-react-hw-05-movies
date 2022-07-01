import { Route, Routes } from 'react-router-dom';
// import { useState} from 'react';

// import Container from './Container';
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
    // <Container>
      <Routes>
        <Route path="/" element={<AppBar />} >
          <Route index element={<HomeView />} />
          <Route path="movies" exact element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<p>There's nothing here!</p>} />
        </Route>
      </Routes>
    // </Container>
  );
};

// import { Route, Routes } from 'react-router-dom';

import Container from './Container';
import AppBar from './AppBar';
import HomeView from 'views/HomeView';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <HomeView />
      {/* <Routes> */}
      {/* <Route path="/" exact element={<HomeView />} /> */}
      {/* <Route path="/movies" element={<Movies />} /> */}
      {/* <Route path="/movies/:{movieId}" element={<MovieDetails />} /> */}
      {/* <Route path="/movies/:{movieId}/cast" element={<Cast />} /> */}
      {/* <Route path="/movies/:{movieId}/reviews" element={<Reviews />} />{' '} */}
      {/* </Routes> */}
    </Container>
  );
};

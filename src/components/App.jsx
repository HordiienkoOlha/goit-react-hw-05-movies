import { Route, Routes } from 'react-router-dom';
import {lazy} from 'react';


const AppBar = lazy(() => import('./AppBar/AppBar'));
const HomeView = lazy(() => import('../views/HomeView'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Movies = lazy(() => import('./Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
// import AppBar from './AppBar';
// import HomeView from 'views/HomeView';
// import MovieDetails from './MovieDetails';
// import Movies from './Movies';
// import Cast from './Cast';
// import Reviews from './Reviews';


export const App = () => {
  return (
    // <Suspense fallback={<Loader/>}>
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
    // </Suspense>
  );
};

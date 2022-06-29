import axios from 'axios';

import {BASE_URL, API_KEY} from 'constants/constants'

axios.defaults.baseURL = BASE_URL;

export async function fetchTrendingMovies() {
  const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
}

export async function fetchSearchMovies(movie) {
  const response = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${movie}&page=1`);
  return response.data;
}

export async function fetchMovieDetails(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  return response.data;
}

export async function fetchMovieCredits(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
  return response.data;
}

export async function fetchMovieReviews(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`);
  return response.data;
}


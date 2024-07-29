import axios from 'axios';

const API_KEY = '6c89d25e3e4c16c61bb51a4cd8858854';
const BASE_URL = 'https://api.themoviedb.org/3';
const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Yzg5ZDI1ZTNlNGMxNmM2MWJiNTFhNGNkODg1ODg1NCIsIm5iZiI6MTcyMjI4MzQ2OS45MTIxMTIsInN1YiI6IjY2YTdlZTA3YzBmZTY3MDUxMThkYzYxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.js7GKC6L33M9KTTiQwsYTeDoboEukXn5QLWM7v9S944';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: TOKEN,
  },
});

export const getTrendingMovies = async () => {
  const response = await instance.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await instance.get(`/search/movie?query=${query}&api_key=${API_KEY}`);
  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await instance.get(`/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const getMovieCredits = async (id) => {
  const response = await instance.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return response.data.cast;
};

export const getMovieReviews = async (id) => {
  const response = await instance.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data.results;
};

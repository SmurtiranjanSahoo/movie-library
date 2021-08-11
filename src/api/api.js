import axios from "axios";

export const base_url = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const movie_url = (id) =>
  axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export const movie_cast_url = (id) =>
  axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export const tvshow_url = (id) =>
  axios.create({
    baseURL: `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export const tvshow_cast_url = (id) =>
  axios.create({
    baseURL: `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`,
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export const search_url = (query) =>
  axios.create({
    baseURL: `https://api.themoviedb.org/3/search/multi?query=${query}`,
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

import {
  FETCH_MOVIE_BEGIN,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
  FETCH_MOVIE_CAST_BEGIN,
  FETCH_MOVIE_CAST_SUCCESS,
  FETCH_MOVIE_CAST_FAILURE,
} from "./action-types";
import { movie_url, movie_cast_url } from "../api/api";
import { GET_MOVIE_URL, GET_MOVIE_CAST_URL } from "../config/config";

export const fetchMovie = (id) => {
  return (dispatch) => {
    dispatch(fetchMovieBegin());
    movie_url(id)
      .get()
      .then((response) => {
        // console.log(response.data);
        const movie = response.data;
        dispatch(fetchMovieSuccess(movie));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchMovieFailure(errMsg));
      });
  };
};

export const fetchMovieBegin = () => ({
  type: FETCH_MOVIE_BEGIN,
});

export const fetchMovieSuccess = (movie) => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: movie,
});

export const fetchMovieFailure = (error) => ({
  type: FETCH_MOVIE_FAILURE,
  payload: error,
});

export const fetchMovieCast = (id) => {
  return (dispatch) => {
    dispatch(fetchMovieCastBegin());
    movie_cast_url(id)
      .get()
      .then((response) => {
        // console.log(response.data?.cast);
        const cast = response.data?.cast;
        dispatch(fetchMovieCastSuccess(cast));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchMovieCastFailure(errMsg));
      });
  };
};

export const fetchMovieCastBegin = () => ({
  type: FETCH_MOVIE_CAST_BEGIN,
});

export const fetchMovieCastSuccess = (cast) => ({
  type: FETCH_MOVIE_CAST_SUCCESS,
  payload: cast,
});

export const fetchMovieCastFailure = (error) => ({
  type: FETCH_MOVIE_CAST_FAILURE,
  payload: error,
});

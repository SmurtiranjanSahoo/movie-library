import {
  FETCH_MOVIE_BEGIN,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
  FETCH_MOVIE_CAST_BEGIN,
  FETCH_MOVIE_CAST_SUCCESS,
  FETCH_MOVIE_CAST_FAILURE,
  FETCH_RECOMMENDATION_BEGIN,
  FETCH_RECOMMENDATION_SUCCESS,
  FETCH_RECOMMENDATION_FAILURE,
} from "./action-types";
import { base_url } from "../api/api";

export const fetchMovie = (id) => {
  return (dispatch) => {
    dispatch(fetchMovieBegin());
    base_url(`movie/${id}?language=en-US`)
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
    base_url(`movie/${id}/credits?language=en-US`)
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

export const fetchRecommendation = (id, type) => {
  return (dispatch) => {
    dispatch(fetchRecommendationBegin());
    base_url(`${type}/${id}/similar?language=en-US`)
      .then((response) => {
        const movies = response.data?.results;
        // console.log(movies);
        dispatch(fetchRecommendationSuccess(movies));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchRecommendationFailure(errMsg));
      });
  };
};

export const fetchRecommendationBegin = () => ({
  type: FETCH_RECOMMENDATION_BEGIN,
});

export const fetchRecommendationSuccess = (movies) => ({
  type: FETCH_RECOMMENDATION_SUCCESS,
  payload: movies,
});

export const fetchRecommendationFailure = (error) => ({
  type: FETCH_RECOMMENDATION_FAILURE,
  payload: error,
});

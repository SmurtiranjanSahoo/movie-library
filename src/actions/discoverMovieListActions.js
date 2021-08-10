import {
  DISCOVERMOVIE_LIST_FAILURE,
  DISCOVERMOVIE_LIST_BEGIN,
  DISCOVERMOVIE_LIST_SUCCESS,
} from "./action-types";
import { base_url } from "../api/api";

export const fetchMovieList = (url) => {
  return (dispatch) => {
    dispatch(fetchMovieListBegin());
    base_url
      .get(url)
      .then((response) => {
        const List = response.data?.results;
        dispatch(fetchMovieListSuccess(List));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchMovieListFailure(errMsg));
      });
  };
};

export const fetchMovieListBegin = () => ({
  type: DISCOVERMOVIE_LIST_BEGIN,
});

export const fetchMovieListSuccess = (List) => ({
  type: DISCOVERMOVIE_LIST_SUCCESS,
  payload: List,
});

export const fetchMovieListFailure = (error) => ({
  type: DISCOVERMOVIE_LIST_FAILURE,
  payload: error,
});

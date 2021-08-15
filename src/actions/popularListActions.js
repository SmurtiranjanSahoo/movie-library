import {
  POPULAR_LIST_FAILURE,
  POPULAR_LIST_BEGIN,
  POPULAR_LIST_SUCCESS,
} from "./action-types";
import { base_url } from "../api/api";

export const fetchPopularList = (pageNum) => {
  return (dispatch) => {
    dispatch(fetchPopularListBegin());
    base_url
      .get(`/movie/popular?language=en-US&page=${pageNum}`)
      .then((response) => {
        const popularList = response.data?.results;
        dispatch(fetchPopularListSuccess(popularList));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchPopularListFailure(errMsg));
      });
  };
};

export const fetchPopularListBegin = () => ({
  type: POPULAR_LIST_BEGIN,
});

export const fetchPopularListSuccess = (List) => ({
  type: POPULAR_LIST_SUCCESS,
  payload: List,
});

export const fetchPopularListFailure = (error) => ({
  type: POPULAR_LIST_FAILURE,
  payload: error,
});

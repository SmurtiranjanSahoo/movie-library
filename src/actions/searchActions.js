import {
  FETCH_SEARCH_RESULT_BEGIN,
  FETCH_SEARCH_RESULT_SUCCESS,
  FETCH_SEARCH_RESULT_FAILURE,
} from "./action-types";
import { search_url } from "../api/api";

export const fetchSearchResult = (query) => {
  return (dispatch) => {
    dispatch(fetchSearchResultBegin());
    search_url(query)
      .get()
      .then((response) => {
        const searchResult = response.data?.results;
        // console.log(searchResult);
        dispatch(fetchSearchResultSuccess(searchResult));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchSearchResultFailure(errMsg));
      });
  };
};

export const fetchSearchResultBegin = () => ({
  type: FETCH_SEARCH_RESULT_BEGIN,
});

export const fetchSearchResultSuccess = (List) => ({
  type: FETCH_SEARCH_RESULT_SUCCESS,
  payload: List,
});

export const fetchSearchResultFailure = (error) => ({
  type: FETCH_SEARCH_RESULT_FAILURE,
  payload: error,
});

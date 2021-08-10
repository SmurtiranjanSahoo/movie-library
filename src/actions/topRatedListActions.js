import {
  TOPRATED_LIST_FAILURE,
  TOPRATED_LIST_BEGIN,
  TOPRATED_LIST_SUCCESS,
} from "./action-types";
import { base_url } from "../api/api";

export const fetchTopratedList = (url) => {
  return (dispatch) => {
    dispatch(fetchTopratedListBegin());
    base_url
      .get(url)
      .then((response) => {
        const List = response.data?.results;
        dispatch(fetchTopratedListSuccess(List));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchTopratedListFailure(errMsg));
      });
  };
};

export const fetchTopratedListBegin = () => ({
  type: TOPRATED_LIST_BEGIN,
});

export const fetchTopratedListSuccess = (List) => ({
  type: TOPRATED_LIST_SUCCESS,
  payload: List,
});

export const fetchTopratedListFailure = (error) => ({
  type: TOPRATED_LIST_FAILURE,
  payload: error,
});

import { LIST_FAILURE, LIST_BEGIN, LIST_SUCCESS } from "./action-types";
import { base_url } from "../api/api";

export const fetchList = (url) => {
  return (dispatch) => {
    dispatch(fetchListBegin());
    base_url
      .get(url)
      .then((response) => {
        const popularList = response.data?.results;
        dispatch(fetchListSuccess(popularList));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchListFailure(errMsg));
      });
  };
};

export const fetchListBegin = () => ({
  type: LIST_BEGIN,
});

export const fetchListSuccess = (List) => ({
  type: LIST_SUCCESS,
  payload: List,
});

export const fetchListFailure = (error) => ({
  type: LIST_FAILURE,
  payload: error,
});

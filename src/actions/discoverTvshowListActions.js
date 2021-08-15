import {
  DISCOVERTVSHOW_LIST_FAILURE,
  DISCOVERTVSHOW_LIST_BEGIN,
  DISCOVERTVSHOW_LIST_SUCCESS,
} from "./action-types";
import { base_url } from "../api/api";

export const fetchTvshowList = (pageNum) => {
  return (dispatch) => {
    dispatch(fetchTvshowListBegin());
    base_url
      .get(`/discover/tv?language=en-US&page=${pageNum}`)
      .then((response) => {
        const List = response.data?.results;
        dispatch(fetchTvshowListSuccess(List));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchTvshowListFailure(errMsg));
      });
  };
};

export const fetchTvshowListBegin = () => ({
  type: DISCOVERTVSHOW_LIST_BEGIN,
});

export const fetchTvshowListSuccess = (List) => ({
  type: DISCOVERTVSHOW_LIST_SUCCESS,
  payload: List,
});

export const fetchTvshowListFailure = (error) => ({
  type: DISCOVERTVSHOW_LIST_FAILURE,
  payload: error,
});

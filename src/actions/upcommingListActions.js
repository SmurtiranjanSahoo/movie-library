import {
  UPCOMMING_LIST_FAILURE,
  UPCOMMING_LIST_BEGIN,
  UPCOMMING_LIST_SUCCESS,
} from "./action-types";
import { base_url } from "../api/api";

export const fetchUpcommingList = (url) => {
  return (dispatch) => {
    dispatch(fetchUpcommingListBegin());
    base_url
      .get(url)
      .then((response) => {
        const List = response.data?.results;
        dispatch(fetchUpcommingListSuccess(List));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchUpcommingListFailure(errMsg));
      });
  };
};

export const fetchUpcommingListBegin = () => ({
  type: UPCOMMING_LIST_BEGIN,
});

export const fetchUpcommingListSuccess = (List) => ({
  type: UPCOMMING_LIST_SUCCESS,
  payload: List,
});

export const fetchUpcommingListFailure = (error) => ({
  type: UPCOMMING_LIST_FAILURE,
  payload: error,
});

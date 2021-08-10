import {
  FETCH_TVSHOW_BEGIN,
  FETCH_TVSHOW_SUCCESS,
  FETCH_TVSHOW_FAILURE,
  FETCH_TVSHOW_CAST_BEGIN,
  FETCH_TVSHOW_CAST_SUCCESS,
  FETCH_TVSHOW_CAST_FAILURE,
} from "./action-types";
import { tvshow_cast_url, tvshow_url } from "../api/api";

export const fetchTvshow = (id) => {
  return (dispatch) => {
    dispatch(fetchTvshowBegin());
    tvshow_url(id)
      .get()
      .then((response) => {
        // console.log(response.data);
        const tvshow = response.data;
        dispatch(fetchTvshowSuccess(tvshow));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchTvshowFailure(errMsg));
      });
  };
};

export const fetchTvshowBegin = () => ({
  type: FETCH_TVSHOW_BEGIN,
});

export const fetchTvshowSuccess = (movie) => ({
  type: FETCH_TVSHOW_SUCCESS,
  payload: movie,
});

export const fetchTvshowFailure = (error) => ({
  type: FETCH_TVSHOW_FAILURE,
  payload: error,
});

export const fetchTvshowCast = (id) => {
  return (dispatch) => {
    dispatch(fetchTvshowCastBegin());
    tvshow_cast_url(id)
      .get()
      .then((response) => {
        // console.log(response.data?.cast);
        const cast = response.data?.cast;
        dispatch(fetchTvshowCastSuccess(cast));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchTvshowCastFailure(errMsg));
      });
  };
};

export const fetchTvshowCastBegin = () => ({
  type: FETCH_TVSHOW_CAST_BEGIN,
});

export const fetchTvshowCastSuccess = (cast) => ({
  type: FETCH_TVSHOW_CAST_SUCCESS,
  payload: cast,
});

export const fetchTvshowCastFailure = (error) => ({
  type: FETCH_TVSHOW_CAST_FAILURE,
  payload: error,
});

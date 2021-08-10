import {
  FETCH_TVSHOW_BEGIN,
  FETCH_TVSHOW_SUCCESS,
  FETCH_TVSHOW_FAILURE,
  FETCH_TVSHOW_CAST_BEGIN,
  FETCH_TVSHOW_CAST_SUCCESS,
  FETCH_TVSHOW_CAST_FAILURE,
} from "../actions/action-types";

const INITIAL_TVSHOW_STATE = {
  loadingTvshow: true,
  tvshowDetails: {},
  loadingCast: true,
  castDetails: [],
  loadingRecommendations: true,
  recommendedMovies: {},
  error: "",
};

const TvshowReducer = (state = INITIAL_TVSHOW_STATE, action) => {
  switch (action.type) {
    case FETCH_TVSHOW_BEGIN:
      return { ...state, loadingTvshow: true };
    case FETCH_TVSHOW_SUCCESS:
      return { ...state, tvshowDetails: action.payload };
    case FETCH_TVSHOW_FAILURE:
      return { ...state, loadingTvshow: false, error: action.payload };

    case FETCH_TVSHOW_CAST_BEGIN:
      return { ...state, loadingCast: true };
    case FETCH_TVSHOW_CAST_SUCCESS:
      return { ...state, castDetails: action.payload };
    case FETCH_TVSHOW_CAST_FAILURE:
      return { ...state, loadingCast: false, error: action.payload };

    default:
      return state;
  }
};

export default TvshowReducer;

import {
  FETCH_MOVIE_BEGIN,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
  FETCH_MOVIE_CAST_BEGIN,
  FETCH_MOVIE_CAST_SUCCESS,
  FETCH_MOVIE_CAST_FAILURE,
  MOVIE_RECOMMENDATION_LOADING,
  FETCH_MOVIE_RECOMMENDATIONS,
} from "../actions/action-types";

const INITIAL_MOVIE_STATE = {
  loadingMovie: true,
  movieDetails: {},
  loadingCast: true,
  castDetails: [],
  loadingRecommendations: true,
  recommendedMovies: {},
  error: "",
};

const MovieReducer = (state = INITIAL_MOVIE_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIE_BEGIN:
      return { ...state, loadingMovie: true };
    case FETCH_MOVIE_SUCCESS:
      return { ...state, movieDetails: action.payload };
    case FETCH_MOVIE_FAILURE:
      return { ...state, loadingMovie: false, error: action.payload };

    case FETCH_MOVIE_CAST_BEGIN:
      return { ...state, loadingCast: true };
    case FETCH_MOVIE_CAST_SUCCESS:
      return { ...state, castDetails: action.payload };
    case FETCH_MOVIE_CAST_FAILURE:
      return { ...state, loadingCast: false, error: action.payload };

    case MOVIE_RECOMMENDATION_LOADING:
      return { ...state, loadingRecommendations: true };
    case FETCH_MOVIE_RECOMMENDATIONS:
      return {
        ...state,
        recommendedMovies: action.payload,
        loadingRecommendations: false,
      };

    default:
      return state;
  }
};

export default MovieReducer;

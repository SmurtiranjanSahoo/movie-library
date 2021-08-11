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
  loadingMovie: false,
  movieDetails: {},
  loadingCast: false,
  castDetails: [],
  loadingRecommendations: false,
  recommendedMovies: {},
  error: "",
};

const MovieReducer = (state = INITIAL_MOVIE_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIE_BEGIN:
      return { ...state, movieDetails: {}, loadingMovie: true };
    case FETCH_MOVIE_SUCCESS:
      return { ...state, loadingMovie: false, movieDetails: action.payload };
    case FETCH_MOVIE_FAILURE:
      return { ...state, loadingMovie: false, error: action.payload };

    case FETCH_MOVIE_CAST_BEGIN:
      return { ...state, castDetails: [], loadingCast: true };
    case FETCH_MOVIE_CAST_SUCCESS:
      return { ...state, loadingCast: false, castDetails: action.payload };
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

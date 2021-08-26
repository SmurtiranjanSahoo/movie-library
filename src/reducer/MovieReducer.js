import {
  FETCH_MOVIE_BEGIN,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
  FETCH_MOVIE_CAST_BEGIN,
  FETCH_MOVIE_CAST_SUCCESS,
  FETCH_MOVIE_CAST_FAILURE,
  FETCH_RECOMMENDATION_BEGIN,
  FETCH_RECOMMENDATION_SUCCESS,
  FETCH_RECOMMENDATION_FAILURE,
} from "../actions/action-types";

const INITIAL_MOVIE_STATE = {
  loadingMovie: false,
  movieDetails: {},
  loadingCast: false,
  castDetails: [],
  loadingRecommendations: false,
  recommendedMovies: [],
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

    case FETCH_RECOMMENDATION_BEGIN:
      return { ...state, recommendedMovies: [], loadingRecommendations: true };
    case FETCH_RECOMMENDATION_SUCCESS:
      return {
        ...state,
        loadingRecommendations: false,
        recommendedMovies: action.payload,
      };
    case FETCH_RECOMMENDATION_FAILURE:
      return { ...state, loadingRecommendations: false, error: action.payload };

    default:
      return state;
  }
};

export default MovieReducer;

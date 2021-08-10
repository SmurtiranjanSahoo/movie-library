import {
  DISCOVERMOVIE_LIST_SUCCESS,
  DISCOVERMOVIE_LIST_BEGIN,
  DISCOVERMOVIE_LIST_FAILURE,
} from "../actions/action-types";

const DISCOVERMOVIE_LIST_STATE = {
  loadingList: true,
  List: [],
  error: null,
};

const DiscoverMovieListReducer = (state = DISCOVERMOVIE_LIST_STATE, action) => {
  switch (action.type) {
    case DISCOVERMOVIE_LIST_BEGIN:
      return { ...state, loadingList: true, error: null };
    case DISCOVERMOVIE_LIST_SUCCESS:
      return {
        ...state,
        loadingList: false,
        List: action.payload,
      };
    case DISCOVERMOVIE_LIST_FAILURE:
      return {
        ...state,
        loadingList: false,
        error: action.payload,
        List: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default DiscoverMovieListReducer;

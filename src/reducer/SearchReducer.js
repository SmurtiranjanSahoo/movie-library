import {
  FETCH_SEARCH_RESULT_BEGIN,
  FETCH_SEARCH_RESULT_SUCCESS,
  FETCH_SEARCH_RESULT_FAILURE,
} from "../actions/action-types";

const SEARCH_RESULT_STATE = {
  loadingList: true,
  List: [],
  error: null,
};

const SearchReducer = (state = SEARCH_RESULT_STATE, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULT_BEGIN:
      return { ...state, loadingList: true, error: null };
    case FETCH_SEARCH_RESULT_SUCCESS:
      return {
        ...state,
        loadingList: false,
        List: action.payload,
      };
    case FETCH_SEARCH_RESULT_FAILURE:
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

export default SearchReducer;

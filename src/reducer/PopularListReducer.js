import {
  POPULAR_LIST_SUCCESS,
  POPULAR_LIST_BEGIN,
  POPULAR_LIST_FAILURE,
} from "../actions/action-types";

const POPULAR_LIST_STATE = {
  loadingList: true,
  List: [],
  error: null,
};

const PopularListReducer = (state = POPULAR_LIST_STATE, action) => {
  switch (action.type) {
    case POPULAR_LIST_BEGIN:
      return { ...state, loadingList: true, error: null };
    case POPULAR_LIST_SUCCESS:
      return {
        ...state,
        loadingList: false,
        List: action.payload,
      };
    case POPULAR_LIST_FAILURE:
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

export default PopularListReducer;

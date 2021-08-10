import {
  TOPRATED_LIST_SUCCESS,
  TOPRATED_LIST_BEGIN,
  TOPRATED_LIST_FAILURE,
} from "../actions/action-types";

const TOPRATED_LIST_STATE = {
  loadingList: true,
  List: [],
  error: null,
};

const TopratedListReducer = (state = TOPRATED_LIST_STATE, action) => {
  switch (action.type) {
    case TOPRATED_LIST_BEGIN:
      return { ...state, loadingList: true, error: null };
    case TOPRATED_LIST_SUCCESS:
      return {
        ...state,
        loadingList: false,
        List: action.payload,
      };
    case TOPRATED_LIST_FAILURE:
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

export default TopratedListReducer;

import {
  DISCOVERTVSHOW_LIST_SUCCESS,
  DISCOVERTVSHOW_LIST_BEGIN,
  DISCOVERTVSHOW_LIST_FAILURE,
} from "../actions/action-types";

const DISCOVERTVSHOW_LIST_STATE = {
  loadingList: true,
  List: [],
  error: null,
};

const DiscoverTvshowListReducer = (
  state = DISCOVERTVSHOW_LIST_STATE,
  action
) => {
  switch (action.type) {
    case DISCOVERTVSHOW_LIST_BEGIN:
      return { ...state, loadingList: true, error: null };
    case DISCOVERTVSHOW_LIST_SUCCESS:
      return {
        ...state,
        loadingList: false,
        List: action.payload,
      };
    case DISCOVERTVSHOW_LIST_FAILURE:
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

export default DiscoverTvshowListReducer;

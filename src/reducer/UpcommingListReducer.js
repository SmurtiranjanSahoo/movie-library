import {
  UPCOMMING_LIST_SUCCESS,
  UPCOMMING_LIST_BEGIN,
  UPCOMMING_LIST_FAILURE,
} from "../actions/action-types";

const UPCOMMING_LIST_STATE = {
  loadingList: true,
  List: [],
  error: null,
};

const UpcommingListReducer = (state = UPCOMMING_LIST_STATE, action) => {
  switch (action.type) {
    case UPCOMMING_LIST_BEGIN:
      return { ...state, loadingList: true, error: null };
    case UPCOMMING_LIST_SUCCESS:
      return {
        ...state,
        loadingList: false,
        List: action.payload,
      };
    case UPCOMMING_LIST_FAILURE:
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

export default UpcommingListReducer;

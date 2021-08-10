import {
  LIST_SUCCESS,
  LIST_BEGIN,
  LIST_FAILURE,
} from "../actions/action-types";

const LIST_STATE = {
  loadingList: true,
  List: [],
  error: null,
};

const ListReducer = (state = LIST_STATE, action) => {
  switch (action.type) {
    case LIST_BEGIN:
      return { ...state, loadingList: true, error: null };
    case LIST_SUCCESS:
      return {
        ...state,
        loadingList: false,
        List: action.payload,
      };
    case LIST_FAILURE:
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

export default ListReducer;

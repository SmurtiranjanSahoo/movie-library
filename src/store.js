import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import ListReducer from "./reducer/ListReducer";
import PopularListReducer from "./reducer/PopularListReducer";
import DiscoverMovieListReducer from "./reducer/DiscoverMovieListReducer";
import DiscoverTvshowListReducer from "./reducer/DiscoverTvshowListReducer";
import TopratedListReducer from "./reducer/TopratedListReducer";
import UpcommingListReducer from "./reducer/UpcommingListReducer";
import MovieReducer from "./reducer/MovieReducer";
import TvshowReducer from "./reducer/TvshowReducer";

const rootReducer = combineReducers({
  ListReducer,
  PopularListReducer,
  DiscoverMovieListReducer,
  DiscoverTvshowListReducer,
  TopratedListReducer,
  UpcommingListReducer,
  MovieReducer,
  TvshowReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

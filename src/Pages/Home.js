import React, { createRef, useEffect } from "react";
import {
  Trending_url,
  PopularMovies_url,
  DiscoverMovies_url,
  DiscoverTVshows_url,
  TopRated_url,
  Upcomming_url,
} from "../config/config";

import { connect } from "react-redux";
import { fetchList } from "../actions/listActions";
import { fetchPopularList } from "../actions/popularListActions";
import { fetchMovieList } from "../actions/discoverMovieListActions";
import { fetchTvshowList } from "../actions/discoverTvshowListActions";
import { fetchTopratedList } from "../actions/topRatedListActions";
import { fetchUpcommingList } from "../actions/upcommingListActions";
//components
import HomeSlider from "../Components/HomeSlider/HomeSlider";
import Navbar from "../Components/Navbar/Navbar";
import Carousel from "../Components/Carousel/Carousel";

const Home = ({
  fetchList,
  trendingList,
  fetchPopularList,
  popularList,
  fetchMovieList,
  discoverMovieList,
  fetchTvshowList,
  discoverTvshowList,
  fetchTopratedList,
  topratedList,
  fetchUpcommingList,
  upcommingList,
}) => {
  useEffect(() => {
    fetchList(Trending_url);
    fetchPopularList(PopularMovies_url);
    fetchMovieList(DiscoverMovies_url);
    fetchTvshowList(DiscoverTVshows_url);
    fetchTopratedList(TopRated_url);
    fetchUpcommingList(Upcomming_url);
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/* <Carousel title="Trending Now" list={trendingList} /> */}

      <div style={{ marginTop: "100px" }}>
        <HomeSlider title="Trending Now" list={trendingList} />
        <HomeSlider title="Top Rated" list={topratedList} />
        <HomeSlider title="Discover TV Shows" list={discoverTvshowList} />
        <HomeSlider title="Discover Movies" list={discoverMovieList} />
        <HomeSlider title="Popular" list={popularList} />
        <HomeSlider title="Upcomming" list={upcommingList} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  trendingList: state.ListReducer.List,
  popularList: state.PopularListReducer.List?.reverse(),
  discoverMovieList: state.DiscoverMovieListReducer.List,
  discoverTvshowList: state.DiscoverTvshowListReducer.List,
  topratedList: state.TopratedListReducer.List,
  upcommingList: state.UpcommingListReducer.List?.reverse(),
});

const mapDispatchToProps = (dispatch) => ({
  fetchList: (Trending_url) => dispatch(fetchList(Trending_url)),
  fetchPopularList: (PopularMovies_url) =>
    dispatch(fetchPopularList(PopularMovies_url)),
  fetchMovieList: (DiscoverMovies_url) =>
    dispatch(fetchMovieList(DiscoverMovies_url)),
  fetchTvshowList: (DiscoverTVshows_url) =>
    dispatch(fetchTvshowList(DiscoverTVshows_url)),
  fetchTopratedList: (TopRated_url) =>
    dispatch(fetchTopratedList(TopRated_url)),
  fetchUpcommingList: (Upcomming_url) =>
    dispatch(fetchUpcommingList(Upcomming_url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

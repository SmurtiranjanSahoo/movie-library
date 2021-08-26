import React, { useEffect } from "react";

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
    fetchList();
    fetchPopularList();
    fetchMovieList();
    fetchTvshowList();
    fetchTopratedList();
    fetchUpcommingList();
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/* //Todo */}
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
  fetchList: () => dispatch(fetchList()),
  fetchPopularList: () => dispatch(fetchPopularList()),
  fetchMovieList: () => dispatch(fetchMovieList()),
  fetchTvshowList: () => dispatch(fetchTvshowList()),
  fetchTopratedList: () => dispatch(fetchTopratedList()),
  fetchUpcommingList: () => dispatch(fetchUpcommingList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

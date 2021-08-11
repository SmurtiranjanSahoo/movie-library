import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchTvshowList } from "../actions/discoverTvshowListActions";
import { DiscoverTVshows_url } from "../config/config";
//components
import SliderCard from "../Components/SliderCard/SliderCard";
import Navbar from "../Components/Navbar/Navbar";
import PosterCard from "../Components/PosterCard/PosterCard";

const TvShows = ({ tvShowsList, fetchTvshowList }) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  useEffect(() => {
    fetchTvshowList(DiscoverTVshows_url);
  }, []);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  });

  return (
    <div className="App">
      <Navbar />
      <div className="tvshow-wrapper">
        {tvShowsList.map((tvshow, i) =>
          innerWidth < 769 ? (
            <PosterCard item={tvshow} />
          ) : (
            <div key={i} className="slider-card">
              <SliderCard item={tvshow} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tvShowsList: state.DiscoverTvshowListReducer.List,
});
const mapDispatchToProps = (dispatch) => ({
  fetchTvshowList: () => dispatch(fetchTvshowList(DiscoverTVshows_url)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TvShows);

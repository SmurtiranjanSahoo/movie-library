import React from "react";
import { connect } from "react-redux";
//components
import SliderCard from "../Components/SliderCard/SliderCard";
import Navbar from "../Components/Navbar/Navbar";

const TvShows = ({ tvShowsList }) => {
  var arr = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1,
  ];

  return (
    <div className="App">
      <Navbar />
      <div className="tvshow-wrapper" style={{ marginTop: "100px" }}>
        {tvShowsList.map((tvshow, i) => (
          <div className="slider-card">
            <SliderCard item={tvshow} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tvShowsList: state.DiscoverTvshowListReducer.List,
});
export default connect(mapStateToProps)(TvShows);

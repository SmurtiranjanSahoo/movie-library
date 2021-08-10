import React from "react";
import { connect } from "react-redux";
//components
import SliderCard from "../Components/SliderCard/SliderCard";
import Navbar from "../Components/Navbar/Navbar";

const Movies = ({ movieList }) => {
  return (
    <div className="App">
      <Navbar />
      <div className="tvshow-wrapper" style={{ marginTop: "100px" }}>
        {movieList.map((movie, i) => (
          <div className="slider-card">
            <SliderCard item={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieList: state.DiscoverMovieListReducer.List,
});

export default connect(mapStateToProps)(Movies);

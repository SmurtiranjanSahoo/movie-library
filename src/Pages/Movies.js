import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchMovieList } from "../actions/discoverMovieListActions";
import { DiscoverMovies_url } from "../config/config";
//components
import SliderCard from "../Components/SliderCard/SliderCard";
import Navbar from "../Components/Navbar/Navbar";
import PosterCard from "../Components/PosterCard/PosterCard";

const Movies = ({ movieList, fetchMovieList }) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchMovieList(DiscoverMovies_url);
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
      <div className="tvshow-wrapper" style={{ marginTop: "100px" }}>
        {movieList.map((movie, i) =>
          innerWidth < 769 ? (
            <PosterCard item={movie} />
          ) : (
            <div key={i} className="slider-card">
              <SliderCard item={movie} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieList: state.DiscoverMovieListReducer.List,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieList: () => dispatch(fetchMovieList(DiscoverMovies_url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

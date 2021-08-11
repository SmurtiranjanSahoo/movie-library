import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPopularList } from "../actions/popularListActions";
import { PopularMovies_url } from "../config/config";
//components
import SliderCard from "../Components/SliderCard/SliderCard";
import Navbar from "../Components/Navbar/Navbar";
import PosterCard from "../Components/PosterCard/PosterCard";

const Popular = ({ fetchPopularList, popularList }) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchPopularList(PopularMovies_url);
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
        {popularList.map((movie, i) =>
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
  popularList: state.PopularListReducer.List.reverse(),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPopularList: () => dispatch(fetchPopularList(PopularMovies_url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Popular);

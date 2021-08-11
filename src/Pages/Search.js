import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../actions/movieActions";
import { fetchTvshow } from "../actions/tvshowActions";
//components
import Navbar from "../Components/Navbar/Navbar";
import PosterCard from "../Components/PosterCard/PosterCard";

const Search = ({ searchResult, fetchMovie, fetchTvshow, movieDetails }) => {
  const [searchtext, setSearchtext] = useState("");

  return (
    <div>
      <Navbar />
      <div>
        {searchResult.map((result, i) => {
          {
            fetchMovie(result.id);
          }
          <PosterCard item={movieDetails} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchResult: state.SearchReducer.List,
  movieDetails: state.MovieReducer.movieDetails,
});
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: (movieid) => dispatch(fetchMovie(movieid)),
    fetchTvshow: (tvshowid) => dispatch(fetchTvshow(tvshowid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

import React, { useEffect, Fragment } from "react";
import "./Recommendation.css";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";
import { fetchRecommendation } from "../../actions/movieActions";
import PosterCard from "../PosterCard/PosterCard";

const Recommendation = ({ fetchRecommendation, movieData }) => {
  const { movieId, tvshowId } = useParams();
  const { recommendedMovies, loadingRecommendations } = movieData;

  useEffect(() => {
    const type = movieId ? "movie" : "tv";
    movieId
      ? fetchRecommendation(movieId, type)
      : fetchRecommendation(tvshowId, type);
  }, [movieId, tvshowId]);

  return (
    <Fragment>
      {loadingRecommendations ? (
        <></>
      ) : (
        <div className="recommendations-wrapper">
          <h4>SIMILAR {movieId ? "MOVIES" : "TV SHOWS"} </h4>
          <div className="recommendations-container">
            {recommendedMovies.map((movie, i) =>
              i !== 19 && i !== 18 ? (
                <div key={i} className="poster-card">
                  <PosterCard item={movie} />
                </div>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    movieData: state.MovieReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecommendation: (id, type) => dispatch(fetchRecommendation(id, type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommendation);

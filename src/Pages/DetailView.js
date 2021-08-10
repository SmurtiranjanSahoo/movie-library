import React from "react";
import "../Components/DetailView/DetailView.css";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
//components
import DetailViewInfo from "../Components/DetailView/DetailViewInfo";
import Navbar from "../Components/Navbar/Navbar";

const DetailView = ({ movieDetails, tvshowDetails }) => {
  const { movieId } = useParams();

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "100px" }} className="detail-view-wrapper">
        <div className="detail-view-poster">
          <img
            src={
              movieId
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : `https://image.tmdb.org/t/p/w500${tvshowDetails.poster_path}`
            }
            alt="poster"
          />
        </div>
        <div className="detail-view-info">
          <DetailViewInfo />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieDetails: state.MovieReducer.movieDetails,
  tvshowDetails: state.TvshowReducer.tvshowDetails,
});

export default connect(mapStateToProps)(DetailView);

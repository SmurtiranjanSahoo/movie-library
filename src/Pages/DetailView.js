import React from "react";
import "../Components/DetailView/DetailView.css";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";
//components
import DetailViewInfo from "../Components/DetailView/DetailViewInfo";
import Navbar from "../Components/Navbar/Navbar";

const override = css`
  display: block;
  margin: 20% 50%;
  border-color: red;
`;

const DetailView = ({ movieData, tvshowData }) => {
  const { movieId } = useParams();

  const { movieDetails, loadingMovie } = movieData;
  const { tvshowDetails, loadingTvshow } = tvshowData;

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "100px" }} className="detail-view-wrapper">
        {loadingMovie || loadingTvshow ? (
          <>
            <BounceLoader css={override} size={40} />
          </>
        ) : (
          <div className="detail-view-poster">
            <img
              src={
                movieId
                  ? `https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`
                  : `https://image.tmdb.org/t/p/w500${tvshowDetails?.poster_path}`
              }
              alt="poster"
            />
          </div>
        )}
        <div className="detail-view-info">
          <DetailViewInfo />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieData: state.MovieReducer,
  tvshowData: state.TvshowReducer,
});

export default connect(mapStateToProps)(DetailView);

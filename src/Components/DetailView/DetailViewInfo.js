import React, { Fragment, useEffect, useState } from "react";
import "./DetailView.css";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovie } from "../../actions/movieActions";
import { fetchTvshow } from "../../actions/tvshowActions";
import { getTrailer } from "../../helpers/getTrailer";
//icons
import { SiImdb } from "react-icons/si";
import { BsPlayFill, BsLink45Deg } from "react-icons/bs";
//components
import CastList from "../CastList/CastList";

const DetailViewInfo = ({ fetchMovie, movieData, fetchTvshow, tvshowData }) => {
  const { movieId, tvshowId } = useParams();
  const [trailer, setTrailer] = useState("");
  const { movieDetails, loadingMovie } = movieData;
  const { tvshowDetails, loadingTvshow } = tvshowData;

  const fetchTrailer = () => {
    movieId
      ? getTrailer("movie", movieId).then((videos) => {
          if (videos?.length === 0 || !videos || videos === false) return;
          const { key } = videos.find(
            (video) =>
              video.type === "Trailer" ||
              (video.type === "Teaser" && video.site === "YouTube")
          );
          setTrailer(key);
        })
      : getTrailer("tv", tvshowId).then((videos) => {
          if (videos?.length === 0 || !videos || videos === false) return;
          const { key } = videos.find(
            (video) =>
              video.type === "Trailer" ||
              (video.type === "Teaser" && video.site === "YouTube")
          );
          setTrailer(key);
        });
  };

  useEffect(() => {
    movieId ? fetchMovie(movieId) : fetchTvshow(tvshowId);
    fetchTrailer();
    window.scrollTo(0, 0);
  }, [movieId, tvshowId]);

  return (
    <Fragment>
      {loadingMovie || loadingTvshow ? (
        <></>
      ) : (
        <Fragment>
          <div className="title-detail">
            {movieId ? movieDetails.title : tvshowDetails.name}
            <div className="rating-runtime">
              <div className="rating">
                <SiImdb size="25" className="imbd-icon" />{" "}
                {`${
                  movieId
                    ? movieDetails.vote_average
                    : tvshowDetails.vote_average
                } / 10`}
              </div>
              <div className="runtime">
                {!movieId
                  ? `${tvshowDetails.original_language} / ${
                      tvshowDetails.number_of_seasons
                    } SEASONS / ${tvshowDetails.first_air_date?.slice(0, 4)}`
                  : `${movieDetails.original_language} / ${
                      movieDetails.runtime
                    } MIN / ${movieDetails.release_date?.slice(0, 4)}`}
              </div>
            </div>
          </div>
          <div className="genre-detail">
            <h4>THE GENRES</h4>
            <div className="genre-icon">
              {movieId
                ? movieDetails.genres?.map((genre, i) => (
                    <p key={i}>{genre.name}</p>
                  ))
                : tvshowDetails.genres?.map((genre, i) => (
                    <p key={i}>{genre.name}</p>
                  ))}
            </div>
          </div>
          <div className="synopsis-detail">
            <h4>THE SYNOPSIS</h4>
            <p>{movieId ? movieDetails.overview : tvshowDetails.overview}</p>
          </div>
          <div className="cast-detail">
            <h4>THE CAST</h4>
            <CastList />
          </div>
          <div className="links-detail">
            <a
              href={movieId ? movieDetails.homepage : tvshowDetails.homepage}
              target="_blank"
            >
              Website <BsLink45Deg className="link-icon" size="20" />
            </a>
            {movieId ? (
              <a
                href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}
                target="_blank"
              >
                IMDB <SiImdb className="link-icon" size="20" />
              </a>
            ) : (
              <></>
            )}
            <a
              href={`https://www.youtube.com/watch?v=${trailer}`}
              target="_blank"
            >
              Trailer <BsPlayFill className="link-icon" size="20" />
            </a>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    movieData: state.MovieReducer,
    tvshowData: state.TvshowReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: (movieid) => dispatch(fetchMovie(movieid)),
    fetchTvshow: (tvshowid) => dispatch(fetchTvshow(tvshowid)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailViewInfo);

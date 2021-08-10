import React, { useState, createRef, useEffect } from "react";
import "./CastList.css";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovieCast } from "../../actions/movieActions";
import { fetchTvshowCast } from "../../actions/tvshowActions";

//icons
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const CastList = ({
  fetchMovieCast,
  movieCastDetails,
  fetchTvshowCast,
  tvCastDetails,
}) => {
  const castRef = createRef();
  const [prevBtn, setPrevBtn] = useState("hidden");
  const [nextBtn, setNextBtn] = useState("visible");

  const { movieId, tvshowId } = useParams();

  useEffect(() => {
    movieId ? fetchMovieCast(movieId) : fetchTvshowCast(tvshowId);
  }, []);

  return (
    <div className="castlist-wrapper">
      <div style={{ visibility: prevBtn }} className="castlist-button-prev">
        <button
          onClick={() => {
            castRef.current.scrollBy(-100, 0);
            if (castRef.current.scrollLeft - 100 <= 0) {
              setPrevBtn("hidden");
            }
            if (
              castRef.current.scrollWidth - castRef.current.clientWidth ===
              castRef.current.scrollLeft
            ) {
              setNextBtn("visible");
            }
          }}
        >
          <GrFormPrevious color="#ffffff" size="70" />
        </button>
      </div>
      <div style={{ visibility: nextBtn }} className="castlist-button-next">
        <button
          onClick={() => {
            let x = 100;
            castRef.current.scrollBy(x, 0);
            if (x !== 0) {
              setPrevBtn("visible");
            } else {
              setPrevBtn("hidden");
            }
            if (
              castRef.current.scrollWidth - castRef.current.clientWidth <=
              castRef.current.scrollLeft + 100
            ) {
              setNextBtn("hidden");
            } else {
              setNextBtn("visible");
            }
          }}
        >
          <GrFormNext fill="#ffffff" size="70px" />
        </button>
      </div>
      <div ref={castRef} className="castlist">
        {movieId
          ? movieCastDetails.map((item, i) => (
              <div key={i} className="cast">
                <img
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                      : "https://fabmovielibrary.netlify.app/static/media/avatar.6dcde115.svg"
                  }
                  alt="actor"
                />
                <p>{item.name}</p>
              </div>
            ))
          : tvCastDetails.map((item, i) => (
              <div key={i} className="cast">
                <img
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                      : "https://fabmovielibrary.netlify.app/static/media/avatar.6dcde115.svg"
                  }
                  alt="actor"
                />
                <p>{item.name}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieCastDetails: state.MovieReducer.castDetails,
  tvCastDetails: state.TvshowReducer.castDetails,
});

const mapDispatchToProps = (dispatch) => {
  let movieid = window.location?.pathname.slice(7);
  let tvshowid = window.location?.pathname.slice(8);

  return {
    fetchMovieCast: () => dispatch(fetchMovieCast(movieid)),
    fetchTvshowCast: () => dispatch(fetchTvshowCast(tvshowid)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CastList);

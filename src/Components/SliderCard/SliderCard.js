import React from "react";
import "./SliderCard.css";
import { Link } from "react-router-dom";

const SliderCard = ({ item }) => {
  let backdrop_img = item.backdrop_path
    ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
    : "https://image.tmdb.org/t/p/w500/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg";

  let detailView_link = item.backdrop_path
    ? item.release_date
      ? `movie/${item.id}`
      : `tvshow/${item.id}`
    : "/movie/436969";

  return (
    <div className="slider-card-wrapper">
      <Link to={detailView_link} className="slider-card-img">
        <img src={backdrop_img} alt="backdrop img" />
        <div className="slider-card-info">
          <div className="slider-card-rating"> 9.1 IMDB </div>
        </div>
      </Link>
    </div>
  );
};

export default SliderCard;

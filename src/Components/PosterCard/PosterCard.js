import React from "react";
import "./PosterCard.css";
import { Link, withRouter } from "react-router-dom";

const PosterCard = ({ item }) => {
  let poster_path = item.poster_path
    ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
    : "https://image.tmdb.org/t/p/w500/ekZobS8isE6mA53RAiGDG93hBxL.jpg";

  let detailView_link = item.poster_path
    ? item.release_date
      ? `/movie/${item.id}`
      : `/tvshow/${item.id}`
    : "/tvshow/63174";
  // console.log(detailView_link);

  return (
    <div className="poster-card-wrapper">
      <Link to={detailView_link}>
        <img src={poster_path} alt="poster" />
      </Link>
    </div>
  );
};

export default withRouter(PosterCard);

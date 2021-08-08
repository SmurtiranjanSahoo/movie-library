import React from "react";
import "./SliderCard.css";
import {
  FaPlay,
  FaTicketAlt,
  FaLinkedin,
  FaCcDinersClub,
} from "react-icons/fa";

const SliderCard = () => {
  return (
    <div className="slider-card-wrapper">
      <div className="slider-card-img">
        <img
          src="https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTIXM8MvoS9nhRoK3fkeIzWzA_TG4N1ASHaUsUeQWlZYwEA7OsrJzV4Ot0DFJeQy1zN8ZldSn9ThyYjVUniFH3wTXDo.webp?r=6c4"
          alt="card img"
        />
        <div className="slider-card-info">
          <div className="slider-card-rating"> 9.1 IMDB </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;

import React, { useState, createRef } from "react";
import "./Carousel.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import SliderCard from "../SliderCard/SliderCard";

const Carousel = ({ title, list }) => {
  const [prevBtn, setPrevBtn] = useState("hidden");
  const [nextBtn, setNextBtn] = useState("visible");
  const sliderRef = createRef();

  return (
    <div className="carousel-wrapper">
      <div style={{ visibility: prevBtn }} className="carousel-button-prev">
        <button
          onClick={() => {
            sliderRef.current.scrollBy(-1000, 0);
            if (sliderRef.current.scrollLeft - 1000 <= 0) {
              setPrevBtn("hidden");
            }
            if (
              sliderRef.current.scrollWidth - sliderRef.current.clientWidth ===
              sliderRef.current.scrollLeft
            ) {
              setNextBtn("visible");
            }
          }}
        >
          <GrFormPrevious color="#ffffff" size="70" />
        </button>
      </div>
      <div style={{ visibility: nextBtn }} className="carousel-button-next">
        <button
          onClick={() => {
            let x = 1000;
            sliderRef.current.scrollBy(x, 0);
            if (x !== 0) {
              setPrevBtn("visible");
            } else {
              setPrevBtn("hidden");
            }
            if (
              sliderRef.current.scrollWidth - sliderRef.current.clientWidth <=
              sliderRef.current.scrollLeft + 1000
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

      <div ref={sliderRef} className="carousel">
        {list.map((item, i) => (
          <img
            src="https://image.tmdb.org/t/p/original/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

import React, { useState, createRef } from "react";
import "./HomeSlider.css";
//icons
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
//components
import SliderCard from "../SliderCard/SliderCard";

const HomeSlider = ({ title = "Popular on Netflix", list }) => {
  const [prevBtn, setPrevBtn] = useState("hidden");
  const [nextBtn, setNextBtn] = useState("visible");
  const sliderRef = createRef();

  return (
    <div className="slider-wrapper">
      <div className="slider-header">{title}</div>

      <div style={{ visibility: prevBtn }} className="slider-button-prev">
        <button
          onClick={() => {
            sliderRef.current.scrollBy(-800, 0);
            if (sliderRef.current.scrollLeft - 800 <= 0) {
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
      <div style={{ visibility: nextBtn }} className="slider-button-next">
        <button
          onClick={() => {
            let x = 800;
            sliderRef.current.scrollBy(x, 0);
            if (x !== 0) {
              setPrevBtn("visible");
            } else {
              setPrevBtn("hidden");
            }
            if (
              sliderRef.current.scrollWidth - sliderRef.current.clientWidth <=
              sliderRef.current.scrollLeft + 800
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

      <div ref={sliderRef} className="slider">
        {list.map((item, i) => (
          <SliderCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;

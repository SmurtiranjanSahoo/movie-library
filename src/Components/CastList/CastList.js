import React, { useState, createRef } from "react";
import "./CastList.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const CastList = () => {
  const castRef = createRef();
  const [prevBtn, setPrevBtn] = useState("hidden");
  const [nextBtn, setNextBtn] = useState("visible");
  var arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

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
        {arr.map((card, i) => (
          <img
            src="https://fabmovielibrary.netlify.app/static/media/avatar.6dcde115.svg"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default CastList;

import React from "react";
import "../Components/DetailView/DetailView.css";

import DetailViewInfo from "../Components/DetailView/DetailViewInfo";
import Navbar from "../Components/Navbar/Navbar";
const DetailView = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "100px" }} className="detail-view-wrapper">
        <div className="detail-view-poster">
          <img
            src="https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg"
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

export default DetailView;

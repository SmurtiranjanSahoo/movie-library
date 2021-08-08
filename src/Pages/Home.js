import React, { createRef } from "react";
import HomeSlider from "../Components/HomeSlider/HomeSlider";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <div style={{ marginTop: "100px" }}>
        <HomeSlider />
        <HomeSlider />
        <HomeSlider />
        <HomeSlider />
        <HomeSlider />
      </div>
    </div>
  );
};

export default Home;

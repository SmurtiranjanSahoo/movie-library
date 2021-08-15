import React, { useEffect, useState, useRef, useCallback } from "react";
import { connect } from "react-redux";
import { fetchPopularList } from "../actions/popularListActions";
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";
//components
import SliderCard from "../Components/SliderCard/SliderCard";
import Navbar from "../Components/Navbar/Navbar";
import PosterCard from "../Components/PosterCard/PosterCard";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Popular = ({ fetchPopularList, populars }) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const { loadingList, List } = populars;
  const [pageNum, setPageNum] = useState(1);
  const observer = useRef();

  const lastMovieElementRef = useCallback(
    (node) => {
      if (loadingList) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNum((prevPageNum) => prevPageNum + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadingList]
  );

  useEffect(() => {
    fetchPopularList(pageNum);
  }, [pageNum]);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  });

  return (
    <div className="App">
      <Navbar />
      <div className="tvshow-wrapper" style={{ marginTop: "100px" }}>
        {List.map((popular, i) =>
          List.length === i + 1 ? (
            innerWidth < 769 ? (
              <div key={i} ref={lastMovieElementRef}>
                <PosterCard item={popular} />
              </div>
            ) : (
              <div ref={lastMovieElementRef} key={i} className="slider-card">
                <SliderCard item={popular} />
              </div>
            )
          ) : innerWidth < 769 ? (
            <PosterCard key={i} item={popular} />
          ) : (
            <div key={i} className="slider-card">
              <SliderCard item={popular} />
            </div>
          )
        )}
        {loadingList && (
          <div className="loader">
            <BounceLoader css={override} size={40} />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  populars: state.PopularListReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPopularList: (pageNum) => dispatch(fetchPopularList(pageNum)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Popular);

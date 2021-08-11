import React, { useState, useEffect, Fragment, useRef } from "react";
import { connect } from "react-redux";
import { fetchSearchResult } from "../actions/searchActions";
//icons
import { RiSearchLine } from "react-icons/ri";
//components
import Navbar from "../Components/Navbar/Navbar";
import PosterCard from "../Components/PosterCard/PosterCard";

const Search = ({ searchResult, fetchSearchResult }) => {
  const searchinput = useRef();
  const [searchtext, setSearchtext] = useState(
    localStorage.getItem("searchtext")
  );

  useEffect(() => {
    fetchSearchResult(searchtext);
    localStorage.setItem("searchtext", searchtext);
  }, [searchtext]);
  useEffect(() => {
    searchinput.current.focus();
  }, []);

  return (
    <Fragment>
      <Navbar searchicon="hidden" />
      <div className="search-wrapper">
        <div className="search-input">
          <input
            ref={searchinput}
            type={searchtext}
            onChange={(e) => setSearchtext(e.target.value)}
            placeholder="Titles, people, genres"
          />

          <RiSearchLine
            onClick={() => {}}
            className="search-icon-2"
            fill="#ffffff"
            size="24px"
          />
        </div>
      </div>
      <div className="search-result-wrapper">
        {searchResult.map((result, i) => {
          if (result.poster_path) return <PosterCard key={i} item={result} />;
        })}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  searchResult: state.SearchReducer.List,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSearchResult: (searchText) => dispatch(fetchSearchResult(searchText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);

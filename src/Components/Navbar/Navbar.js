import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { RiArrowDownSFill, RiSearchLine } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { ReactComponent as NetflixLogo } from "../../assets/netflix-logo.svg";

const Navbar = () => {
  const [isProfileDropDown, setIsProfileDropDown] = useState(false);
  const [isBrowseDropDown, setIsBrowseDropDown] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

  const LinkStyle = {
    textDecoration: "none",
    color: "#ffffff",
    marginLeft: "16px",
    fontSize: "14px",
  };

  const profileDropDown = () => {
    return (
      <div className="profile-dropdown-wrapper">
        <div className="profile-dropdown-container">
          <div className="dropdown-sec-primary">
            <p>Manage Profiles</p>
            <p>Exit Profile</p>
          </div>
          <div className="dropdown-sec-secondary">
            <p>Account</p>
            <p>Help Centre</p>
            <p>Sign out of Netflix</p>
          </div>
          <RiArrowDownSFill
            className="profile-dropdown-tip"
            fill="#ffffff"
            size="26px"
          />
        </div>
      </div>
    );
  };
  const browseDropDown = () => {
    return (
      <div className="browse-dropdown-wrapper">
        <div className="browse-dropdown-container">
          <div className="browse-dropdown-sec">
            <p>Home</p>
            <p>TV Shows</p>
            <p>Movies</p>
            <p>New & Popular</p>
            <p>My List</p>
          </div>
          <RiArrowDownSFill
            className="browse-dropdown-tip"
            fill="#ffffff"
            size="26px"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="navbar-wrapper">
      <div className="primary-navigation">
        <NetflixLogo />
        <div className="nav-links">
          <Link to="/" style={LinkStyle}>
            Home
          </Link>
          <Link style={LinkStyle}>TV Shows</Link>
          <Link style={LinkStyle}>Movies</Link>
          <Link style={LinkStyle}>New & Popular</Link>
          <Link style={LinkStyle}>My List</Link>
        </div>
        <div
          className="browse-section"
          onClick={() => {
            setIsBrowseDropDown(!isBrowseDropDown);
          }}
        >
          Browse
          <RiArrowDownSFill fill="#ffffff" size="20px" />
        </div>
      </div>
      <div className="secondary-navigation">
        <div className="search-section">
          <div className="search-input">
            <input
              style={{ display: searchBar ? "initial" : "none" }}
              type="text"
              placeholder="Titles, people, genres"
            />
            <RiSearchLine
              style={{ display: searchBar ? "initial" : "none" }}
              onClick={() => {
                setSearchBar(!searchBar);
              }}
              className="search-icon-2"
              fill="#ffffff"
              size="24px"
            />
            <RiSearchLine
              style={{ display: searchBar ? "none" : "initial" }}
              onClick={() => {
                setSearchBar(!searchBar);
              }}
              className="search-icon"
              fill="#ffffff"
              size="24px"
            />
          </div>
        </div>
        <div className="notification-section">
          <IoMdNotifications fill="#ffffff" size="26px" />
        </div>
        <div
          className="user-section"
          onClick={() => {
            setIsProfileDropDown(!isProfileDropDown);
          }}
        >
          <img
            src="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABaWLZk5CRgMPm8t4FrDUYA3znA_5oOh7rLQNZzP5qfxQdFMpYM8m8WtmSUkMIgLuaA9fSH71nK07TuXWJb6kYVQ.png?r=fdd"
            alt="user"
          />
          {isProfileDropDown ? (
            <RiArrowDownSFill
              style={{
                transform: "rotate(180deg)",
                transition: "transform 0.4s ease",
              }}
              fill="#ffffff"
              size="20px"
            />
          ) : (
            <RiArrowDownSFill
              style={{
                transition: "transform 0.4s ease",
              }}
              fill="#ffffff"
              size="20px"
            />
          )}
        </div>
      </div>
      {isProfileDropDown ? profileDropDown() : <></>}
      {isBrowseDropDown ? browseDropDown() : <></>}
    </div>
  );
};

export default Navbar;

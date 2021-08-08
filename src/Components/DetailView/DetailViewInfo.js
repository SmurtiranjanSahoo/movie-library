import React, { Fragment } from "react";
import "./DetailView.css";
import CastList from "../CastList/CastList";
import { SiImdb } from "react-icons/si";
import { BsPlayFill, BsLink45Deg } from "react-icons/bs";

const DetailViewInfo = () => {
  return (
    <Fragment>
      <div className="title-detail">
        BLACK WIDOW
        <div className="rating-runtime">
          <div className="rating">
            <SiImdb size="25" className="imbd-icon" /> 8.1 / 10
          </div>
          <div className="runtime">ENGLISH / 134 MIN / 2021</div>
        </div>
      </div>
      <div className="genre-detail">
        <h4>THE GENRES</h4>
        <p>Action</p>
        <p>Adventure</p>
        <p>Thriller</p>
        <p>Science Fiction</p>
      </div>
      <div className="synopsis-detail">
        <h4>THE SYNOPSIS</h4>
        <p>
          Natasha Romanoff, also known as Black Widow, confronts the darker
          parts of her ledger when a dangerous conspiracy with ties to her past
          arises. Pursued by a force that will stop at nothing to bring her
          down, Natasha must deal with her history as a spy and the broken
          relationships left in her wake long before she became an Avenger.
        </p>
      </div>
      <div className="cast-detail">
        <h4>THE CAST</h4>
        <CastList />
      </div>
      <div className="links-detail">
        <div>
          Website <BsLink45Deg className="link-icon" size="20" />
        </div>
        <div>
          IMDB <SiImdb className="link-icon" size="20" />
        </div>
        <div>
          Trailer <BsPlayFill className="link-icon" size="20" />
        </div>
      </div>
    </Fragment>
  );
};

export default DetailViewInfo;

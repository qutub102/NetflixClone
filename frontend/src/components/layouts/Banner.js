import React, { Fragment } from "react";

function Banner({ backdrop_path, overview, title }) {
  return (
    <Fragment>
      <header
        className="banner"
        style={{
          color: "white",
          objectFit: "contain",
          height: "50rem",
          background: `url('${backdrop_path}') no-repeat center center/cover`,
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">{title}</h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">List</button>
          </div>
          <h1 className="banner__description">{overview?.substr(0, 180)}...</h1>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    </Fragment>
  );
}

export default Banner;

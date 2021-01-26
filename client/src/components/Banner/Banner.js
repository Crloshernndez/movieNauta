import React from "react";
import "./Banner.css";

function Banner({ title, description, image }) {
  return (
    <div
      className="banner"
      /*background-image  */
      style={{
        backgroundSize: "cover",
        backgroundImage: { image },
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">
          {/* {movie?.title || movie?.name || movie?.original_name} */}
          {title}
        </h1>
        {/* description */}
        <h1 className="banner__description">
          {/* {truncate(movie?.overview, 150)} */}
          {description}
        </h1>
      </div>

      <div className="banner__fadeBotton"></div>
    </div>
  );
}

export default Banner;

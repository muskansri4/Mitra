import React from "react";
import "./TvShowDetails.scss";
import Rating from "./Rating";

export default function TvShowDetails({ tvShow }) {
  const ratingRes = tvShow.vote_average / 2;
  const maxLenOverview = 250;
  return (
    <React.Fragment>
      <div className="title">{tvShow.name}</div>
      <div className="rating_container">
        <div className="star_icon">
          <Rating ratingData={ratingRes} />
        </div>
        {/* <div className="rating">{ratingRes}/5 </div> */}
        <div className="air_date">{tvShow.first_air_date.slice(0,4)}</div>
      </div>
      <div className="details">
        {tvShow.overview.length > maxLenOverview
          ? tvShow.overview.slice(0, maxLenOverview) + "  ....  "
          : tvShow.overview}
      </div>
    </React.Fragment>
  );
}

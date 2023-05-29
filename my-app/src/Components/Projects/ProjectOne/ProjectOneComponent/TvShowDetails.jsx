import React from "react";
import "./TvShowDetails.scss";
import Rating from "./Rating";

export default function TvShowDetails({ tvShow }) {
  const ratingRes = tvShow.vote_average / 2;
  return (
    <React.Fragment>
      <div className="title">{tvShow.name}</div>
      <div className="rating_container">
        <div className="star_icon">
          <Rating ratingData={ratingRes} />
        </div>
        <div className="rating">{ratingRes}/5 </div>
      </div>
      <div className="details">{tvShow.overview}</div>
    </React.Fragment>
  );
}

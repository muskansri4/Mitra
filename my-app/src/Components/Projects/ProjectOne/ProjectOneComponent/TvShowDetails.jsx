import React from "react";
import "./TvShowDetails.scss";
import Rating from "./Rating";
import { countries } from "country-data";

export default function TvShowDetails({ tvShow }) {
  const ratingRes = tvShow.vote_average / 2;
  const maxLenOverview = 250;
  const languageNames = new Intl.DisplayNames(["en"], {
    type: "language",
  });

  return (
    <React.Fragment>
      <div className="title">{tvShow.name}</div>
      <div className="rating_container">
        <div className="star_icon">
          <Rating ratingData={ratingRes} />
        </div>
        <div className="air_date">{tvShow.first_air_date.slice(0, 4)}</div>
        <div className="origin">{countries[tvShow.origin_country].name}</div>
        <div className="language">
          {languageNames.of(tvShow.original_language)}
        </div>
        <div className="media">{tvShow.media_type && tvShow.media_type.toUpperCase()}</div>
      </div>
      <div className="details">
        {tvShow.overview.length > maxLenOverview
          ? tvShow.overview.slice(0, maxLenOverview) + "  ....  "
          : tvShow.overview}
      </div>
    </React.Fragment>
  );
}

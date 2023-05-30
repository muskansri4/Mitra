import React, { useState } from "react";

export default function Search({ onClick }) {
  const [searchInput, setsearchInput]=useState("");
  const search_now = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onClick(e.target.value);
      setsearchInput("")
    }
  };
const handleChange = (e)=> {
  setsearchInput(e.target.value);
}
  return (
    <React.Fragment>
      <input
        onKeyUp={search_now}
        className="search_box"
        type="text"
        onChange={handleChange}
        value={searchInput}
        placeholder="Search show here ...."
      ></input>
    </React.Fragment>
  );
}

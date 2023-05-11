import React from "react";
// import './Button.css';
import "./HomeComponent.scss";
import ProjectOneComponent from "../Projects/ProjectOne/ProjectOneComponent";
const HomeComponent = () => {
  return (
    <React.Fragment>
      <div className="main_div">
        <div className="heading_1">
          <ProjectOneComponent />
        </div>
        <div className="heading_2">Home Component 2</div>
        <div className="heading_3">Home Component 3</div>
        <div className="heading_4">Home Component 4</div>
        <div className="heading_4">Home Component 4</div>
      </div>
    </React.Fragment>
  );
};
export default HomeComponent;

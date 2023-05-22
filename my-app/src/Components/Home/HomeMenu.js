import React from "react";
import { NavLink } from "react-router-dom";
import "./HomeComponent.scss";
import Button from "react-bootstrap/Button";

const HomeMenu = () => {
  return (
    <>
      <div className="mainMenu_div">
        <Button variant="primary">
          {" "}
          <NavLink exact activeClassName="active_class" to={"/a"}>
            ProjectOneComponent
          </NavLink>
        </Button>{" "}
        <Button variant="secondary">
          {" "}
          <NavLink exact activeClassName="active_class" to={"/b"}>
            ProjectTwoComponent
          </NavLink>
        </Button>{" "}
      </div>
    </>
  );
};
export default HomeMenu;

import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationItems.css";

const NavigationItem = (props) => {
  //   let activeStyle = {
  //     textDecoration: "underline",
  //   };

  //   let activeClassName = "underline";

  return (
    <li className="Link">
      <NavLink
        to={props.link}
        className={({ isActive }) => (isActive ? "active" : undefined)}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;

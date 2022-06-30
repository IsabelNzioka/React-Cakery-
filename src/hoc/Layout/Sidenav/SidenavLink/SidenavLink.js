import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SidenavLink.module.css";

const sideNavLink = (props) => {
  //   let activeStyle = {
  //     textDecoration: "underline",
  //   };

  //   let activeClassName = "underline";

  return (
    <li className={classes.Link}>
      <NavLink
        to={props.link}
        className={({ isActive }) => (isActive ? classes.active : undefined)}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default sideNavLink;

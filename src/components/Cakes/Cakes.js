import React from "react";
import classes from "./Cakes.module.css";
import Cards from "../cards/Cards";
import SideNavLink from "../../hoc/Layout/Sidenav/SidenavLink/SidenavLink";
import Vegan from "./Vegan/Vegan";

import { Routes, Route } from "react-router-dom";

const Cakes = () => {
  return (
    <div className={classes.Cakes}>
      <div className={classes.Categories}>
        {/* <NavLink
        to={props.link}
        className={({ isActive }) => (isActive ? classes.active : undefined)}
      >
        {props.children}
      </NavLink> */}
        <Routes>
          <Route path="/vegan" element={<Vegan />}></Route>
        </Routes>

        <SideNavLink link="/all">All</SideNavLink>
        <SideNavLink link="/lemon-cakes">Lemon Cakes</SideNavLink>
        <SideNavLink link="/chocolate"> Chocolate</SideNavLink>
        <SideNavLink link="/vanilla"> Vanilla</SideNavLink>
        <SideNavLink link="/vegan"> Vegan</SideNavLink>
      </div>
      <hr></hr>
      {/* <Vegan /> */}
      <Cards />
    </div>
  );
};

export default Cakes;

import React from "react";
import classes from "./Cakes.module.css";
import Cards from "../cards/Cards";
// import SideNavLink from "../../hoc/Layout/Sidenav/SidenavLink/SidenavLink";
import Vegan from "./Vegan/Vegan";

// import SideNavLink from "../../hoc/Layout/Sidenav/SidenavLink/NavigationItems/NavigationItems";

// import SidenavLink from "../../hoc/Layout/Sidenav/SidenavLink/SidenavLink";
import NavigationItem from "../../hoc/Layout/Sidenav/SidenavLink/NavigationItems/NavigationItems";
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
        {/* <SideNavLink /> */}

        <NavigationItem link="/all">All</NavigationItem>
        <NavigationItem link="/lemon-cakes">Lemon Cakes</NavigationItem>
        <NavigationItem link="/chocolate"> Chocolate</NavigationItem>
        <NavigationItem link="/vanilla"> Vanilla</NavigationItem>
        <NavigationItem link="/vegan"> Vegan</NavigationItem>
      </div>
      <hr></hr>
      {/* <Vegan /> */}
      <Cards />
    </div>
  );
};

export default Cakes;

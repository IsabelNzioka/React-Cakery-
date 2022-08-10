import React from "react";

import classes from "./Sidenav.module.css";
import SideNavLink from "./SidenavLink/SidenavLink";

const Navbar = () => (
  <nav className={classes.nav}>
    {/* <div className={classes.navbar}> */}
    <div className={classes.NavLogo}>
      <h1>
        Bella's <span className="Logo"> Cakery.</span>
      </h1>
    </div>

    <ul className={classes.NavItems}>
      <SideNavLink link="/">Cakes </SideNavLink>
      <SideNavLink link="/cakes">catering </SideNavLink>
      <SideNavLink link="/about">About Us </SideNavLink>
      <SideNavLink link="/home">home </SideNavLink>
      <SideNavLink link="/hours">Hours & Locations </SideNavLink>
      <SideNavLink link="/giftcards">Gift cards </SideNavLink>
    </ul>

    <div className={classes.NavLocation}>
      <button className={classes.btn}>Order</button>
    </div>
    {/* </div> */}
  </nav>
);

export default Navbar;

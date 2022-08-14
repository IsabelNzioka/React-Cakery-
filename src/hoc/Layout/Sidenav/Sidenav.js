import React from "react";

import classes from "./Sidenav.module.css";
import SideNavLink from "./SidenavLink/SidenavLink";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const handleClick = () => {
    // console.log("clicked");
    const ul = document.querySelector("ul");
    ul.classList.toggle(classes.showMenu);
  };
  return (
    <nav className={classes.nav}>
      {/* <div className={classes.navbar}> */}
      <div className={classes.NavLogo}>
        <h3>
          Bella's <span className={classes.Logo}> Cakery.</span>
        </h3>

        <div onClick={handleClick} className={classes.Menu}>
          <HiMenu />
        </div>
      </div>

      <ul className={classes.NavItems}>
        <SideNavLink link="/">Cakes </SideNavLink>
        <SideNavLink link="/cakes">catering </SideNavLink>
        <SideNavLink link="/about">About Us </SideNavLink>
        <SideNavLink link="/home">home </SideNavLink>
        <SideNavLink link="/hours"> Locations </SideNavLink>
        <SideNavLink link="/giftcards">Gift cards </SideNavLink>
      </ul>

      <div className={classes.NavLocation}>
        <button className={classes.btn}>Order</button>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;

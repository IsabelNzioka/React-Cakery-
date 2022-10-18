import React from "react";

import classes from "./Sidenav.module.css";
import SideNavLink from "./SidenavLink/SidenavLink";
import { HiMenu } from "react-icons/hi";

import MenuToggle from "../SideDrawer/MenuToggle/MenuToggle";

const Navbar = (props) => {
  const clicked = () => {
    console.log("please work");
  };
  return (
    <nav className={classes.nav}>
      {/* <div className={classes.navbar}> */}
      <div className={classes.NavLogo}>
        <label className={classes.logo}>B's Cakery.</label>
        {/* <h3>
          Bella's <span className={classes.Logo}> Cakery.</span>
        </h3> */}
        {/* <h3>Cakery</h3> */}

        {/* <div onClick={handleClick} className={classes.Menu}>
          <HiMenu />
        </div> */}
      </div>
      <div className={classes.DesktopOnly}>
        <SideNavLink />

        {/* <div className={classes.NavLocation}> */}
        <button className={classes.btn}>Order</button>
        {/* </div> */}
      </div>
      {/* </div> */}

      <MenuToggle clicked={props.menuToggleClicked} />
    </nav>
  );
};

export default Navbar;

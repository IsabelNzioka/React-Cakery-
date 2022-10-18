import React, { useState } from "react";

// import Aux from "../Auxiliary/Auxiliary";
import Navbar from "./Sidenav/Sidenav";
import classes from "./Layout.module.css";

import SideDrawer from "./SideDrawer/SideDrawer";

const Layout = (props) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const closeSideDrawer = () => {
    setShowDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowDrawer(!showDrawer);
    // console.log("clicked");
  };

  return (
    <div className={classes.Main}>
      <div div className={classes.nav}>
        <Navbar menuToggleClicked={sideDrawerToggleHandler} />

        <SideDrawer open={showDrawer} closed={closeSideDrawer} />
      </div>
      <div className={classes.content}>{props.children} </div>

      {/* <main></main> */}
    </div>
  );
};

export default Layout;

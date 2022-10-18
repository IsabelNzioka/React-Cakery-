import React from "react";

// import NavigationItems from "../NavigationItems/NavigationItems";
import Navbar from "../Sidenav/Sidenav";
// import Backdrop from "../../UI/Backdrop/Backdrop";
import Backdrop from "../../../components/UI/Backdrop/Backdrop";

import SidenavLink from "../Sidenav/SidenavLink/SidenavLink";

import "./SideDrawer.css";

const SideDrawer = (props) => {
  //............
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }

  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <h3 className="Logo">Logo</h3>
        <nav>
          <SidenavLink />
        </nav>
      </div>
    </div>
  );
};

export default SideDrawer;

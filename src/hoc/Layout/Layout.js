import React from "react";

// import Aux from "../Auxiliary/Auxiliary";
import Navbar from "./Sidenav/Sidenav";
import classes from "./Layout.module.css";

const layout = (props) => (
  <div className={classes.Main}>
    <div div className={classes.nav}>
      <Navbar />
    </div>
    <div className={classes.content}>{props.children} </div>

    {/* <main></main> */}
  </div>
);

export default layout;

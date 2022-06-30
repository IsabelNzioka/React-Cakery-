import React from "react";

import classes from "./Sidenav.module.css";
import SideNavLink from "./SidenavLink/SidenavLink";

const Navbar = () => (
  <nav className={classes.nav}>
    <div className={classes.navbar}>
      <div className={classes.NavLogo}>
        <h1>
          Bella's <span className="cakery"> Cakery.</span>
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
    </div>

    {/* <ul className={classes.NavItems}>
      <Link to="/cakes">Hi</Link>
      <SideNavLink link="/cakes">Cakes</SideNavLink>
      <SideNavLink link="/">Menu1</SideNavLink>
    </ul> */}

    {/* <ul >
      <li className="nav__item">
        <a href="#j" className="nav__item--link">
          menu
        </a>
      </li>
      <li className="nav__item">
        <a href="#j" className="nav__item--link">
          Reservations
        </a>
      </li>

      <li className="nav__item">
        <a href="#j" className="nav__item--link">
          events
        </a>
      </li>
      <li className="nav__item">
        <a href="#j" className="nav__item--link">
          events
        </a>
      </li>
      <li className="nav__item">
        <a href="#j" className="nav__item--link">
          menu
        </a>
      </li>
      <li className="nav__item">
        <a href="#j" className="nav__item--link">
          Hours & Location
        </a>
      </li>
    </ul> */}

    <div className={classes.NavLocation}>
      <button className="btn">Order</button>
    </div>
  </nav>
);

export default Navbar;

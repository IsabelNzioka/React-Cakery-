import React from "react";
// import SideNavLink from "./NavigationItems/NavigationItems";
import NavigationItem from "./NavigationItems/NavigationItems";

const SidenavLink = () => {
  return (
    <div>
      <ul className="NavItems">
        <NavigationItem link="/">Cakes </NavigationItem>
        <NavigationItem link="/cakes">catering </NavigationItem>
        <NavigationItem link="/about">About Us </NavigationItem>
        <NavigationItem link="/home">home </NavigationItem>
        <NavigationItem link="/hours"> Locations </NavigationItem>
        <NavigationItem link="/giftcards">Gift cards </NavigationItem>
      </ul>
    </div>
  );
};

export default SidenavLink;

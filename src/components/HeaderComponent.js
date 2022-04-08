import NavigationComponent from "./NavigationComponent";
import React from "react";
import logo from "../shared/images/hope.png";

const HeaderComponent = () => {
  return (
    <header>
      <img className="site-brand-logo" src={logo} alt="logo" />
      <NavigationComponent />
    </header>
  );
};

export default HeaderComponent;

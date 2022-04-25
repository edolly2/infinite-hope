import NavigationComponent from "./NavigationComponent";
import React from "react";

const HeaderComponent = () => {
  return (
    <header className="sticky-top">
      <NavigationComponent />
    </header>
  );
};

export default HeaderComponent;

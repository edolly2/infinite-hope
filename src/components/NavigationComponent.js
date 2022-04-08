import { BiLogIn, BiLogOut } from "react-icons/bi";
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";

import { NavLink as NavigationLink } from "react-router-dom";
import React from "react";
import { useState } from "react";

const NavigationComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [dropdownActive, setDropdownActive] = useState(false);

  function LoggedOn() {
    if (!isLoggedIn) {
      return (
        <Nav className="Nav">
          <NavItem className="NavItem">
            <NavLink className="NavigationLink">Register</NavLink>
          </NavItem>
          <NavItem className="NavItem">
            <div className="NavSlash">{" / "}</div>
            <NavLink className="NavigationLink">
              Login <BiLogIn />
            </NavLink>
          </NavItem>
        </Nav>
      );
    } else {
      return (
        <Nav className="Nav">
          <NavItem className="NavItem">
            <NavigationLink className="NavigationLink">Account</NavigationLink>
          </NavItem>
          <div className="NavSlash">{" / "}</div>
          <NavItem className="NavItem">
            <NavigationLink className="NavigationLink">
              Logout <BiLogOut />
            </NavigationLink>
          </NavItem>
        </Nav>
      );
    }
  }

  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Infinite Hope</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>
                <NavigationLink className="NavigationLink" to="/">
                  Home
                </NavigationLink>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <NavigationLink className="NavigationLink" to="/about">
                  About Us
                </NavigationLink>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <NavigationLink className="NavigationLink" to="/contact">
                  Contact Us
                </NavigationLink>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <NavigationLink className="NavigationLink" to="/how-it-works">
                  How It Works
                </NavigationLink>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <NavigationLink className="NavigationLink" to="/how-to-help">
                  How You Can Help
                </NavigationLink>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <NavigationLink className="NavigationLink" to="/donate">
                  Donate
                </NavigationLink>
              </NavLink>
            </NavItem>
            {/* <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown> */}
          </Nav>
          <LoggedOn />
        </Collapse>
      </Navbar>
    </div>
  );
};
export default NavigationComponent;

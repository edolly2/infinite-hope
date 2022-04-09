import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { Nav, NavItem, NavLink } from "reactstrap";

import { Link } from "react-router-dom";
import React from "react";

const FooterComponent = () => {
  return (
    <footer className="fixed-bottom">
      <div className="container">
        <div className="row">
          <p style={{ fontSize: 60 }}>Thank You For Your Support!</p>
        </div>
        <div className="row">
          <div className="col">
            <h4>Subscribe to Our Mailing List</h4>
            <input type="email" />
            <button>Subscribe</button>
          </div>
          <div className="col">
            <h4>Site Map</h4>
            <Nav vertical>
              <NavItem>
                <NavLink>
                  <Link className="NavigationLink" to="/">
                    Home
                  </Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                  <Link className="NavigationLink" to="/about">
                    About Us
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="NavigationLink" to="/contact">
                    Contact Us
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="NavigationLink" to="/how-it-works">
                    How It Works
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="NavigationLink" to="/how-to-help">
                    How You Can Help
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="NavigationLink" to="/donate">
                    Donate
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          {/* ------------ */}
          <div className="col">
            <h4>Support</h4>
            <Nav vertical>
              <NavItem>
                <NavLink>
                  <Link className="NavigationLink" to="#">
                    FAQs
                  </Link>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                  <Link className="NavigationLink" to="#">
                    Your Account
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="NavigationLink" to="#">
                    Financial Information
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="NavigationLink" to="#">
                    Talk To an Agent
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link className="NavigationLink" to="/contact">
                    Need Something Else?
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          {/* ----------------- */}
          <div className="col">
            <h4>Follow Us</h4>
            <div>
              <BsFacebook />
              <BsTwitter />
              <BsInstagram />
              <BsLinkedin />
              <BsYoutube />
            </div>
          </div>
          <div className="col">
            <h4>Share Your Thoughts</h4>
            <div>
              <p>Address: 111 South 8th St.</p>
              <p>Omaha, Nebraska 68128</p>
              <br />
              <p>Phone: 1-402-111-1111</p>
              <br />
              <p>Email: InfiniteHope@gmail.com</p>
            </div>
          </div>
          <div className="row">
            <div className="col">Copyright</div>
            <div className="col">Terms of Service</div>
            <div className="col">Privacy Policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;

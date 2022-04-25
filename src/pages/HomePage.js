import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import React from "react";
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="overlay">
        <main>
          <div>
            <h1>Support Your Local Community Today</h1>
            <h2>Helping Secure A Better Tomorrow</h2>
          </div>
          <div className="custom-btn-group">
            <Link to="donate">
              <Button className="custom-btn" color="warning">
                Donate
              </Button>
            </Link>
            <Link to="how-it-works">
              <Button className="custom-btn" color="primary">
                Learn More
              </Button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;

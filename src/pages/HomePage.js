import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import React from "react";
const HomePage = () => {
  return (
    <div className="home-page">
      <main>
        <div>
          <h1>Support Your Local Community Today</h1>
          <h2>Helping Secure A Better Tomorrow</h2>
        </div>
        <div>
          <Link to="donate">
            <Button color="warning">Donate</Button>
          </Link>
          <Link to="how-it-works">
            <Button color="primary">Learn More</Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;

import { Link } from "react-router-dom";
import React from "react";
const HomePage = () => {
  return (
    <div className="page">
      <main>
        <div>
          <h1>Support Your Local Community Today</h1>
          <h2>Helping Secure A Better Tomorrow</h2>
        </div>
        <div>
          <Link to="how-it-works">
            <button>Learn More</button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;

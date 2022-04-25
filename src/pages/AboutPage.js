import { Link } from "react-router-dom";
import React from "react";

const AboutPage = () => {
  return (
    <div className="about-page">
      <main>
        <h1>About Us</h1>
        <div className="about-main-content">
          <h2>Thank you for your interest in Infinite Hope.</h2>
          <p>
            Here at Infinite Hope, we put the transparency back in to donating.
            With all of the ways you can donate today, it can get a little
            confusing and often times leave you wondering where or what your
            hard earned donation was used for. This can have a chilling effect
            and even deter people from donating in general. We would like to
            change that. There are many benefits with donating through us and
            some of those benefits include...
          </p>
          <ol>
            <li>Ability to donate directly to your local community</li>
            <li>Choose from numerous causes</li>
            <li>Track exactly where your donation went</li>
            <li>Get updates on what your donation was used for</li>
            <li>
              Get direct confirmation from your donation recipient that it was
              received
            </li>
            <li>
              Have the confidence that your ENTIRE donation goes to the cause
            </li>
            <li>
              Round up program to automatically round up card purchases, giving
              thr change directly to your cause
            </li>
            <li>Complete foundation transparency</li>
            <li>Ultra fast costumer service</li>
            <li>Tax write off receipts available</li>
          </ol>
          <p>
            For any other questions, please do not hesitate to{" "}
            <Link to="/contact">contact us</Link> or{" "}
            <Link to="#">talk with an agent today.</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;

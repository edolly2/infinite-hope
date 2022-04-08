import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(
  <Router>
    <App tab="home" />
  </Router>
);

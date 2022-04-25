import "./App.css";

import { Route, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DonatePage from "./pages/DonatePage";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./pages/HomePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import HowToHelpPage from "./pages/HowToHelpPage";

function App() {
  return (
    <div className="App container" fluid>
      <div className="row h-25">
        <div className="col">
          <HeaderComponent />
        </div>
      </div>
      <div className="page row">
        <div className="col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="how-it-works" element={<HowItWorksPage />} />
            <Route path="how-to-help" element={<HowToHelpPage />} />
            <Route path="donate" element={<DonatePage />} />
          </Routes>
        </div>
      </div>
      <div className="row">
        <div className="row">
          <p style={{ fontSize: 60 }} className="col-12">
            Thank You For Your Support!
          </p>
        </div>
        <div className="col">
          <FooterComponent />
        </div>
      </div>
    </div>
  );
}

export default App;

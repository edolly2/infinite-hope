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
      <HeaderComponent />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="how-to-help" element={<HowToHelpPage />} />
          <Route path="donate" element={<DonatePage />} />
        </Routes>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;

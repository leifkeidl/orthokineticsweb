//import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage.jsx";
import AboutPage from "../pages/AboutPage/AboutPage.jsx";
import DevPage from "../pages/DevPage/DevPage.jsx";
import DevelopmentPage from "../pages/DevelopmentPage/DevelopmentPage.jsx";
import ContactPage from "../pages/ContactPage/ContactPage.jsx";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/development" element={<DevelopmentPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/dev" element={<DevPage />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
export default App;

//import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import PlatformPage from "./components/PlatformPage.jsx";
import SolutionsPage from "./components/SolutionsPage.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
              </>
            }
          />
          <Route
            path="/solutions"
            element={
              <>
                <SolutionsPage />
              </>
            }
          />
          <Route
            path="/platform"
            element={
              <>
                <PlatformPage />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <AboutPage />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <ContactPage />
              </>
            }
          />
          {/* default */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

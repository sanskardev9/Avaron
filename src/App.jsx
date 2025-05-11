import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Drivers from "./pages/Drivers";
import Reports from "./pages/Reports";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import { Navbar } from "./components/Navbar";
import Dashboard from "./pages/Overview";
import Footer from "./components/Footer";
import LiveMapView from "./pages/LiveMapView";

const App = () => {
  return (
    <div style={{ backgroundColor: "#F8F9FA", height: "auto" }}>
      <Router>
          <Navbar />
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Dashboard />
                </>
              }
            />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/livemap" element={<LiveMapView />} />
          </Routes>
        </div>
        <></>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

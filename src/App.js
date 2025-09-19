import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginBox from "./components/LoginBox";
import Footer from "./components/Footer";
import SignUpBox from "./components/SignUpBox";
import FogotPassword from "./components/FogotPassword";
import Dashboard from "./components/Dashboard";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        {/* All page routes */}
        <Routes>
          <Route path="/" element={<LoginBox />} />
          <Route path="/signup" element={<SignUpBox />} />
          <Route path="/FogotPassword" element={<FogotPassword />} />
          <Route path="/dashboard" element={<Dashboard/>}  />
        </Routes>
        {/* Footer is OUTSIDE Routes -> always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

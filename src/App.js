import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginBox from "./components/LoginBox";
import Footer from "./components/Footer";
import SignupPage from "./components/SignupPage";
import SignUpBox from "./components/SignUpBox";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        {/* All page routes */}
        <Routes>
          <Route path="/" element={<LoginBox />} />
          <Route path="/SignupPage" element={<SignupPage />} />
          <Route path="/signup" element={<SignUpBox />} />
        </Routes>
        {/* Footer is OUTSIDE Routes -> always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

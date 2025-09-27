
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/FooterDasboard";
import Content from "../components/DashboardContent";
import "../styles/dashboard.css";
const DashboardLayout = ({ children }) => {
  return (
    <div className="wrapper d-flex">
      <Sidebar />
      <div className="main-panel">
        <Navbar />
        <div className="content-wrapper p-4" style={{ minHeight: "calc(100vh - 120px)" }}>
          {children}
          <Content/>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;

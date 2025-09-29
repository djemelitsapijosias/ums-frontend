import React from "react";
import { Link } from "react-router-dom";
import "../styles/dashboardcard.css";

const DashboardCard = ({ icon, title, value, progress, color, link }) => {
  return (
    <Link to={link} style={{textDecorationLine: "none"}}>
      <div className="dashboard-card">
        <div className={`dashboard-icon ${color}`}>{icon}</div>
        <div className="dashboard-content">
          <div className="dashboard-title">{title}</div>
          <div className="dashboard-value">{value}</div>
          <div className="dashboard-progress">
            <div
              className="dashboard-progress-bar"
              style={{ width: `${progress}%`, backgroundColor: color }}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DashboardCard;

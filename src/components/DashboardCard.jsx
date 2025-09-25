import React from "react";

const DashboardCard = ({ icon, title, value, progress, color, link }) => {
  return (
    <a href={link}>
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
    </a>
  );
};

export default DashboardCard;

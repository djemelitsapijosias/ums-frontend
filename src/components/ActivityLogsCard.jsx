import React from "react";

const ActivityLogsCard = ({ title, bgColor, logs }) => {
  return (
    <div className="card">
      <div className="card-header text-white" style={{ backgroundColor: bgColor }}>
        <h5 className="mb-0">{title}</h5>
      </div>
      <div className="card-body" style={{ overflowY: "auto", height: "250px" }}>
        {logs.length > 0 ? (
          <ul className="list-group">
            {logs.map((log, index) => (
              <li className="list-group-item" key={index}>
                <strong>{log.name}</strong> {log.action} on <em>{log.page}</em>
                <br />
                <small>{log.logged_at}</small>
              </li>
            ))}
          </ul>
        ) : (
          <p>No activity recorded yet.</p>
        )}
      </div>
    </div>
  );
};

export default ActivityLogsCard;

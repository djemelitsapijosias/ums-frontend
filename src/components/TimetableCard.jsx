import React from "react";

const TimetableCard = ({ title, bgColor, items }) => {
  return (
    <div className="card">
      <div className={`card-header text-white`} style={{ backgroundColor: bgColor }}>
        <h5 className="mb-0">{title}</h5>
      </div>
      <div className="card-body" style={{ overflowY: "auto", height: "250px" }}>
        {items.length > 0 ? (
          <ul className="list-group">
            {items.map((cls, index) => (
              <li className="list-group-item" key={index}>
                <strong>{cls.course_name}</strong> | SESSION: {cls.session_name} <br />
                TIME: {cls.time_shift} | BY: {cls.lecturer_name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No classes scheduled for today.</p>
        )}
      </div>
    </div>
  );
};

export default TimetableCard;

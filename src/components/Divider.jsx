import React from "react";
import "../styles/Divider.css";

function Divider({text}) {
  return (
    <div className="divider">
      <div className="line"></div>
      <span>{text}</span>
      <div className="line"></div>
    </div>
  );
}

export default Divider;
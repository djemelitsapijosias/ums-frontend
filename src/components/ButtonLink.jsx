import React from "react";
import "../styles/ButtonLink.css";
import { Link } from "react-router-dom";
function LoginButton({ text, link, icon }) {
  return (
    <Link className="btn-a" to={link} style={{ textDecoration: "none" }}>
      <button className="bnt-link">
        {icon}
        {text}
      </button>
    </Link>
  );
}

export default LoginButton;

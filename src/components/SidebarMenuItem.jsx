// src/components/SidebarMenuItem.jsx
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function SidebarMenuItem({ title, icon, items }) {
  const [open, setOpen] = useState(false);

  return (
    <li className={`menu-item ${open ? "open" : ""}`}>
      <div className="menu-title" onClick={() => setOpen(!open)}>
        {icon}
        <p>{title}</p>
        <FaAngleLeft className={`arrow ${open ? "rotate" : ""}`} />
      </div>
      {open && (
        <ul className="submenu">
          {items.map((item, i) => (
            <li key={i}>
              <Link to={item.path}>
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default SidebarMenuItem;

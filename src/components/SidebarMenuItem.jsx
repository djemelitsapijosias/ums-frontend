// src/components/SidebarMenuItem.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarMenuItem = ({ title, icon, items, activeMenu, setActiveMenu, id }) => {
  const location = useLocation();
  const isOpen = activeMenu === id;

  const handleToggle = () => {
    if (document.body.classList.contains("sidebar-collapsed")) return;
    setActiveMenu(isOpen ? null : id);
  };

  return (
    <li className={`menu-item ${isOpen ? "open" : ""}`}>
      <div className="menu-title" onClick={handleToggle}>
        {icon}
        <p>{title}</p>
        {items && items.length > 0 && <span className={`arrow ${isOpen ? "rotate" : ""}`}>&gt;</span>}
      </div>

      {items && isOpen && (
        <ul className="submenu">
          {items.map((item, idx) => (
            <li key={idx}>
              <Link to={item.path} className={location.pathname === item.path ? "active" : ""}>
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarMenuItem;

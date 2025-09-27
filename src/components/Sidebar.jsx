// src/components/Sidebar.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  FaUserCog,
  FaCoins,
  FaSlidersH,
  FaDatabase,
  FaFileAlt,
  FaFolderOpen,
  FaBlog,
  FaCogs,
} from "react-icons/fa";
import SidebarMenuItem from "./SidebarMenuItem";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";
import userprofile from "../assets/user2-160x160.jpg";
import applogo from "../assets/AdminLTELogo.png";

function Sidebar() {
  const { user } = useContext(AuthContext);
  const [activeMenu, setActiveMenu] = useState(null);

  const menus = [
    {
      id: 1,
      title: "USER-C-PANEL",
      icon: <FaUserCog className="text-info" />,
      items: [
        { label: "Accountants", icon: "fas fa-calculator", path: "/accountants" },
        { label: "Secretaries", icon: "fas fa-user-tie", path: "/secretaries" },
        { label: "Lecturers", icon: "fas fa-chalkboard-teacher", path: "/teachers" },
        { label: "Students", icon: "fas fa-user-graduate", path: "/students" },
      ],
    },
    {
      id: 2,
      title: "FEE-C-PANEL",
      icon: <FaCoins className="text-warning" />,
      items: [
        { label: "Student Payments", icon: "fas fa-wallet", path: "/student-payments" },
        { label: "Record New Payment", icon: "fas fa-file-invoice-dollar", path: "/record-payment" },
      ],
    },
    {
      id: 3,
      title: "DATA-C-PANEL",
      icon: <FaSlidersH className="text-primary" />,
      items: [
        { label: "Student Enrollment", icon: "fas fa-user-plus", path: "/enroll" },
        { label: "Grades Management", icon: "fas fa-clipboard-check", path: "/grades" },
        { label: "Course Setup", icon: "fas fa-plus-square", path: "/coursesetup" },
        { label: "Set Time Table", icon: "fas fa-clipboard", path: "/timetable" },
      ],
    },
    {
      id: 4,
      title: "Academic Database",
      icon: <FaDatabase style={{ color: "violet" }} />,
      items: [
        { label: "Departments", icon: "fas fa-building", path: "/departments" },
        { label: "Specialties", icon: "fas fa-project-diagram", path: "/specialties" },
        { label: "Academic Programs", icon: "fas fa-stream", path: "/programs" },
        { label: "Courses", icon: "fas fa-book-open", path: "/courses" },
      ],
    },
    {
      id: 5,
      title: "Documents & Reports",
      icon: <FaFileAlt />,
      items: [
        { label: "Academic Transcripts", icon: "fas fa-scroll", path: "/transcripts" },
        { label: "Students Id's", icon: "fas fa-id-card", path: "/student-ids" },
      ],
    },
    {
      id: 6,
      title: "Batch Processing",
      icon: <FaFolderOpen className="text-warning" />,
      items: [
        { label: "Batch Transcripts", icon: "fas fa-scroll", path: "/batch-transcripts" },
        { label: "Batch Student Id's", icon: "fas fa-id-card", path: "/batch-student-ids" },
      ],
    },
    {
      id: 7,
      title: "UMS Blog",
      icon: <FaBlog className="text-success" />,
      items: [
        { label: "New Post", icon: "fas fa-edit", path: "/new-post" },
        { label: "View Posts", icon: "fas fa-newspaper", path: "/view-posts" },
        { label: "Manage Posts", icon: "fas fa-tasks", path: "/manage-posts" },
      ],
    },
    {
      id: 8,
      title: "System Settings",
      icon: <FaCogs className="text-secondary" />,
      items: [{ label: "Backup & Recovery", icon: "fas fa-history", path: "/backup" }],
    },
  ];

  return (
    <aside className="sidebar">
      {/* Brand */}
      <Link to="/dashboard" className="brand-link" style={{ marginBottom: "0px" }}>
        <img src={applogo} alt="UMS Logo" className="brand-image" />
        <span> &nbsp;&nbsp; UMS | Admin</span>
      </Link>

      {/* User Panel */}
      <div className="user-panel">
        <div className="image">
          <img src={userprofile} alt="User" />
        </div>
        <div className="info">
          <span className="user-name">{user?.username || user?.fullName}</span>
        </div>
      </div>

      {/* Sidebar Menu */}
      <nav className="menu">
        <ul>
          {menus.map((menu) => (
            <SidebarMenuItem
              key={menu.id}
              id={menu.id}
              title={menu.title}
              icon={menu.icon}
              items={menu.items}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

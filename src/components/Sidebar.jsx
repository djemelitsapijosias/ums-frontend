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
        { label: "Accountants", icon: "", path: "/accountants" },
        { label: "Secretaries", icon: "", path: "/secretaries" },
        { label: "Lecturers", icon: "", path: "/teachers" },
        { label: "Students", icon: "", path: "/students" },
      ],
    },
    {
      id: 2,
      title: "FEE-C-PANEL",
      icon: <FaCoins className="text-warning" />,
      items: [
        { label: "Student Payments", icon: "", path: "/student-payments" },
        { label: "Record New Payment", icon: "", path: "/record-payment" },
      ],
    },
    {
      id: 3,
      title: "DATA-C-PANEL",
      icon: <FaSlidersH className="text-primary" />,
      items: [
        { label: "Student Enrollment", icon: "", path: "/enroll" },
        { label: "Grades Management", icon: "", path: "/grades" },
        { label: "Course Setup", icon: "", path: "/coursesetup" },
        { label: "Set Time Table", icon: "", path: "/timetable" },
      ],
    },
    {
      id: 4,
      title: "Academic Database",
      icon: <FaDatabase style={{ color: "violet" }} />,
      items: [
        { label: "Departments", icon: "", path: "/departments" },
        { label: "Specialties", icon: "", path: "/specialties" },
        { label: "Academic Programs", icon: "", path: "/programs" },
        { label: "Courses", icon: "", path: "/courses" },
      ],
    },
    {
      id: 5,
      title: "Documents & Reports",
      icon: <FaFileAlt />,
      items: [
        { label: "Academic Transcripts", icon: "", path: "/transcripts" },
        { label: "Students Id's", icon: "", path: "/student-ids" },
      ],
    },
    {
      id: 6,
      title: "Batch Processing",
      icon: <FaFolderOpen className="text-warning" />,
      items: [
        { label: "Batch Transcripts", icon: "", path: "/batch-transcripts" },
        { label: "Batch Student Id's", icon: "", path: "/batch-student-ids" },
      ],
    },
    {
      id: 7,
      title: "UMS Blog",
      icon: <FaBlog className="text-success" />,
      items: [
        { label: "New Post", icon: "", path: "/new-post" },
        { label: "View Posts", icon: "", path: "/view-posts" },
        { label: "Manage Posts", icon: "", path: "/manage-posts" },
      ],
    },
    {
      id: 8,
      title: "System Settings",
      icon: <FaCogs className="text-secondary" />,
      items: [{ label: "Backup & Recovery", icon: "", path: "/backup" }],
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

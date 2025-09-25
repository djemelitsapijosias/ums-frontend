// src/components/Sidebar.jsx
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaUserCog, FaCoins, FaSlidersH, FaDatabase, FaFileAlt, FaFolderOpen, FaBlog, FaCogs, FaSignOutAlt } from "react-icons/fa";
import SidebarMenuItem from "./SidebarMenuItem";
import "../styles/sidebar.css";

function Sidebar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <aside className="sidebar">
      {/* Brand */}
      <a href="/" className="brand-link">
        <img src="/images/AdminLTELogo.png" alt="UMS Logo" className="brand-image" />
        <span className="brand-text">UMS | Admin</span>
      </a>

      {/* User Panel */}
      <div className="user-panel">
        <div className="image">
          <img src="/images/user2-160x160.jpg" alt="User" />
        </div>
        <div className="info">
          <span className="user-name">{user?.fullName || user?.name || "Admin"}</span>
        </div>
      </div>

      {/* Sidebar Menu */}
      <nav className="menu">
        <ul>
          <SidebarMenuItem
            title="USER-C-PANEL"
            icon={<FaUserCog className="text-info" />}
            items={[
              { label: "Accountants", icon: "fas fa-calculator", path: "/accountants" },
              { label: "Secretaries", icon: "fas fa-user-tie", path: "/secretaries" },
              { label: "Lecturers", icon: "fas fa-chalkboard-teacher", path: "/teachers" },
              { label: "Students", icon: "fas fa-user-graduate", path: "/students" },
            ]}
          />

          <SidebarMenuItem
            title="FEE-C-PANEL"
            icon={<FaCoins className="text-warning" />}
            items={[
              { label: "Student Payments", icon: "fas fa-wallet", path: "/student-payments" },
              { label: "Record New Payment", icon: "fas fa-file-invoice-dollar", path: "/record-payment" },
            ]}
          />

          <SidebarMenuItem
            title="DATA-C-PANEL"
            icon={<FaSlidersH className="text-primary" />}
            items={[
              { label: "Student Enrollment", icon: "fas fa-user-plus", path: "/enroll" },
              { label: "Grades Management", icon: "fas fa-clipboard-check", path: "/grades" },
              { label: "Course Setup", icon: "fas fa-plus-square", path: "/coursesetup" },
              { label: "Set Time Table", icon: "fas fa-clipboard", path: "/timetable" },
            ]}
          />

          <SidebarMenuItem
            title="Academic Database"
            icon={<FaDatabase style={{ color: "violet" }} />}
            items={[
              { label: "Departments", icon: "fas fa-building", path: "/departments" },
              { label: "Specialties", icon: "fas fa-project-diagram", path: "/specialties" },
              { label: "Academic Programs", icon: "fas fa-stream", path: "/programs" },
              { label: "Courses", icon: "fas fa-book-open", path: "/courses" },
            ]}
          />

          <SidebarMenuItem
            title="Documents & Reports"
            icon={<FaFileAlt />}
            items={[
              { label: "Academic Transcripts", icon: "fas fa-scroll", path: "/transcripts" },
              { label: "Students Id's", icon: "fas fa-id-card", path: "/student-ids" },
            ]}
          />

          <SidebarMenuItem
            title="Batch Processing"
            icon={<FaFolderOpen className="text-warning" />}
            items={[
              { label: "Batch Transcripts", icon: "fas fa-scroll", path: "/batch-transcripts" },
              { label: "Batch Student Id's", icon: "fas fa-id-card", path: "/batch-student-ids" },
            ]}
          />

          <SidebarMenuItem
            title="UMS Blog"
            icon={<FaBlog className="text-success" />}
            items={[
              { label: "New Post", icon: "fas fa-edit", path: "/new-post" },
              { label: "View Posts", icon: "fas fa-newspaper", path: "/view-posts" },
              { label: "Manage Posts", icon: "fas fa-tasks", path: "/manage-posts" },
            ]}
          />

          <SidebarMenuItem
            title="System Settings"
            icon={<FaCogs className="text-secondary" />}
            items={[
              { label: "Backup & Recovery", icon: "fas fa-history", path: "/backup" },
            ]}
          />

          {/* Logout */}
          <li className="nav-item logout">
            <button onClick={logout}>
              <FaSignOutAlt className="text-danger" /> Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
